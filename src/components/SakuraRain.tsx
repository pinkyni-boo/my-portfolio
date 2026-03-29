import type { CSSProperties } from "react";

const METEOR_TONES = ["#ffe8f3", "#f3cd81", "#d7e5ff"];
const STAR_TONES = ["#fff9df", "#f9dce9", "#dce9ff", "#f3cb7d"];

const meteors = Array.from({ length: 8 }, (_, index) => {
  const lane = index % 4;
  const wave = Math.floor(index / 4);
  const left = 70 + ((index * 8.4 + wave * 4.8) % 46);
  const top = -18 + lane * 14 + wave * 6;
  const delay = index * 1.95 + lane * 0.55;
  const duration = 14 + lane * 1.6 + wave * 1.2;
  const travelX = -(98 + lane * 17 + wave * 12);
  const travelY = 24 + lane * 7 + wave * 5;
  const length = 88 + lane * 18 + wave * 12;
  const thickness = 1 + lane * 0.22;
  const opacity = 0.32 + lane * 0.07;
  const angle = -(16 + lane * 4 + wave * 2);
  const tone = METEOR_TONES[(index + lane) % METEOR_TONES.length];

  return {
    id: index,
    left,
    top,
    delay,
    duration,
    travelX,
    travelY,
    length,
    thickness,
    opacity,
    angle,
    tone,
  };
});

const stars = Array.from({ length: 52 }, (_, index) => {
  const lane = index % 6;
  const row = Math.floor(index / 6);
  const left = (index * 13.6 + lane * 7.5 + row * 2.8) % 100;
  const top = (index * 8.4 + lane * 5.1 + row * 3.4) % 82;
  const size =
    lane % 3 === 0 ? 1.5 + (row % 2) * 0.35 : lane % 2 === 0 ? 2.3 + (row % 2) * 0.45 : 3 + (row % 3) * 0.38;
  const opacity = 0.2 + lane * 0.06 + (row % 2) * 0.03;
  const twinkle = 2.2 + lane * 0.55 + (row % 3) * 0.35;
  const delay = -(index * 0.47 + lane * 0.23);
  const driftX = ((lane % 4) - 1.5) * 2.2;
  const driftY = (row % 3) * 0.95;
  const blur = lane % 2 === 0 ? 0 : 0.24;
  const tone = STAR_TONES[(index + lane) % STAR_TONES.length];

  return {
    id: index,
    left,
    top,
    size,
    opacity,
    twinkle,
    delay,
    driftX,
    driftY,
    blur,
    tone,
  };
});

export function SakuraRain() {
  return (
    <div className="meteor-layer" aria-hidden="true">
      <div className="galaxy-band" />
      <div className="galaxy-stars">
        {stars.map((star) => (
          <span
            key={`star-${star.id}`}
            className="galaxy-star"
            style={
              {
                "--left": `${star.left}%`,
                "--top": `${star.top}%`,
                "--size": `${star.size}px`,
                "--opacity": `${star.opacity}`,
                "--twinkle": `${star.twinkle}s`,
                "--delay": `${star.delay}s`,
                "--drift-x": `${star.driftX}px`,
                "--drift-y": `${star.driftY}px`,
                "--blur": `${star.blur}px`,
                "--tone": star.tone,
              } as CSSProperties
            }
          />
        ))}
      </div>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor-star"
          style={
            {
              "--left": `${meteor.left}%`,
              "--top": `${meteor.top}%`,
              "--delay": `${meteor.delay}s`,
              "--duration": `${meteor.duration}s`,
              "--travel-x": `${meteor.travelX}vw`,
              "--travel-y": `${meteor.travelY}vh`,
              "--length": `${meteor.length}px`,
              "--thickness": `${meteor.thickness}px`,
              "--opacity": `${meteor.opacity}`,
              "--angle": `${meteor.angle}deg`,
              "--tone": meteor.tone,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
