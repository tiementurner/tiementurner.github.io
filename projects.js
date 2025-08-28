const PROJECTS = [
  {
    name: "Cub3D Raycaster",
    description: "A raycasting project in C using Minilibx/SDL2, based on Wolfenstein 3D. Developed as part of the 42 curriculum. Features texture mapping, sprite rendering, and basic game mechanics.",
    image: "Screenshot 2025-08-28 130514.png",
    tags: ["C", "Raycasting", "SDL2", "GameDev", "42", "Graphics", "Algorithms", "Webassembly"],
    repo: "https://github.com/tiementurner/cub3d",
    demo: "https://tiementurner.github.io/cub3d/cub3D.html"
  },
  {
    name: "Pong Multiplayer SPA",
    description: "",
    image: "",
    tags: ["NestJS", "React", "RESTful API", "backend", "frontend", "websockets", "SPA", "game", "PostgreSQL"],
    repo: "https://github.com/tiementurner/Pong_SinglePageApp",
    demo: ""
  },
  {
    name: "Minishell",
    description: "",
    image: "",
    tags: ["C", "Unix", "Shell", "42", "System Programming"],
    repo: "https://github.com/tiementurner/Minishell_42",
    demo: "https://gebruikersnaam.github.io/"
  },
];

function cardTemplate(p){
  const img = p.image || PLACEHOLDER;
  const tags = (p.tags||[]).map(t=>`<span class="chip">${t}</span>`).join("");
  const repoBtn = p.repo ? `<a class="link secondary" href="${p.repo}" target="_blank" rel="noreferrer">Code</a>` : "";
  const DemoBtn = p.demo ? `<a class="link primary" href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : "";
  return `
    <article class="card" aria-label="${p.name}">
      <img class="thumb" src="${img}" alt="Screenshot van ${p.name}">
      <div class="content">
        <div class="name">${p.name}</div>
        <p class="desc">${p.description || ''}</p>
        <div class="chips">${tags}</div>
        <div class="actions">${repoBtn}${DemoBtn}</div>
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
