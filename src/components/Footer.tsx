import { Link } from "react-router-dom";
import logo from "@/assets/digitalis_logo.jpeg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground" role="contentinfo">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="" className="h-8 w-8 object-contain" aria-hidden="true" />
            <span className="text-lg font-bold">Afrika Digitalis</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Reimagining education access across Africa through inclusive digital learning.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/60">Platform</h3>
          <nav className="flex flex-col gap-2" aria-label="Platform links">
            <Link to="/solutions" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">K-12 Learning</Link>
            <Link to="/solutions" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Inclusive Learning</Link>
            <Link to="/solutions" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">School Integration</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/60">Company</h3>
          <nav className="flex flex-col gap-2" aria-label="Company links">
            <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/impact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Impact</Link>
            <Link to="/partners" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Partners</Link>
            <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/60">Connect</h3>
          <p className="text-sm text-primary-foreground/80">alvinmuchirim@gmail.com</p>
          <p className="text-sm text-primary-foreground/70 mt-2">Building the future of African education, together.</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-sm text-primary-foreground/50">© {new Date().getFullYear()} Afrika Digitalis. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
