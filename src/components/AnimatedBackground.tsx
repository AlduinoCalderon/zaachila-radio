"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; emoji: string; delay: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate particles on mount to avoid hydration mismatch
    const emojis = ["🎵", "📻", "🎶", "🎧", "🎙️", "📡"];
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // %
      y: Math.random() * 100, // %
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      delay: Math.random() * 5, // s
      size: Math.random() * 1.5 + 1, // rem
      duration: Math.random() * 10 + 15, // s
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base deep purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-eva-purple/20 rounded-full blur-[120px]"></div>
      
      {/* Accent green glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eva-green/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>

      {/* Floating Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute opacity-10 text-white animate-pulse"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}rem`,
            animation: `float ${p.duration}s ease-in-out infinite, spin ${p.duration * 1.5}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
