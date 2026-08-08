import React from "react";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Box, BookOpen, Gift, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const collections = [
  {
    icon: Box,
    title: "Art Therapy Kits",
    desc: "Handpicked creative kits for students and therapists, designed for healing through paint, collage, and tactile crafts.",
  },
  {
    icon: BookOpen,
    title: "Journals & Workbooks",
    desc: "Guided journals and project workbooks to support reflection, goal-setting, and emotional coping through art.",
  },
  {
    icon: Gift,
    title: "Gift Cards & Support Packages",
    desc: "Meaningful gifts for loved ones, including session bundles and self-care art experiences.",
  },
  {
    icon: Monitor,
    title: "Digital Learning Resources",
    desc: "Online guides, tutorials, and art therapy tools for remote creative wellness support.",
  },
];

export default function Collections() {
  const [, setLocation] = useLocation();

  return (
    <Layout>
      <section className="relative min-h-[75vh] flex items-center pt-28 pb-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Collections & Products</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Explore our curated art therapy collections, support packages, and creative resources designed to help you heal, reflect, and grow.
            </p>
            <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/contact") }>
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl bg-card border border-border p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold mb-3 font-serif">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
