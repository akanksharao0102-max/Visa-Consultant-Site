import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden" data-testid="section-cta">
      <div className="absolute inset-0 bg-gradient-to-r from-[#032b66] via-[#045cb4] to-[#046bd2]" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 lg:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight" data-testid="text-cta-title">
            Think Broad to Reach Abroad
          </h2>
          <p className="text-blue-100/80 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
            Connect with SWEC's expert assistance and take the first step towards your international dreams
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#046bd2] font-semibold no-default-hover-elevate no-default-active-elevate" asChild>
              <a href="#contact" data-testid="button-cta-consultation">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm no-default-hover-elevate no-default-active-elevate" asChild>
              <a href="tel:+918401261234" data-testid="button-cta-call">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
