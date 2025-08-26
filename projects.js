const PROJECTS = [
  {
    name: "Todo App",
    description: "Eenvoudige todo-app met lokale opslag en drag & drop.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["javascript", "frontend", "vanilla"],
    repo: "https://github.com/gebruikersnaam/todo-app",
    demo: "https://gebruikersnaam.github.io/todo-app/"
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
  const demoBtn = p.demo ? `<a class="link primary" href="${p.demo}" target="_blank" rel="noreferrer">Live demo</a>` : "";
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