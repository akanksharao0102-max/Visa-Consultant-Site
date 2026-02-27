import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Globe, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "Overseas Education Service",
    description: "Get expert guidance to study at top universities across USA, UK, Canada, Australia, New Zealand, and Europe. From university selection to application support, we handle it all.",
    features: ["University Selection", "Application Assistance", "Scholarship Guidance", "Pre-departure Briefing"],
    color: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
  },
  {
    icon: BookOpen,
    title: "Coaching",
    description: "Ace your language proficiency tests with our expert coaching for IELTS, TOEFL, PTE, and more. Our experienced trainers ensure you achieve the scores you need.",
    features: ["IELTS Preparation", "TOEFL Training", "PTE Coaching", "Personalized Batches"],
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
  },
  {
    icon: Globe,
    title: "Immigration Services",
    description: "Navigate the complex immigration process with confidence. We provide end-to-end support for permanent residency, work permits, and express entry programs.",
    features: ["Canada Express Entry", "Provincial Nominee Programs", "Work Permits", "PR Applications"],
    color: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50",
  },
  {
    icon: FileText,
    title: "Visa Services",
    description: "From student visas to dependent visas, our expert consultants ensure a smooth and successful visa application process with a high approval rate.",
    features: ["Student Visa", "Dependent Visa", "Work Visa", "Tourist Visa"],
    color: "from-orange-500 to-red-500",
    bgLight: "bg-orange-50",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#046bd2] uppercase tracking-wider mb-3">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#032b66] mb-4" data-testid="text-services-title">
            Comprehensive Visa & Education Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide end-to-end solutions for your global education and immigration needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 overflow-visible"
              data-testid={`card-service-${index}`}
            >
              <div className="p-6 lg:p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-md`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#032b66] mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {service.features.map((feature) => (
                    <div key={feature} className={`${service.bgLight} rounded-lg px-3 py-2 text-xs font-medium text-gray-700`}>
                      {feature}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#046bd2] transition-colors" data-testid={`link-service-${index}`}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
