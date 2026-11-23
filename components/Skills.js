const groups = [
  ["Mobile", ["Swift", "SwiftUI", "UIKit", "Kotlin", "Jetpack Compose", "Java (Android)", "React Native", "Flutter", "Bluetooth (BLE)", "Sensores"]],
  ["SDKs", ["Arquitectura de SDK", "XCFramework", "CocoaPods", "Versionado semántico", "Ramas white-label"]],
  ["Pagos", ["3D Secure", "Cotizaciones FX", "Manejo de tarjetas", "i18n"]],
  ["Frontend", ["JavaScript", "TypeScript", "Vue.js", "React", "Angular", "Next.js", "Nuxt.js"]],
  ["Backend", ["PHP", "Laravel", "Lumen", "Symfony", "CodeIgniter", "Slim", "NestJS", ".NET Core", "Django"]],
  ["Bases de datos", ["MySQL", "MariaDB", "PostgreSQL", "SQL Server", "Oracle", "SQLite", "ObjectBox", "Prisma", "Sequelize", "Eloquent"]],
  ["Infraestructura", ["Linux", "Nginx", "Apache", "iptables", "DigitalOcean", "SSL"]],
  ["Colaboración", ["Git", "GitHub", "GitLab"]],
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <p className="eyebrow">Stack técnico</p>
      <h2 className="section-title">Tecnologías con las que trabajo</h2>
      <div className="skill-groups">
        {groups.map(([title, items]) => (
          <div key={title} className="skill-group">
            <h3>{title}</h3>
            <div className="chips">
              {items.map((i) => <span key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
