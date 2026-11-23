const services = [
  { n: "01", icon: "📱", title: "SDKs móviles nativos", text: "Swift/SwiftUI y Kotlin/Jetpack Compose con paridad entre plataformas, compatibilidad iOS 14+ y configuración por módulo.", tags: ["Swift", "Kotlin", "XCFramework", "CocoaPods"], span: "wide" },
  { n: "02", icon: "🔀", title: "Desarrollo híbrido", text: "Amplia experiencia en React Native (puentes nativos iOS/Android) y Flutter e integración de sensores y sistemas Bluetooth (BLE) en apps multiplataforma de alto rendimiento.", tags: ["React Native", "Flutter", "Bluetooth BLE", "Sensores"] },
  { n: "03", icon: "💳", title: "Pagos y fintech", text: "3D Secure vía WebView, cotización FX en tiempo real y transferencias internacionales.", tags: ["3D Secure", "FX", "i18n"] },
  { n: "04", icon: "🖥️", title: "Full Stack Web", text: "Plataformas con NestJS + Prisma, Next.js, Vue y PHP sobre MySQL y PostgreSQL.", tags: ["Next.js", "NestJS", "Laravel"], span: "wide" },
  { n: "05", icon: "☁️", title: "Infraestructura", text: "Servidores Linux en DigitalOcean con Nginx, SSL con Certbot, DNS y MySQL remoto.", tags: ["Linux", "Nginx", "DigitalOcean"], span: "full" },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <p className="eyebrow">Especialidades</p>
      <h2 className="section-title">En qué puedo ayudarte</h2>
      <div className="bento">
        {services.map((s) => (
          <article key={s.title} className={`spec spot ${s.span || ""}`}>
            <span className="spec-n">{s.n}</span>
            <div className="spec-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="chips">
              {s.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <span className="spec-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

