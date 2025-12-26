import { motion } from "framer-motion";
import { Clock, Shield, Award, Users } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-4">20+ Years</h2>
          <p className="text-2xl font-medium text-gray-800">of Proven Expertise</p>
          <p className="text-gray-500 mt-2">Assuring efficiency in time and professional experience.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Clock, title: "Fast Process", desc: "Close in as little as 7 days" },
            { icon: Shield, title: "Reliable", desc: "Guaranteed cash offers" },
            { icon: Award, title: "Expertise", desc: "Deep market knowledge" },
            { icon: Users, title: "Direct", desc: "No middleman involved" },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all text-center group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
