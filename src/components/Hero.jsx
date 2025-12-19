import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x: `${x}px`, y: `${y}px` });
  };

  const handleTouchMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const t = e.touches[0];
    if (!t) return;
    const x = t.clientX - rect.left;
    const y = t.clientY - rect.top;
    setPos({ x: `${x}px`, y: `${y}px` });
  };

  const handleMouseLeave = () => setPos({ x: "-9999px", y: "-9999px" });

  useEffect(() => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) setPos({ x: `${rect.width / 2}px`, y: `${rect.height / 2}px` });
  }, []);

  return (
    <div
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
    >
      <div className="hero-bg" />

      <div className="hero-content">
        <h1>Driven by Power</h1>
        <p>
          Experience the thrill of engineering perfection.
          From aggressive design to breathtaking performance,
          these machines aren’t just vehicles — they’re emotion on wheels.
          Precision, power and passion combined into one incredible ride.
          Step closer… the road is waiting.        </p>
      </div>


      <div
        className="flash-overlay"
        style={{ "--x": pos.x, "--y": pos.y }}
      />
    </div>
  );
};

export default Hero;
