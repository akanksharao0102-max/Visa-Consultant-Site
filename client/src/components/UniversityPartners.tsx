import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap } from "lucide-react";

const tabs = ["Australia", "Canada", "UK", "USA", "New Zealand", "Europe"];

const universities: Record<string, string[]> = {
  Australia: [
    "University of Melbourne", "University of Sydney", "Monash University",
    "University of Queensland", "UNSW Sydney", "Deakin University",
    "La Trobe University", "Griffith University",
  ],
  Canada: [
    "University of Toronto", "University of British Columbia", "McGill University",
    "University of Alberta", "Seneca College", "Conestoga College",
    "Humber College", "Centennial College",
  ],
  UK: [
    "University of Oxford", "University of Cambridge", "Imperial College London",
    "University of Manchester", "University of Edinburgh", "King's College London",
    "University of Birmingham", "University of Leeds",
  ],
  USA: [
    "Harvard University", "MIT", "Stanford University",
    "Yale University", "University of California", "Columbia University",
    "NYU", "University of Chicago",
  ],
  "New Zealand": [
    "University of Auckland", "University of Otago", "Victoria University",
    "University of Canterbury", "Massey University", "Lincoln University",
  ],
  Europe: [
    "TU Munich", "ETH Zurich", "University of Amsterdam",
    "Sorbonne University", "University of Helsinki", "KU Leuven",
  ],
};

export default function UniversityPartners() {
  const [activeTab, setActiveTab] = useState("Australia");

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-universities">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-[#046bd2] uppercase tracking-wider mb-3">Our Partners</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#032b66] mb-4" data-testid="text-universities-title">
            University Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We work with top-ranked universities across the globe
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10" data-testid="tabs-universities">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab ? "bg-[#046bd2] text-white shadow-md" : "bg-gray-100 text-gray-600"
              }`}
              data-testid={`tab-uni-${tab.toLowerCase().replace(/\s/g, '-')}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {universities[activeTab]?.map((uni, index) => (
            <motion.div
              key={uni}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-[#f0f5fa] to-white rounded-xl p-5 border border-gray-100 text-center hover-elevate"
              data-testid={`card-university-${index}`}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#046bd2]/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#046bd2]" />
              </div>
              <h3 className="font-medium text-sm text-[#032b66] leading-snug">{uni}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
