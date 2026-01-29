import React, { useEffect, useRef } from 'react';

const SparksEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      speedY: number;
      speedX: number;
      size: number;
      opacity: number;
      fadeSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height - canvas!.height;
        this.speedY = Math.random() * 3 + 2; // Vertical speed
        this.speedX = Math.random() * 2 + 1; // Horizontal speed (diagonal)
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random();
        this.fadeSpeed = Math.random() * 0.02 + 0.005;
        const colors = ['#d8b4fe', '#a855f7', '#7e22ce']; 
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX; // Move right

        // Reset if out of bounds (bottom or right)
        if (this.y > canvas!.height || this.x > canvas!.width) {
          this.y = -10;
          // Randomize x again to cover width effectively when respawning at top
          // Or wrap around X for continuous feel?
          // Let's wrapping X is tricky if Y isn't reset.
          // Simplest for diagonal rain: if goes off bottom OR right, reset to top (and random X)
          this.x = Math.random() * canvas!.width; 
          // To ensure they cover the left side, we might need to spawn some off-screen left?
          // Actually, if we reset X to random width, it's fine.
          
          // Optimization: If it goes off the right, it should ideally reappear on the left at same Y?
          // No, these are falling. Respawning at top is best for "rain/sparks".
          // But to prevent empty corners, maybe spawn some at x < 0?
          if (Math.random() > 0.5) {
             this.x = Math.random() * canvas!.width;
             this.y = -10;
          } else {
             this.x = -10;
             this.y = Math.random() * canvas!.height;
          }
        }

        // Twinkle effect
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0 || this.opacity >= 1) {
            this.fadeSpeed = -this.fadeSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.abs(this.opacity);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = 100;
      for (let i = 0; i < numberOfParticles; i++) {
        const p = new Particle();
        p.y = Math.random() * canvas.height; 
        particles.push(p);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50, // On top of background, but below some UI if needed. 
        // User asked for "falling sparks" maybe in front? "como se estivesse numa guerra"
        // Let's try z-index 0 or 1.
        // Actually, if it's "war embers", they usually overlay everything slightly out of focus.
        // Let's use pointerEvents='none' so clicks go through.
      }}
    />
  );
};

export default SparksEffect;
