import "./Collections.css";

export default function Collections() {
  return (
    <div className="collections">
      
      <h1 className="collect-title">Our Premium Collections</h1>
      <p className="collect-sub">
        A showcase of power, elegance and engineering perfection.
      </p>


{/* ================= BMW ================= */}
      <div className="brand-block">
        <h2 className="brand-name">BMW Collection</h2>
        <p className="brand-desc">
          German precision, aggressive design and unmatched driving thrill.
        </p>

        <div className="image-grid">
          <img src="/images/bmw1.jpg" alt="" />
          <img src="/images/bmw2.png" alt="" />
          <img src="/images/bmw3.jpg" alt="" />
        </div>
      </div>


{/* ================= MERCEDES ================= */}
      <div className="brand-block">
        <h2 className="brand-name">Mercedes-Benz Collection</h2>
        <p className="brand-desc">
          Luxury, elegance and road dominance — crafted to perfection.
        </p>

        <div className="image-grid">
          <img src="/images/merc1.jpg" alt="" />
          <img src="/images/merc3.avif" alt="" />
          <img src="/images/merc2.webp" alt="" />
        </div>
      </div>


{/* ================= PORSCHE ================= */}
      <div className="brand-block">
        <h2 className="brand-name">Porsche Collection</h2>
        <p className="brand-desc">
          Iconic heritage, razor sharp handling and timeless engineering.
        </p>

        <div className="image-grid">
          <img src="/images/porsche1.jpg" alt="" />
          <img src="/images/porsche2.png" alt="" />
          <img src="/images/porsche3.png" alt="" />
        </div>
      </div>


{/* ================= AUDI ================= */}
      <div className="brand-block">
        <h2 className="brand-name">Audi Collection</h2>
        <p className="brand-desc">
          Innovation meets power — future ready performance icons.
        </p>

        <div className="image-grid">
          <img src="/images/audi1.webp" alt="" />
          <img src="/images/audi2.jpg" alt="" />
          <img src="/images/audi3.avif" alt="" />
        </div>
      </div>


{/* ================= LAMBORGHINI ================= */}
      <div className="brand-block">
        <h2 className="brand-name">Lamborghini Collection</h2>
        <p className="brand-desc">
          Wild design, brutal performance and pure emotional adrenaline.
        </p>

        <div className="image-grid">
          <img src="/images/lambo1.avif" alt="" />
          <img src="/images/lambo2.jpg" alt="" />
          <img src="/images/lambo3.jpg" alt="" />
        </div>
      </div>

    </div>
  );
}
