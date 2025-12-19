import "./Section1.css";

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1-wrapper">

        {/* LEFT IMAGE */}
        <div className="section1-image">
          <img src="/images/section-car.png" alt="Luxury Car" />
        </div>

        {/* RIGHT TEXT */}
        <div className="section1-content">
          <h2 className="subtitle">Our Vision</h2>

          <h1 className="title">
            Where Passion Meets Precision
          </h1>

          <p className="desc">
            Phoenix Automotives is built for those who believe cars are more than machines.
            We bring together luxury craftsmanship, cutting–edge performance, and
            breathtaking design to create an experience that lives beyond the road.
          </p>

          <p className="desc">
            From iconic German engineering to exotic supercars,
            our mission is to deliver excellence, thrill and identity in every drive.
          </p>

          <button className="explore-btn">Explore Collections</button>
        </div>

      </div>
    </section>
  );
}
