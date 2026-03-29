import type { CSSProperties } from "react";

const STAR_GLYPHS = ["✦", "✧", "⋆"];
const STAR_TONES = ["#f8d9e5", "#d9b65a", "#fff6d1"];

const stars = Array.from({ length: 34 }, (_, index) => {
  const left = (index * 5.3 + 3) % 100;
  const delay = (index * 0.66) % 20;
  const duration = 9.8 + (index % 9) * 1.25;
  const drift = ((index % 7) - 3) * 20;
  const size = 10 + (index % 4) * 2.4;
  const opacity = 0.42 + (index % 5) * 0.1;
  const twinkle = 1.8 + (index % 4) * 0.5;
  const glyph = STAR_GLYPHS[index % STAR_GLYPHS.length];
  const tone = STAR_TONES[index % STAR_TONES.length];

  return {
    id: index,
    left,
    delay,
    duration,
    drift,
    size,
    opacity,
    twinkle,
    glyph,
    tone,
  };
});

export function SakuraRain() {
  return (
    <div className="star-layer" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star-drop"
          style={
            {
              "--left": `${star.left}%`,
              "--delay": `${star.delay}s`,
              "--duration": `${star.duration}s`,
              "--drift": `${star.drift}px`,
              "--size": `${star.size}px`,
              "--opacity": `${star.opacity}`,
              "--twinkle": `${star.twinkle}s`,
              "--tone": star.tone,
            } as CSSProperties
          }
        >
          {star.glyph}
        </span>
      ))}
    </div>
  );
}
