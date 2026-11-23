const projects = [
  {
    name: "Milio SDK",
    text: "SDK móvil nativo para iOS y Android con puente React Native: transferencias internacionales, pagos con tarjeta y 3D Secure.",
    tags: ["Swift", "Kotlin", "React Native"],
  },
  {
    name: "Lift eFoil App",
    text: "App de Lift eFoil (Debrain, Brooklyn NY) para registrar sesiones, actualizar el equipo y recibir asistencia al cliente. Mapea, revisa y comparte recorridos sincronizando el mando Elite.",
    tags: ["Móvil", "Bluetooth", "Sensores"],
  },
  {
    name: "Sandía",
    text: "Plataforma de Debrain para la gestión de eventos y recepciones.",
    tags: ["Debrain", "Eventos", "Recepciones"],
  },
  {
    name: "FLUXION",
    text: "Plataforma web con backend NestJS + Prisma y frontend Next.js. Incluye módulo de préstamos con frecuencias diaria, semanal, quincenal y mensual.",
    tags: ["NestJS", "Prisma", "Next.js"],
  },
  {
    name: "Sistemas POS y pedidos",
    text: "Sistemas de ventas/compras, pedidos y tickets desarrollados en PHP con Vue.js y MySQL.",
    tags: ["Laravel", "CodeIgniter", "Vue.js"],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="projects">
      <p className="eyebrow">Proyectos</p>
      <h2 className="section-title">Trabajo destacado</h2>
      <div className="cards">
        {projects.map((p) => (
          <article key={p.name} className="card project">
            <h3>{p.name}</h3>
            <p>{p.text}</p>
            <div className="chips">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
