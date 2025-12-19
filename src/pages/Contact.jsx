import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let’s craft something extraordinary together.</p>
      </div>

      <div className="contact-wrapper">

        {/* LEFT */}
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>
            Have a query, project idea, or need premium automotive services?
            Reach out to us — we’re always ready to connect.
          </p>

          <div className="contact-info">
            <p>📍 AshRise Automotives, India</p>
            <p>📞 +91 84858 62732</p>
            <p>✉️ ash123@gmail.com</p>
          </div>
        </div>

        {/* RIGHT */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="6"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}
