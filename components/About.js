const skills = [
  ["Mobile nativo (Swift / Kotlin)", 95, "#8b7cf6"],
  ["React Native / Flutter", 90, "#3b82f6"],
  ["SDKs y distribución", 92, "#5fae92"],
  ["Full Stack Web (Next.js / NestJS)", 88, "#f5c97b"],
  ["Infraestructura Linux", 82, "#e5534b"],
];

export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="about-photo">
        <img className="body" src="/jairo-cutout.png" alt="Jairo Lance" />
        <img className="head" src="/jairo-cutout.png" alt="" aria-hidden="true" />
      </div>
      <div className="about-text">
        <p className="eyebrow left">Sobre mí</p>
        <h2>Del servidor al SDK en el teléfono del usuario</h2>
        <p className="muted">
          Soy Jairo Luis Torres Lance, ingeniero en Montería, Colombia, y
          trabajo de forma remota. Lidero el SDK móvil nativo de Milio (fintech
          de pagos y transferencias internacionales), con sólida experiencia en lenguajes híbridos (React Native y Flutter), incluyendo integración de sensores y sistemas Bluetooth, integrado por otras
          empresas en apps iOS, Android y React Native. Además tengo una sólida
          trayectoria full stack web y en administración de servidores Linux.
        </p>
        <div className="skills">
          {skills.map(([name, pct, color]) => (
            <div key={name} className="skill">
              <div className="skill-head"><span>{name}</span><span>{pct}%</span></div>
              <div className="bar">
                <div style={{ width: `${pct}%`, background: color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

