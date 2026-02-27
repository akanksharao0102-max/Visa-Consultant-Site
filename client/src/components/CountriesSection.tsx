import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const countries = [
  { name: "USA", flag: "US", color: "from-red-500 to-blue-600", description: "Top-ranked universities with world-class research facilities and diverse campus life." },
  { name: "UK", flag: "GB", color: "from-blue-600 to-red-500", description: "Prestigious institutions with centuries of academic excellence and global recognition." },
  { name: "Canada", flag: "CA", color: "from-red-500 to-red-700", description: "Welcoming immigration policies, affordable education, and excellent post-study work options." },
  { name: "Australia", flag: "AU", color: "from-blue-500 to-yellow-500", description: "High-quality education system with strong focus on research and innovation." },
  { name: "New Zealand", flag: "NZ", color: "from-blue-800 to-cyan-500", description: "Safe, friendly environment with globally recognized qualifications." },
  { name: "Dubai", flag: "AE", color: "from-green-500 to-red-500", description: "Emerging educational hub with international campuses and career opportunities." },
  { name: "France", flag: "FR", color: "from-blue-600 to-red-500", description: "Rich cultural heritage with top business schools and affordable public universities." },
  { name: "Germany", flag: "DE", color: "from-yellow-500 to-red-600", description: "Tuition-free public universities, strong engineering programs, and thriving economy." },
  { name: "Greece", flag: "GR", color: "from-blue-500 to-blue-700", description: "Affordable living costs with quality European education standards." },
  { name: "Hungary", flag: "HU", color: "from-red-500 to-green-600", description: "Excellent medical and engineering programs with affordable tuition." },
];

export default function CountriesSection() {
  const [activeTab, setActiveTab] = useState<"education" | "immigration">("education");

  const immigrationPrograms = [
    { name: "Canada Express Entry", description: "Fast-track permanent residency pathway for skilled workers." },
    { name: "Ontario Immigrant Nominee Program", description: "Provincial nomination for Ontario-based opportunities." },
    { name: "Saskatchewan Immigrant Nominee Program", description: "Immigration pathway for Saskatchewan province." },
    { name: "Quebec Immigration", description: "Unique immigration program for French-speaking province." },
    { name: "Manitoba Provincial Nominee", description: "Dedicated pathway for Manitoba skilled workers." },
    { name: "Alberta Advantage Immigration", description: "Immigration program for Alberta province." },
  ];

  return (
    <section id="countries" className="py-20 lg:py-28 bg-gradient-to-b from-[#f0f5fa] to-white" data-testid="section-countries">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-[#046bd2] uppercase tracking-wider mb-3">Destinations</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#032b66] mb-4" data-testid="text-countries-title">
            Countries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore opportunities across the globe with our expert guidance
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1" data-testid="tabs-countries">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "education" ? "bg-[#046bd2] text-white shadow-md" : "text-gray-600"
              }`}
              data-testid="tab-education"
            >
              Study Abroad
            </button>
            <button
              onClick={() => setActiveTab("immigration")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "immigration" ? "bg-[#046bd2] text-white shadow-md" : "text-gray-600"
              }`}
              data-testid="tab-immigration"
            >
              Immigration
            </button>
          </div>
        </div>

        {activeTab === "education" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center transition-all duration-300 cursor-pointer hover-elevate"
                data-testid={`card-country-${country.name.toLowerCase()}`}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${country.color} flex items-center justify-center shadow-md`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#032b66] text-sm mb-1">Study in {country.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{country.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {immigrationPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover-elevate"
                data-testid={`card-immigration-${index}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#046bd2]/10 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-[#046bd2]" />
                </div>
                <h3 className="font-semibold text-[#032b66] mb-2">{program.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
