import "./Services.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Services() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="services">
      <h1 className="service-title">Our Services</h1>

      {/* 1 */}
      <div className="service-box">
        <img src="/images/service1.jpg" alt="Premium Car Showcasing" />
        <div className="service-content">
          <h2>Premium Car Showcasing</h2>
          <p>Stunning high-definition visuals and cinematic presentation.</p>
          <span className="service-price">₹9,999</span>
          <br />
          <button
            className="service-btn"
            onClick={() =>
              handleAddToCart({
                name: "Premium Car Showcasing",
                price: 9999,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 2 */}
      <div className="service-box">
        <img src="/images/service2.jpg" alt="Performance & Engineering" />
        <div className="service-content">
          <h2>Performance & Engineering</h2>
          <p>Highlighting raw power and precision engineering.</p>
          <span className="service-price">₹49,999</span>
          <br />
          <button
            className="service-btn"
            onClick={() =>
              handleAddToCart({
                name: "Performance & Engineering",
                price: 49999,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 3 */}
      <div className="service-box">
        <img src="/images/service3.webp" alt="Luxury Craftsmanship" />
        <div className="service-content">
          <h2>Luxury Craftsmanship</h2>
          <p>Timeless design with elite automotive craftsmanship.</p>
          <span className="service-price">₹19,999</span>
          <br />
          <button
            className="service-btn"
            onClick={() =>
              handleAddToCart({
                name: "Luxury Craftsmanship",
                price: 19999,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 4 */}
      <div className="service-box">
        <img src="/images/service4.webp" alt="Ceramic Coating & Protection" />
        <div className="service-content">
          <h2>Ceramic Coating & Protection</h2>
          <p>Advanced coating for unmatched gloss and durability.</p>
          <span className="service-price">₹29,999</span>
          <br />
          <button
            className="service-btn"
            onClick={() =>
              handleAddToCart({
                name: "Ceramic Coating & Protection",
                price: 29999,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 5 */}
      <div className="service-box">
        <img src="/images/service5.jpg" alt="Forged Alloy Wheels" />
        <div className="service-content">
          <h2>Forged Alloy Wheels</h2>
          <p>High-strength forged wheels for performance and style.</p>
          <span className="service-price">₹59,999</span>
          <br />
          <button
            className="service-btn"
            onClick={() =>
              handleAddToCart({
                name: "Forged Alloy Wheels",
                price: 59999,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 6 */}
      <div className="service-box">
        <img src="/images/service6.webp" alt="Custom Lighting & Styling" />
        <div className="service-content">
          <h2>Custom Lighting & Styling</h2>
          <p>Signature headlights and bold styling upgrades.</p>
          <span className="service-price">₹14,599</span>
          <br />
          <button
            className="service-btn"
            onClick={() =>
              handleAddToCart({
                name: "Custom Lighting & Styling",
                price: 14599,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* 7 */}
      <div className="service-box">
        <img src="/images/service7.jpg" alt="Exclusive Supercar Maintenance" />
        <div className="service-content">
          <h2>Exclusive Supercar Maintenance</h2>
          <p>Elite servicing for premium and exotic supercars.</p>
          <span className="service-price">₹39,999</span>
          <br />
          <button
            className="service-btn"
            onClick={() =>
              handleAddToCart({
                name: "Exclusive Supercar Maintenance",
                price: 39999,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
