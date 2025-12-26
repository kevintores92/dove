import { motion } from "framer-motion";
import wavyBuilding from "@assets/generated_images/modern_white_wavy_glass_building_facade_architecture_abstract.png";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const points = [
    "No fees or hidden commissions",
    "Close on your timeline (as little as 3 weeks)",
    "We buy in ANY condition - no repairs needed",
    "Fair cash offers based on market value",
    "Streamlined, stress-free process"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Looking for a fast and equitable sale of your home? Look no further. Let's be honest, selling a home in the market can be a challenging and expensive endeavor.
              </p>
              <p>
                Traditional real estate agents market your property, eat up your time with showings, and demand hefty commissions, sometimes up to 6%. Even after signing the contract, they may drag their feet, and you end up dealing with issues like repairs, paperwork, low appraisals, and unpredictable market shifts.
              </p>
              <p>
                It can feel like you're back to square one before you know it. We streamline the process, making it stress-free. We offer a trusted and professional platform to sell your property in its current condition.
              </p>
              <p className="font-medium text-gray-900">
                Simply complete our brief form today to get started and let us take the reins from here.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src={wavyBuilding} 
                alt="Modern Architecture" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[200px] hidden md:block">
              <p className="text-4xl font-bold text-primary mb-1">#1</p>
              <p className="text-sm font-medium text-gray-600">Rated Homebuyers in New York</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
