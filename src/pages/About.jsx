import "./About.css";

export default function About() {
  return (
    <div className="about">
      
      {/* TOP TITLE */}
      <section className="about-hero">
        <h2 className="about-title">About Phoenix Automotives</h2>
        <p className="about-sub">
          Where engineering meets soul, and machines become legends.
        </p>
      </section>

      {/* MAIN ABOUT SECTION */}
      <section className="about-content">

        <div className="about-left">
          <img src="/images/car.jpg" alt="Phoenix Automotives" />
        </div>

        <div className="about-right">
          <h3 className="about-heading">Redefining Luxury & Performance</h3>

          <p className="about-text">
            Phoenix Automotives is built for those who believe cars are more than machines. 
            Every automobile we showcase represents power, craftsmanship, innovation, 
            and identity.
          </p>

          <p className="about-text">
            From elite German engineering to exotic supercars, we combine breathtaking 
            aesthetics with cutting-edge technology to create experiences that live 
            far beyond the road.
          </p>

          <div className="about-points">
            <div className="point"><span>🔥</span> Precision Engineering</div>
            <div className="point"><span>⚙️</span> Advanced Innovation</div>
            <div className="point"><span>🏆</span> Luxury Craftsmanship</div>
          </div>
        </div>

      </section>

      {/* TRUST / STATS */}
      <section className="about-stats">

        <div className="stat-box">
          <h2>10+</h2>
          <p>Premium Collections</p>
        </div>

        <div className="stat-box">
          <h2>200+</h2>
          <p>Happy Enthusiasts</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Passion & Excellence</p>
        </div>

      </section>
    </div>
  );
}
