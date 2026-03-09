import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { name: "Dhruvi Mahyavanshi", location: "Surat", text: "AKANKSHA Visa Consultant made my dream of studying in Canada a reality. Their team guided me through every step of the visa process with utmost professionalism.", rating: 5 },
  { name: "Priyanshu Talreja", location: "Surat", text: "The coaching at AKANKSHA was exceptional. I scored well above my target in IELTS, and their visa guidance was seamless. Highly recommend their services!", rating: 5 },
  { name: "Divya Patel", location: "Surat", text: "From university selection to visa approval, AKANKSHA handled everything perfectly. Their expert counselors truly understand the overseas education landscape.", rating: 5 },
  { name: "Rohan Premani", location: "Surat", text: "I am grateful to AKANKSHA for helping me secure admission to a top UK university. Their knowledge and dedication are unmatched in the industry.", rating: 5 },
  { name: "Drashti Patel", location: "Ahmedabad", text: "AKANKSHA's team in Ahmedabad provided excellent guidance for my Australia student visa. The entire process was smooth and stress-free.", rating: 5 },
  { name: "Zeel Patel", location: "Ahmedabad", text: "The best visa consultancy I've ever worked with. Their attention to detail and personalized approach made all the difference in my application.", rating: 5 },
  { name: "Aesha Gandhi", location: "Ahmedabad", text: "AKANSKHA helped me navigate the complex US visa process with ease. Their expertise and support gave me the confidence I needed.", rating: 5 },
  { name: "Aryan Patel", location: "Ahmedabad", text: "Outstanding service from start to finish. SWEC's coaching helped me ace my PTE, and their visa team got my application approved quickly.", rating: 5 },
  { name: "Deep Vaghani", location: "Surat", text: "AKANKSHA's immigration experts helped me with the Canada Express Entry process. Their thorough knowledge of immigration laws is impressive.", rating: 5 },
  { name: "Vedant Buch", location: "Ahmedabad", text: "I couldn't have asked for a better consultancy. AKANKSHA guided me through scholarship applications and got me funded for my Master's program.", rating: 5 },
  { name: "Nikhitha", location: "Ahmedabad", text: "Professional, reliable, and genuinely caring about their students' success. AKANKSHA is the gold standard in visa consultation.", rating: 5 },
  { name: "Harsh Bhadoriya", location: "Ahmedabad", text: "AKANKSHA's structured approach to visa preparation and interview coaching was instrumental in my successful UK visa application.", rating: 5 },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const visibleTestimonials = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#046bd2] uppercase tracking-wider mb-3">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#032b66] mb-4" data-testid="text-testimonials-title">
            From Dreams to Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Successful stories of abroad education aspirants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#f0f5fa] to-white rounded-2xl p-6 border border-gray-100 relative"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-8 h-8 text-[#046bd2]/15 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-4">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#046bd2] to-[#032b66] flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#032b66]">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-10" data-testid="pagination-testimonials">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentPage ? "bg-[#046bd2] w-8" : "bg-gray-300"
              }`}
              data-testid={`button-page-${i}`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
