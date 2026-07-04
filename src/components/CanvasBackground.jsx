import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse tracking for canvas
    let mouse = { x: null, y: null, radius: 150 };
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.4)'; // Accent color
        ctx.fill();
      }
      
      update() {
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
        
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let dx = (Math.random() - 0.5) * 0.8;
        let dy = (Math.random() - 0.5) * 0.8;
        particles.push(new Particle(x, y, dx, dy, size));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) 
                       + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          
          if (distance < (canvas.width / 10) * (canvas.height / 10)) {
            let opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
        
        // Connect to mouse
        if (mouse.x && mouse.y) {
          let dx = particles[a].x - mouse.x;
          let dy = particles[a].y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${1 - (distance/mouse.radius)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            
            // Subtle physical pull toward mouse
            particles[a].x -= dx * 0.01;
            particles[a].y -= dy * 0.01;
          }
        }
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[-8]" 
      style={{ opacity: 0.6 }}
    />
  );
};

export default CanvasBackground;
