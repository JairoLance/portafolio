const jobs = [
  {
    role: "Lead Mobile SDK Engineer",
    company: "Milio · Fintech de pagos y transferencias internacionales",
    period: "Remoto",
    bullets: [
      "SDK nativo en Swift/SwiftUI y Kotlin/Jetpack Compose con paridad de funciones, compatibilidad estricta iOS 14+ y configuración por módulo con i18n en 4 idiomas (ES, EN, PT, FR).",
      "Flujos de pago: 3D Secure por WebView con Evervault, transferencias internacionales (cotización FX en tiempo real con debounce, desglose de costos, verificación y comprobante compartible) y componentes de moneda con detección de tarjeta Visa/Mastercard.",
      "Puente React Native para iOS y Android; distribución con XCFrameworks y CocoaPods, versionado por tags y ramas white-label por cliente, y automatización de entornos local/remoto con Podfile dinámico.",
    ],
    tags: ["Swift", "SwiftUI", "Kotlin", "Compose", "React Native", "3D Secure"],
  },
  {
    role: "Desarrollador de Software",
    company: "Debrain · Empresa de EE. UU. · Brooklyn, Nueva York",
    period: "Remoto",
    bullets: [
      "Lift eFoil: app móvil para registrar sesiones, actualizar el equipo y obtener asistencia al cliente en un solo lugar. Permite mapear, revisar y compartir recorridos sincronizando el mando Elite.",
      "Sandía: plataforma para la gestión de eventos y recepciones.",
    ],
    tags: ["Lift eFoil", "Bluetooth", "Sensores", "Sandía", "Eventos"],
  },
  {
    role: "Desarrollador Full Stack Independiente",
    company: "Proyectos propios y de clientes",
    period: "Independiente",
    bullets: [
      "FLUXION: plataforma web con backend NestJS + Prisma y frontend Next.js, con módulo de préstamos (pagos diarios, semanales, quincenales y mensuales).",
      "Sistemas POS de ventas/compras, de pedidos y de tickets en PHP (Laravel, CodeIgniter) con Vue.js y MySQL.",
      "Infraestructura en DigitalOcean: Linux, proxy inverso Nginx, SSL con Certbot, DNS y MySQL remoto.",
    ],
    tags: ["NestJS", "Next.js", "Laravel", "Vue.js", "MySQL", "Nginx"],
  },
  {
    role: "Administrador y Desarrollador de Bases de Datos",
    company: "Distracom",
    period: "2014 – 2015",
    bullets: ["Administración y desarrollo de bases de datos."],
    tags: ["SQL"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="experience">
      <p className="eyebrow">Experiencia</p>
      <h2 className="section-title">Trayectoria profesional</h2>
      <div className="timeline">
        {jobs.map((j) => (
          <article key={j.role} className="job">
            <span className="dot" />
            <div className="job-head">
              <h3>{j.role}</h3>
              <span className="period">{j.period}</span>
            </div>
            <p className="company">{j.company}</p>
            <ul>
              {j.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <div className="chips">
              {j.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
