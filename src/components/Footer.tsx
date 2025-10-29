import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Magaga<span className="text-accent">Media</span>
            </h3>
            <p className="text-sm opacity-90">
              Fresh Ideas. Purposeful Impact. Empowering youth and driving meaningful change since 2017.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/team" className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Our Team
              </Link>
              <Link to="/contact" className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Magaga Media and Communications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
