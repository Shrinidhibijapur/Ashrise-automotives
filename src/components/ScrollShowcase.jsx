import { useRef } from "react";
import "./ScrollShowcase.css";

export default function ScrollShowcase() {

  const slider = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    slider.current.classList.add("active");
    startX = e.pageX - slider.current.offsetLeft;
    scrollLeft = slider.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    slider.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    slider.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;

    
    const walk = (x - startX) * 0.4;
    slider.current.scrollLeft = scrollLeft - walk;
  };

  const handleWheel = (e) => {
    if (!slider.current) return;
    e.preventDefault();
    slider.current.scrollLeft += e.deltaY * 0.35;
  };

  return (
    <div className="scroll-section">

      <h1 className="scroll-title">Unleash The Legends</h1>

      <div
        className="scroll-wrapper"
        ref={slider}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >

        {}
        <div className="scroll-card">
          <img src="/images/bmw1.jpg" />
          <h2>BMW Power</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/merc2.webp" />
          <h2>Mercedes Elegance</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/porsche2.png" />
          <h2>Porsche Precision</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/lambo1.avif" />
          <h2>Lamborghini Fury</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/a.webp" />
          <h2>Audi Dominance</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/f.jpeg" />
          <h2>Ferrari Thunder</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/m.jpg" />
          <h2>McLaren Velocity</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/d.avif" />
          <h2>Dodge Hellcat</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/gtr.avif" />
          <h2>Nissan GTR Beast</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/ast.jpg" />
          <h2>Aston Martin Royal</h2>
        </div>

        {}
        <div className="scroll-card">
          <img src="/images/bugatti.webp" />
          <h2>Bugatti Supremacy</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/ko.webp" />
          <h2>Koenigsegg HyperRush</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/ro.avif" />
          <h2>Rolls Royce Majesty</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/be.jpg" />
          <h2>Bentley Luxury Drive</h2>
        </div>

        <div className="scroll-card">
          <img src="/images/pe.webp" />
          <h2>Pagani Tempest</h2>
        </div>

      </div>
    </div>
  );
}
