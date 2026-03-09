import { Button } from "@/components/ui/button";
import { ArrowRight, Play, GraduationCap, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-[#032b66] via-[#045cb4] to-[#046bd2]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-16 lg:pt-24 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6" data-testid="badge-hero">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Trusted by 500+ Students Worldwide</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
              Your Dream{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Our Mission
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-blue-100/80 mb-8 max-w-xl leading-relaxed" data-testid="text-hero-description">
              Your trusted partner for overseas education, immigration, and visa services. 
              SWEC Visa Consultant guides you every step of the way to your global dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-[#046bd2] font-semibold no-default-hover-elevate no-default-active-elevate" asChild>
                <a href="#contact" data-testid="button-hero-consultation">
                  Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm no-default-hover-elevate no-default-active-elevate" asChild>
                <a href="#services" data-testid="button-hero-services">
                  Explore Services
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6" data-testid="stats-hero">
              {[
                { value: "500+", label: "Visas Approved" },
                { value: "10+", label: "Countries" },
                { value: "98%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-white" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>{stat.value}</div>
                  <div className="text-sm text-blue-200/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: GraduationCap, title: "Overseas Education", desc: "Study in top universities worldwide", color: "from-blue-400 to-blue-600" },
                    { icon: Globe, title: "Immigration", desc: "PR & work permits for Canada, Australia", color: "from-cyan-400 to-blue-500" },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-blue-200/60 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">IELTS, PTE & TOEFL Coaching</h3>
                      <p className="text-blue-200/60 text-xs">Expert coaching to ace your language tests</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-yellow-400 text-[#032b66] font-bold rounded-full w-20 h-20 flex items-center justify-center text-center text-xs leading-tight shadow-lg">
                <div>
                  <div className="text-lg font-bold">1+</div>
                  <div className="text-[10px]">Years Exp</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L1440 100L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 100Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
