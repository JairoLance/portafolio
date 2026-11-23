const socials = ["GH", "in", "X", "IG", "▶"];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <p className="hi">¡Hola! Soy</p>
        <h1>Jairo Lance 👋</h1>
        <h2>Desarrollador de Software</h2>
        <p className="lead">
          Construyo aplicaciones web y de software modernas, escalables y bien
          diseñadas. Apasionado por el código limpio y las soluciones que
          resuelven problemas reales.
        </p>
        <div className="socials">
          {socials.map((s) => (
            <a key={s} href="#contacto" aria-label={s}>{s}</a>
          ))}
        </div>
        <div className="actions">
          <a href="#" className="btn">Descargar CV</a>
          <a href="#contacto" className="link">Hablemos ↗</a>
        </div>
      </div>
      <div className="hero-photo">
        {/* Coloca tu foto en public/jairo-cutout.png */}
        <img src="/jairo-cutout.png" alt="Jairo Lance" />
      </div>
      <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,70 C300,10 700,130 1440,30 L1440,120 L0,120 Z" fill="#fafaff" />
      </svg>
    </section>
  );
}




