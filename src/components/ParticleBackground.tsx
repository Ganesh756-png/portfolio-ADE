"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glow: boolean;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const maxParticles = 60;
    const connectionDistance = 120;

    const colors = [
      "rgba(0, 242, 254, 0.45)", // Neon Cyan
      "rgba(0, 120, 212, 0.45)", // Azure Blue
      "rgba(139, 92, 246, 0.35)", // Purple
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(
        maxParticles,
        Math.floor((canvas.width * canvas.height) / 20000)
      );

      for (let i = 0; i < particleCount; i++) {
        const isGlow = Math.random() > 0.85;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: isGlow ? Math.random() * 3 + 2.5 : Math.random() * 1.5 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          glow: isGlow,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background grid lines (subtle)
      ctx.strokeStyle = "rgba(0, 120, 212, 0.02)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw particles and lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off walls
        if (p1.x < 0 || p1.x > canvas.width) p1.vx = -p1.vx;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy = -p1.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;

        if (p1.glow) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = p1.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw lines between nearby particles (representing pipeline connections)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Create a gradient line to represent data flow
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, p1.color.replace("0.45", String(alpha)));
            grad.addColorStop(1, p2.color.replace("0.45", String(alpha)));
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = p1.glow && p2.glow ? 1.0 : 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
