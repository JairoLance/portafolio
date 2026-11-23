const SHAPE = [
  [40, 70, 34], [95, 50, 42], [160, 62, 38], [215, 78, 28], [120, 82, 36],
];

const CLOUDS = [
  { top: "12%", w: 300, dur: 95, delay: -20, op: 0.2 },
  { top: "34%", w: 220, dur: 130, delay: -80, op: 0.16 },
  { top: "58%", w: 360, dur: 115, delay: -45, op: 0.18 },
  { top: "78%", w: 260, dur: 150, delay: -110, op: 0.15 },
  { top: "22%", w: 180, dur: 170, delay: -140, op: 0.12 },
];

export default function BgClouds() {
  return (
    <div className="bg-clouds" aria-hidden="true">
      {CLOUDS.map((c, i) => (
        <svg
          key={i}
          className="bg-cloud"
          viewBox="0 0 250 120"
          style={{
            top: c.top,
            width: c.w,
            opacity: c.op,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
          }}
        >
          <g>
            {SHAPE.map(([x, y, r], k) => <circle key={k} cx={x} cy={y} r={r} />)}
            <rect x="40" y="76" width="175" height="30" rx="15" />
          </g>
        </svg>
      ))}
    </div>
  );
}
