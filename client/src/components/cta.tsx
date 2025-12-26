import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Join thousands of satisfied homeowners and experience the best way to sell real estate.
          </h2>
          <a 
            href="https://doveequities.h.trustco.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 rounded-xl text-lg shadow-xl transition-all"
          >
            Sell My House For Cash
          </a>
        </motion.div>
      </div>
      
    </section>
  );
}
