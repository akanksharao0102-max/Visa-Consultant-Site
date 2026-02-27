import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Countries", href: "#countries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const educationLinks = [
  { label: "Study in USA", href: "#countries" },
  { label: "Study in UK", href: "#countries" },
  { label: "Study in Canada", href: "#countries" },
  { label: "Study in Australia", href: "#countries" },
  { label: "Study in New Zealand", href: "#countries" },
  { label: "Study in Germany", href: "#countries" },
];

const coachingLinks = [
  { label: "IELTS Coaching", href: "#services" },
  { label: "TOEFL Training", href: "#services" },
  { label: "PTE Preparation", href: "#services" },
  { label: "IELTS in Surat", href: "#services" },
  { label: "IELTS in Ahmedabad", href: "#services" },
  { label: "PTE in Surat", href: "#services" },
];

const immigrationLinks = [
  { label: "Canada Express Entry", href: "#countries" },
  { label: "Ontario PNP", href: "#countries" },
  { label: "Quebec Immigration", href: "#countries" },
  { label: "Manitoba PNP", href: "#countries" },
  { label: "Alberta PNP", href: "#countries" },
  { label: "British Columbia PNP", href: "#countries" },
];

export default function Footer() {
  return (
    <footer className="bg-[#032b66] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-[#046bd2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">SWEC</span>
                <span className="block text-[10px] text-blue-300 -mt-1 tracking-wide">VISA CONSULTANT</span>
              </div>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-5">
              Your trusted partner for overseas education, immigration, and visa services across India with offices in Ahmedabad and Surat.
            </p>
            <div className="flex gap-3">
              {[
                { icon: SiFacebook, label: "Facebook" },
                { icon: SiX, label: "X" },
                { icon: SiInstagram, label: "Instagram" },
                { icon: SiLinkedin, label: "LinkedIn" },
                { icon: SiYoutube, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center transition-colors"
                  data-testid={`link-footer-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-blue-200/70 transition-colors flex items-center gap-2" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                    <ArrowRight className="w-3 h-3 opacity-50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Overseas Education</h3>
            <ul className="space-y-2.5">
              {educationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-blue-200/70 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 opacity-50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Coaching</h3>
            <ul className="space-y-2.5">
              {coachingLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-blue-200/70 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 opacity-50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Immigration</h3>
            <ul className="space-y-2.5">
              {immigrationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-blue-200/70 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 opacity-50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="bg-white/5 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-1">Subscribe to our Newsletter</h3>
                <p className="text-blue-200/60 text-sm">Stay updated with the latest visa and immigration news</p>
              </div>
              <div className="flex gap-3 w-full lg:w-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/40 max-w-xs"
                  data-testid="input-newsletter"
                />
                <Button className="bg-[#046bd2] no-default-hover-elevate no-default-active-elevate" data-testid="button-subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200/50" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} SWEC Visa Consultant. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-blue-200/50">
            <a href="#" className="transition-colors" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="transition-colors" data-testid="link-terms">Terms of Service</a>
            <a href="#" className="transition-colors" data-testid="link-sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
