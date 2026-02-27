import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, ChevronDown, GraduationCap, BookOpen, Globe, FileText } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "About Us", href: "#about",
    children: [
      { label: "Our Story", href: "#about" },
      { label: "Our Team", href: "#about" },
      { label: "Why Choose Us", href: "#why-choose-us" },
    ]
  },
  {
    label: "Services", href: "#services",
    children: [
      { label: "Overseas Education", href: "#services", icon: GraduationCap },
      { label: "Coaching", href: "#services", icon: BookOpen },
      { label: "Immigration Services", href: "#services", icon: Globe },
      { label: "Visa Services", href: "#services", icon: FileText },
    ]
  },
  {
    label: "Countries", href: "#countries",
    children: [
      { label: "Study in USA", href: "#countries" },
      { label: "Study in UK", href: "#countries" },
      { label: "Study in Canada", href: "#countries" },
      { label: "Study in Australia", href: "#countries" },
      { label: "Study in New Zealand", href: "#countries" },
      { label: "Study in Germany", href: "#countries" },
    ]
  },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <div className="bg-[#032b66] text-white text-sm hidden lg:block" data-testid="top-bar">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+918401261234" className="flex items-center gap-2 opacity-90 transition-opacity" data-testid="link-phone-ahm">
              <Phone className="w-3.5 h-3.5" />
              <span>Ahmedabad: +91 84012 61234</span>
            </a>
            <a href="tel:+918000968420" className="flex items-center gap-2 opacity-90 transition-opacity" data-testid="link-phone-surat">
              <Phone className="w-3.5 h-3.5" />
              <span>Surat: +91 8000 968420</span>
            </a>
            <a href="mailto:info@swecvisaconsultant.com" className="flex items-center gap-2 opacity-90 transition-opacity" data-testid="link-email">
              <Mail className="w-3.5 h-3.5" />
              <span>info@swecvisaconsultant.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="opacity-80 transition-opacity" data-testid="link-facebook"><SiFacebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="opacity-80 transition-opacity" data-testid="link-instagram"><SiInstagram className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 transition-opacity" data-testid="link-linkedin"><SiLinkedin className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="opacity-80 transition-opacity" data-testid="link-youtube"><SiYoutube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100" data-testid="header">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#home" className="flex items-center gap-2" data-testid="link-logo">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#046bd2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">S</span>
              </div>
              <div>
                <span className="font-bold text-lg lg:text-xl text-[#032b66] tracking-tight">SWEC</span>
                <span className="block text-[10px] lg:text-xs text-muted-foreground -mt-1 tracking-wide">VISA CONSULTANT</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-md transition-colors"
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                  </a>
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 transition-colors"
                            data-testid={`link-dropdown-${child.label.toLowerCase().replace(/\s/g, '-')}`}
                          >
                            {"icon" in child && child.icon && <child.icon className="w-4 h-4 text-[#046bd2]" />}
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button asChild>
                <a href="#contact" data-testid="button-free-consultation">Free Consultation</a>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg" data-testid="nav-mobile">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-md"
                    onClick={() => setMobileOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-500"
                          onClick={() => setMobileOpen(false)}
                          data-testid={`link-mobile-sub-${child.label.toLowerCase().replace(/\s/g, '-')}`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Button className="w-full" asChild>
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Free Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
