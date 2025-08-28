const PROJECTS = [
  {
    name: "Todo App",
    description: "Eenvoudige todo-app met lokale opslag en drag & drop.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["javascript", "frontend", "vanilla"],
    repo: "https://github.com/tiementurner/Pong_SinglePageApp",
    demo: "https://gebruikersnaam.github.io/pong/"
  },
  {
    name: "Weather API",
    description: "Kleine Node.js API die weerdata doorstuurt met caching.",
    image: "https://images.unsplash.com/photo-1502303756783-0be1d6c3a7d6?q=80&w=1200&auto=format&fit=crop",
    tags: ["node", "api", "backend"],
    repo: "https://github.com/gebruikersnaam/weather-api",
    demo: ""
  },
  {
    name: "Portfolio Site",
    description: "Deze site! Statische pagina gehost op GitHub Pages.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    tags: ["html", "css", "gh-pages"],
    repo: "https://github.com/gebruikersnaam/gebruikersnaam.github.io",
    demo: "https://gebruikersnaam.github.io/"
  },
];

function cardTemplate(p){
  const img = p.image || PLACEHOLDER;
  const tags = (p.tags||[]).map(t=>`<span class="chip">${t}</span>`).join("");
  const repoBtn = p.repo ? `<a class="link secondary" href="${p.repo}" target="_blank" rel="noreferrer">Code</a>` : "";
  const InfoBtn = p.info ? `<a class="link primary" href="${p.info}" target="_blank" rel="noreferrer">Info</a>` : "";
  return `
    <article class="card" aria-label="${p.name}">
      <img class="thumb" src="${img}" alt="Screenshot van ${p.name}">
      <div class="content">
        <div class="name">${p.name}</div>
        <p class="desc">${p.description || ''}</p>
        <div class="chips">${tags}</div>
        <div class="actions">${repoBtn}${demoBtn}</div>
      </div>
    </article>
  `;
}


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

const $grid = document.getElementById('grid');

function render(){
  if (!PROJECTS.length) {
    $grid.innerHTML = `<div class="card" style="padding:16px"><p class="desc">Geen projecten gevonden.</p></div>`;
    return;
  }
  $grid.innerHTML = PROJECTS.map(cardTemplate).join('');
}

render();
