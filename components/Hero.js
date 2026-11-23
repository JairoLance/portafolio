const socials = [
  ["GH", "https://github.com/JairoLance", "GitHub"],
  ["in", "https://www.linkedin.com/in/jairo-luis-torres-lance-a1a503200", "LinkedIn"],
  ["@", "mailto:ingtorres1986@gmail.com", "Correo"],
];

const stats = [
  ["iOS + Android", "SDK nativo"],
  ["Full Stack", "Web & servidores"],
  ["Híbrido", "React Native · Flutter"],
];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <p className="hi">¡Hola! Soy</p>
        <h1>Jairo Lance 👋</h1>
        <h2>Senior Mobile SDK Engineer</h2>
        <p className="role">iOS &amp; Android · Fintech | Full Stack Web</p>
        <p className="lead">
          Experiencia de punta a punta: desde el servidor y la base de datos
          hasta el SDK en el teléfono del usuario. He trabajado con Debrain (Brooklyn, NY) y lidero el SDK móvil nativo de
          Milio, que otras empresas integran en sus apps iOS, Android y React
          Native para transferencias internacionales y pagos con tarjeta.
        </p>
        <div className="socials">
          {socials.map(([s, href, label]) => (
            <a key={s} href={href} aria-label={label} target="_blank" rel="noreferrer">{s}</a>
          ))}
        </div>
        <div className="actions">
          <a href="#contacto" className="btn">Hablemos</a>
          <a href="#proyectos" className="link">Ver proyectos ↗</a>
        </div>
        <ul className="stats">
          {stats.map(([a, b]) => (
            <li key={a}><strong>{a}</strong><span>{b}</span></li>
          ))}
        </ul>
      </div>
      <div className="hero-photo">
        <img src="/jairo-cutout.png" alt="Jairo Lance" />
        <span className="orb" aria-hidden="true" />
        {["Swift", "Kotlin", "React Native", "Flutter", "BLE"].map((t, i) => (
          <span key={t} className={`float-chip fc${i + 1}`} aria-hidden="true">{t}</span>
        ))}
      </div>
      <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,70 C300,10 700,130 1440,30 L1440,120 L0,120 Z" fill="#fafaff" />
      </svg>
    </section>
  );
}

