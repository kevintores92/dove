import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 relative overflow-hidden border border-slate-100 shadow-sm">
          <div className="absolute top-8 left-8 text-blue-100">
            <Quote size={120} strokeWidth={1} className="opacity-50" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed font-light mb-8">
                "My interaction with Phil and Pete from Dove Equities was an enjoyable experience from the moment I contacted them. They invested their time to inspect my house and presented an irresistible offer, coupled with the flexibility of choosing my preferred closing date. I sold my house to them without the hassle of showings or public listings. In just 12 days, we sealed the deal, and I received my payment on the very same day."
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">Satisfied Homeowner</h4>
                  <p className="text-sm text-gray-500">New York, NY</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
