import Link from "next/link";
import { Compass, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Compass className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-foreground">Immigration</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Your trusted partner for Canadian immigration services. We specialize in Express Entry, Provincial Nominee Programs, and Family Sponsorship.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#express-entry" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Express Entry
                </Link>
              </li>
              <li>
                <Link href="/services#pnp" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Provincial Nominee Programs
                </Link>
              </li>
              <li>
                <Link href="/services#family-sponsorship" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Family Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/services#consultation" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Immigration Consultation
                </Link>
              </li>
              <li>
                <Link href="/services#document-review" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Document Review
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                <span className="text-muted-foreground">123 Immigration Avenue, Toronto, ON M5V 2K7, Canada</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-muted-foreground">+1 (416) 555-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-2" />
                <a href="mailto:info@immigration.ca" className="text-muted-foreground hover:text-red-600 transition-colors">
                  info@immigration.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {currentYear} Immigration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;