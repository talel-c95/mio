import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  emoji: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
}

export function FloatingElements() {
  const [elements] = useState<FloatingElement[]>([
    { id: 1, emoji: "🍓", x: 10, y: 20, rotation: 0, scale: 1, duration: 4 },
    { id: 2, emoji: "🍫", x: 85, y: 15, rotation: 45, scale: 0.8, duration: 5 },
    { id: 3, emoji: "🧁", x: 15, y: 70, rotation: -20, scale: 0.9, duration: 3.5 },
    { id: 4, emoji: "🍰", x: 80, y: 75, rotation: 15, scale: 1.1, duration: 4.5 },
    { id: 5, emoji: "🥐", x: 50, y: 10, rotation: -30, scale: 0.7, duration: 3 },
    { id: 6, emoji: "🍪", x: 30, y: 45, rotation: 60, scale: 0.85, duration: 3.8 },
  ]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: "3rem",
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [element.rotation, element.rotation + 10, element.rotation],
            scale: [element.scale, element.scale * 1.1, element.scale],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
}
