import React from "react";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Palette, Users, HeartHandshake, SprayCan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const highlights = [
  {
    icon: Palette,
    title: "Art-Based Healing",
    desc: "Creative expression through various art forms for emotional processing and healing.",
  },
  {
    icon: Users,
    title: "Peer Support",
    desc: "Trained peer counselors providing trauma-informed care in a safe environment.",
  },
  {
    icon: HeartHandshake,
    title: "Safe Space",
    desc: "An inclusive, judgment-free zone designed for mental wellness and self-discovery.",
  },
  {
    icon: SprayCan,
    title: "Accessible Care",
    desc: "Mobile unit bringing mental health support directly to where it's needed most.",
  },
];

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <Layout>
      <section className="relative min-h-[75vh] flex items-center pt-28 pb-16 overflow-hidden bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 border border-primary/20">
              About DonCastro Galleria
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Transforming Mental Health Care Through Art
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              DonCastro Galleria repurposes a shipping container into a mobile art therapy unit. Piloted at KCA University, we build safe, creative spaces where emotional healing meets community support.
            </p>
            <Button size="lg" className="rounded-full px-10" onClick={() => setLocation("/services") }>
              View Services
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-2"
          >
            <div className="rounded-3xl bg-card border border-border p-10 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                We provide trauma-informed art therapy that supports emotional regulation, peer connection, and self-discovery. Our mobile unit makes care more accessible for students and communities in need.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond therapy, we empower peer counselors with hands-on training and create a sustainable support network for long-term mental wellness.
              </p>
            </div>

            <div className="rounded-3xl bg-primary/5 border border-primary/20 p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-primary mb-6">What We Offer</h2>
              <ul className="space-y-5 text-muted-foreground">
                <li>• Mobile art therapy sessions at KCA University and outreach events.</li>
                <li>• Peer counseling programs supported by trauma-aware facilitators.</li>
                <li>• Creative self-expression through painting, journaling, and collaborative workshops.</li>
                <li>• Community-based activities built for healing, resilience, and belonging.</li>
              </ul>
            </div>
          </motion.div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl bg-card border border-border p-8 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
