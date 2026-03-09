import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Ahmedabad Office",
    lines: ["Ahmedabad, Gujarat, India"],
  },
  {
    icon: MapPin,
    title: "Surat Office",
    lines: ["Surat, Gujarat, India"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["+91 84012 61234 (Ahmedabad)", "+91 8000 968420 (Surat)"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["akanksha@swecvisaconsultant.com"],
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f0f5fa]" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#046bd2] uppercase tracking-wider mb-3">Get In Touch</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#032b66] mb-4" data-testid="text-contact-title">
            Start Your Journey Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Book a free consultation with our expert visa consultants
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4" data-testid={`contact-info-${index}`}>
                <div className="w-12 h-12 rounded-xl bg-[#046bd2]/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-[#046bd2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#032b66] text-sm mb-1">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              <div className="w-12 h-12 rounded-xl bg-[#046bd2]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#046bd2]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#032b66] text-sm mb-1">Working Hours</h3>
                <p className="text-sm text-muted-foreground">Mon - Sat: 10:00 AM - 7:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#032b66] mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="form-contact">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Full Name"
                      {...register("name", { required: true })}
                      className={errors.name ? "border-red-400" : ""}
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
                      className={errors.email ? "border-red-400" : ""}
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Phone Number"
                      {...register("phone", { required: true })}
                      className={errors.phone ? "border-red-400" : ""}
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <select
                      {...register("service", { required: true })}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      data-testid="select-service"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Service</option>
                      <option value="overseas-education">Overseas Education</option>
                      <option value="coaching">Coaching (IELTS/PTE/TOEFL)</option>
                      <option value="immigration">Immigration Services</option>
                      <option value="visa">Visa Services</option>
                    </select>
                  </div>
                </div>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  {...register("message", { required: true })}
                  className={`resize-none ${errors.message ? "border-red-400" : ""}`}
                  data-testid="input-message"
                />
                <Button type="submit" className="w-full sm:w-auto px-8" data-testid="button-submit-contact">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
