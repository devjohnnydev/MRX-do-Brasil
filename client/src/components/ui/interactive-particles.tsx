import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

export default function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, pressed: false });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 6 + 2,
      opacity: Math.random() * 0.8 + 0.2,
      life: 1,
    });

    const updateParticles = () => {
      particlesRef.current = particlesRef.current
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vx: particle.vx * 0.995,
          vy: particle.vy * 0.995,
          life: particle.life - 0.005,
          opacity: particle.opacity * 0.998,
        }))
        .filter(particle => particle.life > 0 && particle.opacity > 0.01);
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, '#2ECC40');
        gradient.addColorStop(0.5, 'rgba(46, 204, 64, 0.6)');
        gradient.addColorStop(1, 'rgba(46, 204, 64, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      
      if (Math.random() < 0.3) {
        particlesRef.current.push(createParticle(mouseRef.current.x, mouseRef.current.y));
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create burst of particles on click
      for (let i = 0; i < 15; i++) {
        particlesRef.current.push(createParticle(x, y));
      }
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Initialize
    resizeCanvas();
    
    // Add some initial particles
    for (let i = 0; i < 20; i++) {
      particlesRef.current.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);
    
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 5 }}
      data-testid="interactive-particles-canvas"
    />
  );
}