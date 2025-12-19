import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer-brand">AshRise Automotives</h2>

            <p className="footer-rights">
                © {new Date().getFullYear()} AshRise Automotives. All Rights Reserved.
            </p>

            <p className="footer-tagline">
                Where Power Meets Perfection
            </p>

            <div className="brand-divider"></div>
        </footer>
    );
}
