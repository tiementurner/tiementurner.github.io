var statusElement = document.getElementById("status"),
    progressElement = document.getElementById("progress"),
    spinnerElement = document.getElementById("spinner"),
    canvasElement = document.getElementById("canvas"),
    outputElement = document.getElementById("output");

if (outputElement) {
    outputElement.value = "";
}

canvasElement.addEventListener("webglcontextlost", function(e) {
    alert("WebGL context lost. You will need to reload the page.");
    e.preventDefault();
}, false);

var Module = {
    print: function(...e) {
        console.log(...e);
        if (outputElement) {
            var t = e.join(" ");
            outputElement.value += t + "\n";
            outputElement.scrollTop = outputElement.scrollHeight;
        }
    },
    canvas: canvasElement,
    setStatus: function(e) {
        if (Module.setStatus.last ??= { time: Date.now(), text: "" }, e !== Module.setStatus.last.text) {
            var t = e.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/),
                n = Date.now();
            t && n - Module.setStatus.last.time < 30 || (
                Module.setStatus.last.time = n,
                Module.setStatus.last.text = e,
                t ? (
                    e = t[1],
                    progressElement.value = 100 * parseInt(t[2]),
                    progressElement.max = 100 * parseInt(t[4]),
                    progressElement.hidden = false,
                    spinnerElement.hidden = false
                ) : (
                    progressElement.value = null,
                    progressElement.max = null,
                    progressElement.hidden = true,
                    e || (spinnerElement.style.display = "none")
                ),
                statusElement.innerHTML = e
            );
        }
    },
    totalDependencies: 0,
    monitorRunDependencies: function(e) {
        this.totalDependencies = Math.max(this.totalDependencies, e);
        Module.setStatus(e ? "Preparing... (" + (this.totalDependencies - e) + "/" + this.totalDependencies + ")" : "All downloads complete.");
    }
};

Module.setStatus("Downloading...");
window.onerror = function(e) {
    Module.setStatus("Exception thrown, see JavaScript console");
    spinnerElement.style.display = "none";
    Module.setStatus = function(e) {
        e && console.error("[post-exception status] " + e);
    };
};