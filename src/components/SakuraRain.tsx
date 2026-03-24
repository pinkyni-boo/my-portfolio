import type { CSSProperties } from "react";

const petals = Array.from({ length: 28 }, (_, index) => {
  const left = (index * 3.73 + 5) % 100;
  const delay = (index * 0.58) % 14;
  const duration = 10.8 + (index % 8) * 1.35;
  const drift = ((index % 7) - 3) * 18;
  const size = 8 + (index % 5) * 2.4;
  const opacity = 0.56 + (index % 5) * 0.07;
  const blur = index % 6 === 0 ? 0.7 : 0;

  return {
    id: index,
    left,
    delay,
    duration,
    drift,
    size,
    opacity,
    blur,
  };
});

export function SakuraRain() {
  return (
    <div className="sakura-layer" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="sakura-petal"
          style={
            {
              "--left": `${petal.left}%`,
              "--delay": `${petal.delay}s`,
              "--duration": `${petal.duration}s`,
              "--drift": `${petal.drift}px`,
              "--size": `${petal.size}px`,
              "--opacity": `${petal.opacity}`,
              "--blur": `${petal.blur}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
