const items = [
  ["🎓", "Ingeniería Informática y Telecomunicaciones", "Universidad Pontificia Bolivariana, Montería · 2010"],
  ["📜", "Diplomado en Docencia Universitaria", "Formación complementaria"],
  ["🪪", "Matrícula profesional COPNIA", "22832-387304 COR"],
  ["🌎", "Idiomas", "Español nativo · Inglés B1"],
];

export default function Education() {
  return (
    <section id="formacion" className="education">
      <p className="eyebrow">Formación</p>
      <h2 className="section-title">Educación y credenciales</h2>
      <div className="edu-grid">
        {items.map(([icon, title, sub]) => (
          <div key={title} className="edu">
            <span className="icon">{icon}</span>
            <div>
              <h3>{title}</h3>
              <p>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
