import "./Services.css";

export default function Services() {
  return (
    <div className="services">

      <h1 className="service-title">Our Services</h1>

      {/* 1 */}
      <div className="service-box">
        <img src="/images/service1.jpg" alt="" />
        <div>
          <h2>Premium Car Showcasing</h2>
          <p>Stunning high-definition visuals and cinematic presentation to make every machine unforgettable.</p>
           <p className="service-price">Pricing starts from ₹9,999</p>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 2 */}
      <div className="service-box">
        <img src="/images/service2.jpg" alt="" />
        <div>
          <h2>Performance & Engineering</h2>
          <p>Highlighting raw power, precision engineering, and extraordinary road presence.</p>
          <p className="service-price">Pricing starts from ₹49,999</p>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 3 */}
      <div className="service-box">
        <img src="/images/service3.webp" alt="" />
        <div>
          <h2>Luxury Craftsmanship</h2>
          <p>Showcasing timeless design, attention to detail, and elite automotive craftsmanship.</p>
          <p className="service-price">Pricing starts from ₹19,999</p>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 4 */}
      <div className="service-box">
        <img src="/images/service4.webp" alt="" />
        <div>
          <h2>Ceramic Coating & Protection</h2>
          <p>Advanced ceramic coating to protect paint with unmatched gloss and durability.</p>
          <p className="service-price">Pricing starts from ₹29,999</p>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 5 */}
      <div className="service-box">
        <img src="/images/service5.jpg" alt="" />
        <div>
          <h2>Forged Alloy Wheels</h2>
          <p>Precision-engineered forged alloy wheels designed for strength, style and performance — enhancing stability, grip and unmatched road presence.</p>
          <p className="service-price">Pricing starts from ₹59,999</p>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 6 */}
      <div className="service-box">
        <img src="/images/service6.webp" alt="" />
        <div>
          <h2>Custom Lighting & Styling</h2>
          <p>Signature headlights, neon accents and bold design enhancements that stand out.</p>
          <p className="service-price">Pricing starts from ₹14,599</p>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 7 */}
      <div className="service-box">
        <img src="/images/service7.jpg" alt="" />
        <div>
          <h2>Exclusive Supercar Maintenance</h2>
          <p>Elite servicing for BMW, Mercedes, Porsche, Audi, Lamborghini and more.</p>
          <p className="service-price">Pricing starts from ₹39,999</p>
        </div>
      </div>

    </div>
  );
}
