import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import heroBg from "@assets/jason-dent-w3eFhqXjkZE-unsplash-scaled_1766778529467.jpg";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  address: z.string().min(5, "Address is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  consent: z.boolean().refine(val => val === true, "You must agree to the terms"),
});

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    form.reset();
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Fixed Background Image with Overlay */}
      <div className="fixed inset-0 w-full h-full z-0" style={{ backgroundImage: `url(${heroBg})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6 max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Sell your home to a <span className="text-blue-200">reliable buyer.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-light">
            No fees or commissions required. Experience a seamless, direct transaction with New York's top homebuyers.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium">Fast Closing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium">Any Condition</span>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 lg:ml-auto w-full max-w-md"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">Get a Cash Offer</h3>
            <p className="text-sm text-gray-500">Complete the form to start the process.</p>
          </div>

          {submitted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-4 flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">Thank you! We'll be in touch shortly.</span>
            </motion.div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} className="bg-gray-50 border-gray-200 focus:bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Property Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter complete address" {...field} className="bg-gray-50 border-gray-200 focus:bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@example.com" {...field} className="bg-gray-50 border-gray-200 focus:bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 000-0000" {...field} className="bg-gray-50 border-gray-200 focus:bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs font-normal text-gray-500">
                        I have read and agree to the <a href="https://doveequities.h.trustco.ai/#privacyArea" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a> and <a href="https://doveequities.h.trustco.ai/#termsArea" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Terms and Conditions</a>. By submitting the contact form and signing up for texts, you consent to receive marketing text messages from Dove Equities at the number provided. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. You can unsubscribe at any time by replying STOP. Text HELP to get help. Please read our <a href="https://doveequities.h.trustco.ai/#privacyArea" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a> for more details.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 text-base shadow-lg hover:shadow-blue-500/25 transition-all">
                Submit Request
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
      
    </section>
  );
}
