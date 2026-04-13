/**
 * projects.js
 * ─────────────────────────────────────────────────────
 * Central data store for all portfolio projects.
 * Add a new project by pushing an object to PROJECTS.
 * The renderCard() function is also defined here so both
 * index.html and projects.html can use it.
 * ─────────────────────────────────────────────────────
 */

const PROJECTS = [
  {
    id: "buck-converter",
    title: "Closed-Loop Buck Converter with PI Control",
    summary: "State-space averaging, small-signal linearisation, transfer function derivation, and digital PI implementation verified in QSpice.",
    // LaTeX works inside summary — wrap with $ or $$
    // e.g. "Control-to-output transfer function $G_{vd}(s)$ derived from first principles."
    image: "assets/projects/buck-converter/cover.png",
    video: null,           // set to "assets/.../demo.mp4" if you have a video
    tags: ["power-electronics", "control-systems", "simulation"],
    tools: ["QSpice", "MATLAB"],
    year: "2024",
    status: "complete",   // "complete" | "in-progress" | "archived"
    featured: true,
    link: "projects/buck-converter.html",
    github: "https://github.com/YOUR_USERNAME/buck-converter-pi"
  },
  {
    id: "grid-inverter",
    title: "Grid-Connected Inverter with Battery Charging",
    summary: "Three-phase grid-connected inverter with MPPT and battery management modelled in Simulink. Includes LCL filter design and synchronisation via PLL.",
    image: "assets/projects/grid-inverter/cover.png",
    video: null,
    tags: ["power-electronics", "control-systems", "simulation"],
    tools: ["Simulink", "MATLAB"],
    year: "2024",
    status: "in-progress",
    featured: true,
    link: "projects/grid-inverter.html",
    github: "https://github.com/YOUR_USERNAME/grid-inverter"
  },
  {
    id: "ac-thermal-control",
    title: "Air-Conditioning Thermal Control — PI vs ON/OFF Analysis",
    summary: "Thermal modelling of an AC system with Euler-method simulation, ON/OFF and PI control comparison, energy analysis, and financial viability study.",
    image: "assets/projects/ac-thermal/cover.png",
    video: null,
    tags: ["control-systems", "simulation"],
    tools: ["MATLAB"],
    year: "2024",
    status: "complete",
    featured: true,
    link: "projects/ac-thermal-control.html",
    github: "https://github.com/YOUR_USERNAME/ac-thermal-control"
  },
  {
    id: "thermistor-characterisation",
    title: "Thermistor Characterisation via Wheatstone Bridge",
    summary: "NTC thermistor physics model derivation, Wheatstone bridge linearisation, curve fitting with MATLAB least-squares regression, and measurement uncertainty analysis.",
    image: "assets/projects/thermistor/cover.png",
    video: null,
    tags: ["simulation"],
    tools: ["MATLAB"],
    year: "2024",
    status: "complete",
    featured: false,
    link: "projects/thermistor.html",
    github: "https://github.com/YOUR_USERNAME/thermistor-characterisation"
  },
  {
    id: "lab-allocation-system",
    title: "Centralised Lab & Equipment Allocation System",
    summary: "Full-stack web application for university lab booking with Spring Security JWT auth, role-based access control, JPA entity relationships, and conflict detection.",
    image: "assets/projects/lab-system/cover.png",
    video: null,
    tags: ["software"],
    tools: ["Spring Boot", "Java", "H2", "JWT"],
    year: "2024",
    status: "in-progress",
    featured: false,
    link: "projects/lab-allocation.html",
    github: "https://github.com/YOUR_USERNAME/lab-allocation"
  }
];

/**
 * Renders a project card HTML string.
 * Used on both index.html (featured) and projects.html (all).
 */
function renderCard(p) {
  const statusMap = {
    complete:    { label: "Complete",     cls: "badge-complete" },
    "in-progress": { label: "In Progress", cls: "badge-progress" },
    archived:    { label: "Archived",     cls: "badge-archived" }
  };
  const s = statusMap[p.status] || statusMap.complete;

  const mediaHtml = p.video
    ? `<video class="card-media" muted loop playsinline poster="${p.image}">
         <source src="${p.video}" type="video/mp4"/>
       </video>`
    : p.image
      ? `<img class="card-media" src="${p.image}" alt="${p.title}" loading="lazy"/>`
      : `<div class="card-media card-media--placeholder"></div>`;

  const toolPills = p.tools.map(t => `<span class="tool-pill">${t}</span>`).join('');

  return `
    <article class="project-card">
      <a href="${p.link}" class="card-media-link">
        ${mediaHtml}
      </a>
      <div class="card-body">
        <div class="card-meta">
          <span class="${s.cls}">${s.label}</span>
          <span class="card-year">${p.year}</span>
        </div>
        <h3 class="card-title"><a href="${p.link}">${p.title}</a></h3>
        <p class="card-summary">${p.summary}</p>
        <div class="card-tools">${toolPills}</div>
        <div class="card-actions">
          <a href="${p.link}" class="card-read-link">Read more →</a>
          ${p.github ? `<a href="${p.github}" class="card-gh-link" target="_blank">GitHub ↗</a>` : ''}
        </div>
      </div>
    </article>
  `;
}
