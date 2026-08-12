import React from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/art_therapy_studio_inside_shipping_container.png";

export default function Home() {
  const [, setLocation] = useLocation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const slideInHeadline = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Art Therapy Studio"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight tracking-tight text-foreground">
            DonCastro Galleria
          </h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              Mental Wellness & Creative Expression
            </span>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideInHeadline}
              className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-foreground"
            >
              Healing Through <span className="text-primary italic">Art</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A mobile art therapy unit providing accessible mental health support through creative expression at KCA University and beyond.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all" onClick={() => setLocation("/services") }>
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 bg-background/50 backdrop-blur-sm" onClick={() => setLocation("/join") }>
                Join Our Mission
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all" onClick={() => setLocation("/about") }>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
