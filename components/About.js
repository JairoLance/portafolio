const skills = [
  ["Frontend (React / Next.js)", 93, "#8b7cf6"],
  ["Backend (Node.js)", 90, "#5fae92"],
  ["Bases de datos", 87, "#f5c97b"],
  ["DevOps / Cloud", 75, "#e5534b"],
];

export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="about-photo">
        {/* Coloca tu foto en public/jairo-cutout.png */}
        <img className="body" src="/jairo-cutout.png" alt="Jairo Lance" />
        <img className="head" src="/jairo-cutout.png" alt="" aria-hidden="true" />
      </div>
      <div className="about-text">
        <p className="eyebrow left">Sobre mí</p>
        <h2>¿Por qué contratarme para tu próximo proyecto?</h2>
        <p className="muted">
          Soy desarrollador de software y me encanta adquirir nuevas
          experiencias y aprender de lo que me rodea. Pronto añadiré aquí mis
          proyectos y experiencia profesional.
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
        <a href="#contacto" id="contacto" className="btn">Contrátame</a>
      </div>
    </section>
  );
}



