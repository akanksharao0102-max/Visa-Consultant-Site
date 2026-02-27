import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Globe, TrendingUp } from "lucide-react";

const highlights = [
  "Expert visa consultants with years of experience",
  "Personalized guidance for each student",
  "High visa approval success rate",
  "Offices in Ahmedabad and Surat",
  "Partnerships with top global universities",
  "End-to-end support from application to departure",
];

const stats = [
  { icon: Award, value: "500+", label: "Visas Approved", color: "from-blue-500 to-blue-700" },
  { icon: Globe, value: "10+", label: "Countries Covered", color: "from-cyan-500 to-blue-600" },
  { icon: Users, value: "1000+", label: "Happy Students", color: "from-indigo-500 to-purple-600" },
  { icon: TrendingUp, value: "98%", label: "Success Rate", color: "from-emerald-500 to-teal-600" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold text-[#046bd2] uppercase tracking-wider mb-3">About SWEC</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#032b66] mb-5 leading-tight" data-testid="text-about-title">
              Your Gateway to{" "}
              <span className="text-[#046bd2]">Global Education</span>{" "}
              & Immigration
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              SWEC Visa Consultant is a premier overseas education and immigration consultancy based in Ahmedabad and Surat, Gujarat. We specialize in helping students and professionals realize their dreams of studying, working, and settling abroad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              With our team of experienced professionals, we provide comprehensive support for student visas, immigration applications, and language test preparation. Our commitment to excellence has helped hundreds of aspirants achieve their global dreams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#046bd2] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#f0f5fa] to-white rounded-2xl p-6 text-center border border-gray-100"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-[#032b66] mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
