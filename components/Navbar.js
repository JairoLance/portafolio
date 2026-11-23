import { BACK, FRONT } from "./cloudData";

const links = [
  ["Inicio", "#inicio"],
  ["Sobre mí", "#sobre-mi"],
  ["Experiencia", "#experiencia"],
  ["Skills", "#skills"],
  ["Proyectos", "#proyectos"],
  ["Formación", "#formacion"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <svg className="cloud-svg" viewBox="0 0 1080 150" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="cg-front" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1080" y2="0">
            <stop offset="0" stopColor="#8b7cf6" />
            <stop offset="0.55" stopColor="#7a86f7" />
            <stop offset="1" stopColor="#5b9bf8" />
          </linearGradient>
          <linearGradient id="cg-shine" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="80">
            <stop offset="0" stopColor="#fff" stopOpacity=".16" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          
        </defs>
        <g fill="#cfd6ff" opacity=".9" transform="translate(0 -7)">
          {BACK.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} />)}
        </g>
        <g>{FRONT.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="url(#cg-front)" />)}{FRONT.map(([x, y, r], i) => <circle key={"s" + i} cx={x} cy={y} r={r} fill="url(#cg-shine)" />)}</g>
      </svg>
      <a href="#inicio" className="logo">
        <span className="logo-mark">&lt;/&gt;</span> Jairo Lance
      </a>
      <nav>
        {links.map(([label, href], i) => (
          <a key={href} href={href} className={i === 0 ? "active" : ""}>
            {label}
          </a>
        ))}
      </nav>
      <a href="#contacto" className="btn btn-sm">Contáctame</a>
    </header>
  );
}
