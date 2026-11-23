const links = [
  ["Inicio", "#inicio"],
  ["Sobre mí", "#sobre-mi"],
  ["Servicios", "#servicios"],
  ["Proyectos", "#proyectos"],
  ["Testimonios", "#testimonios"],
];

export default function Navbar() {
  return (
    <header className="navbar">
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
