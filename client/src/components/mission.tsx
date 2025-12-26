import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              We don't rely on MLS listings; instead, we offer a direct, person-to-person, immediate service that accelerates the closing process and minimizes your stress. Say goodbye to dealing with multiple agents, enjoy straightforward and effortless communication, all aimed at ensuring your property sale is the best it can be.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We're here to make selling your property as cost-effective, discreet, and efficient as possible. We know your time is valuable, so we're treating it that way. No constant showings, no costly repair fees - all in the name of making your sale as smooth a process as we can.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
