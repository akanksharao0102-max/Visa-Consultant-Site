import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Newspaper, CalendarDays } from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    title: "France to Ease Visa Rules, Increase Indian Student Intake From 10,000 to 30,000",
    excerpt: "France is set to significantly increase its intake of Indian students, with new visa policies designed to make studying in France more accessible.",
    date: "Dec 15, 2025",
    category: "News",
  },
  {
    title: "The Consultant Advantage: Admission Success Rates Explained",
    excerpt: "Discover how working with an experienced education consultant can dramatically improve your chances of admission to top universities abroad.",
    date: "Dec 10, 2025",
    category: "Blog",
  },
  {
    title: "Unlocking IVY LEAGUE Secrets",
    excerpt: "Nigam Shah, Co-founder of SWEC, shares key insights on how Indian students can successfully gain admission to prestigious Ivy League universities.",
    date: "Dec 5, 2025",
    category: "Blog",
  },
  {
    title: "USA F2 Student Dependent Visa: Complete Guide",
    excerpt: "Nigam Shah, Co-founder of SWEC, breaks down everything you need to know about the F2 dependent visa process for the United States.",
    date: "Nov 28, 2025",
    category: "Guide",
  },
];

const tabs = [
  { label: "Blogs", icon: BookOpen },
  { label: "News", icon: Newspaper },
  { label: "Events", icon: CalendarDays },
];

export default function InsightsSection() {
  const [activeTab, setActiveTab] = useState("Blogs");

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f0f5fa] to-white" data-testid="section-insights">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-[#046bd2] uppercase tracking-wider mb-3">Insights</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#032b66] mb-4" data-testid="text-insights-title">
            Latest News & Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay informed with the latest in overseas education and immigration
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1" data-testid="tabs-insights">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.label ? "bg-[#046bd2] text-white shadow-md" : "text-gray-600"
                }`}
                data-testid={`tab-${tab.label.toLowerCase()}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-visible group cursor-pointer hover-elevate"
              data-testid={`card-blog-${index}`}
            >
              <div className="h-40 bg-gradient-to-br from-[#046bd2] to-[#032b66] rounded-t-2xl flex items-center justify-center p-6">
                <h3 className="text-white font-semibold text-sm text-center leading-relaxed line-clamp-3">{blog.title}</h3>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {blog.date}
                  <span className="bg-[#046bd2]/10 text-[#046bd2] px-2 py-0.5 rounded-full text-xs font-medium ml-auto">{blog.category}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">{blog.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#046bd2]" data-testid={`link-blog-${index}`}>
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
