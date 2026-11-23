const services = [
  { icon: "🖥️", title: "Desarrollo Web", text: "Aplicaciones web rápidas y responsivas con React y Next.js." },
  { icon: "⚙️", title: "Backend y APIs", text: "APIs robustas, bases de datos y arquitectura escalable." },
  { icon: "📱", title: "Apps Móviles", text: "Aplicaciones multiplataforma con foco en rendimiento." },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <p className="eyebrow">Servicios</p>
      <h2 className="section-title">Qué servicios ofrezco</h2>
      <div className="cards">
        {services.map((s) => (
          <article key={s.title} className="card">
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="card-foot">
              <span>Explorar</span>
              <span className="arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
