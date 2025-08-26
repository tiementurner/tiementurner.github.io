<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mijn Projecten • Portfolio</title>
  <meta name="description" content="Showcase van mijn GitHub repositories met screenshots en uitleg." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b1020;
      --card: #11162a;
      --muted: #b4bdc8;
      --text: #e6edf3;
      --brand: #7c9cff;
      --brand-2: #9f7cff;
      --ring: #4450ff55;
      --shadow: 0 10px 25px rgba(0,0,0,.25);
      --radius: 18px;
    }
    @media (prefers-color-scheme: light) {
      :root{
        --bg: #f6f7fb; --card: #ffffff; --muted:#5b6876; --text:#0d1321; --brand:#415aff; --brand-2:#7a3dff; --ring:#4450ff33;
      }
    }
    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
      margin: 0;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
      background: radial-gradient(1200px 800px at 10% -10%, #1b2244 0%, transparent 60%),
                  radial-gradient(900px 700px at 110% 10%, #2a1a52 0%, transparent 60%),
                  var(--bg);
      color: var(--text);
      line-height: 1.55;
    }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 1150px; margin: 0 auto; padding: 28px 20px 60px; }

    /* Header */
    header { display: grid; gap: 16px; align-items: start; margin-bottom: 22px; }
    .titlewrap { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
    h1 { margin: 0; font-size: clamp(28px, 4vw, 42px); letter-spacing: -0.02em; }
    .tag { padding: 6px 10px; border-radius: 999px; font-weight: 600; font-size: 12px; background: linear-gradient(90deg, var(--brand), var(--brand-2)); color: white; box-shadow: var(--shadow); }
    p.lead { margin: 6px 0 0; color: var(--muted); max-width: 70ch; }

    /* Controls */
    .controls { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
    .control { background: var(--card); border: 1px solid #ffffff10; padding: 10px 12px; border-radius: 12px; box-shadow: var(--shadow); display: flex; align-items: center; gap: 8px; }
    .control input, .control select { background: transparent; border: 0; outline: none; color: var(--text); font: inherit; min-width: 160px; }
    .control input::placeholder { color: var(--muted); }
    .btn { cursor: pointer; border: 1px solid #ffffff15; background: linear-gradient(180deg, #ffffff10, #00000005); padding: 10px 14px; border-radius: 12px; font-weight: 600; transition: transform .06s ease, box-shadow .2s ease; }
    .btn:hover { transform: translateY(-1px); box-shadow: 0 10px 20px #00000025; }

    /* Grid */
    .grid { display: grid; gap: 16px; grid-template-columns: repeat(1, minmax(0, 1fr)); margin-top: 18px; }
    @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (min-width: 980px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }

    /* Card */
    .card { position: relative; background: linear-gradient(180deg, #ffffff08, #00000010), var(--card); border: 1px solid #ffffff12; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); display: flex; flex-direction: column; }
    .thumb { aspect-ratio: 16/9; width: 100%; object-fit: cover; background: #0d1321; }
    .content { padding: 14px; display: grid; gap: 10px; flex: 1; }
    .name { font-weight: 700; letter-spacing: -0.01em; font-size: 18px; }
    .desc { color: var(--muted); font-size: 14px; }
    .chips { display: flex; gap: 8px; flex-wrap: wrap; }
    .chip { font-size: 12px; padding: 6px 10px; border-radius: 999px; background: #ffffff10; border: 1px solid #ffffff12; }

    .actions { display: flex; gap: 8px; margin-top: auto; }
    .link { flex: 1; text-align: center; border-radius: 10px; padding: 10px 12px; border: 1px solid #ffffff18; font-weight: 600; }
    .link.primary { background: linear-gradient(90deg, var(--brand), var(--brand-2)); color: white; border: none; }
    .link.secondary { background: #ffffff0d; }

    /* Footer */
    footer { margin-top: 30px; color: var(--muted); font-size: 13px; text-align: center; }

    /* Tiny GitHub mark */
    .ghmark { position: fixed; right: 14px; bottom: 14px; opacity: .8; }
    .ghmark a { display: inline-flex; align-items: center; gap: 8px; background: var(--card); padding: 8px 10px; border: 1px solid #ffffff15; border-radius: 12px; }
    .ghmark svg { width: 18px; height: 18px; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="titlewrap">
        <span class="tag">GitHub Portfolio</span>
        <h1>Mijn Projecten</h1>
      </div>
      <p class="lead">Een selectie van repositories en experimenten. Klik door voor de code of een live demo. Pas de gegevens onderaan in het script aan om je eigen projecten te tonen.</p>
    </header>

    <main class="grid" id="grid"></main>

    <footer>
      Gemaakt met GitHub Pages.
    </footer>
  </div>

  <div class="ghmark">
    <a href="https://github.com/" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.68 7.68 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      <span>Volg mij op GitHub</span>
    </a>
  </div>

  
  <script>


    // === 2) Optioneel: standaardafbeelding als image ontbreekt ===
    const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'>
        <defs>
          <linearGradient id='g' x1='0' x2='1'>
            <stop offset='0' stop-color='%237c9cff'/>
            <stop offset='1' stop-color='%239f7cff'/>
          </linearGradient>
        </defs>
        <rect width='1200' height='675' fill='url(#g)'/>
        <g font-family='Inter, Arial' font-size='54' fill='white'>
          <text x='60' y='110' opacity='.9'>Project Screenshot</text>
          <text x='60' y='180' opacity='.8'>Voeg je eigen afbeelding toe</text>
        </g>
      </svg>
    `);

    // === 3) Rendering & filters ===
    const $grid = document.getElementById('grid');
    const $q = document.getElementById('q');
    const $tag = document.getElementById('tag');
    const $reset = document.getElementById('reset');
  
  </script>
  <script src="/projects.js"></script>
</body>
</html>
