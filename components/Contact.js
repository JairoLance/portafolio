export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <h2>¿Construimos algo juntos?</h2>
      <p>Disponible para proyectos remotos de SDKs móviles, fintech y desarrollo full stack.</p>
      <div className="actions center">
        <a className="btn btn-light" href="mailto:ingtorres1986@gmail.com">ingtorres1986@gmail.com</a>
        <a className="btn btn-ghost" href="https://www.linkedin.com/in/jairo-luis-torres-lance-a1a503200" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn btn-ghost" href="https://github.com/JairoLance" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <small>© {new Date().getFullYear()} Jairo Luis Torres Lance · Montería, Colombia</small>
    </section>
  );
}
