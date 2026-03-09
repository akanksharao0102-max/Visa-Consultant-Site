import { motion } from "framer-motion";
import { Target, Lightbulb, Zap, Briefcase } from "lucide-react";

const items = [
  {
    letter: "S",
    title: "Success",
    icon: Target,
    description: "Success is the hallmark of SWEC Visa, a leading overseas education consultant in Ahmedabad and Surat. With a proven track record in securing student visas for UK, USA, Canada, and Australia, SWEC ensures your success is a shared achievement.",
    color: "from-blue-500 to-blue-700",
  },
  {
    letter: "W",
    title: "Wisdom",
    icon: Lightbulb,
    description: "AKANSKHA Visa offers expert guidance for your study abroad journey. Our experienced visa consultants provide the wisdom to make well-informed decisions for your student visa applications, ensuring the right path to success.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    letter: "E",
    title: "Effective & Efficient",
    icon: Zap,
    description: "At SWEC Visa, we streamline processes for student visas and dependent visas to deliver efficient and satisfying results. Whether you're aiming for UG, PG, and Bachelor's abroad or seeking international scholarships, we ensure your dreams are achieved.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    letter: "C",
    title: "Career Oriented",
    icon: Briefcase,
    description: "SWEC's commitment doesn't end with visas or admissions — it extends to your entire career journey. With expertise in immigration services and support in preparing for IELTS, PTE, and TOEFL, you are not just an applicant but a success story.",
    color: "from-purple-500 to-pink-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f0f5fa]" data-testid="section-why-choose-us">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#046bd2] uppercase tracking-wider mb-3" data-testid="text-section-label">Why Choose Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#032b66] mb-4" data-testid="text-swec-means">
            What <span className="text-[#046bd2]">SWEC</span> Means
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our name reflects our core values that drive us to deliver exceptional service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 transition-all duration-300"
              data-testid={`card-swec-${item.letter.toLowerCase()}`}
            >
              <div className="flex gap-5">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{item.letter}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-[#046bd2]" />
                    <h3 className="text-xl font-bold text-[#032b66]">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
