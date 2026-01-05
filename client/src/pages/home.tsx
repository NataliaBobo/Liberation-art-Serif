import React from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Palette, Activity, Gem, Hammer, Flame, SprayCan, 
  Coffee, Scissors, Layers, Box, Droplets, PenTool, 
  Gift, Monitor, BookOpen, Users, HeartHandshake, ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/art_therapy_studio_inside_shipping_container.png";

const services = [
  { icon: Palette, title: "Painting", desc: "Express emotions through colors and brushstrokes. Discover inner peace through canvas art." },
  { icon: Activity, title: "String Art", desc: "Create stunning geometric patterns. A meditative practice that builds focus and patience." },
  { icon: Gem, title: "Glass Art", desc: "Work with glass to create beautiful pieces while learning about light and transformation." },
  { icon: Hammer, title: "Woodworks", desc: "Craft functional pieces. Connect with natural materials while developing practical skills." },
  { icon: Flame, title: "Pyrography", desc: "The ancient art of wood burning. Practice mindfulness and precision." },
  { icon: SprayCan, title: "Spray Painting", desc: "Urban art meets therapy. Express yourself boldly through aerosol art." },
  { icon: Coffee, title: "Pottery", desc: "Shape clay with your hands. A grounding, tactile therapeutic experience." },
  { icon: Scissors, title: "Crochet & Knitting", desc: "Create beautiful textiles. Rhythmic motions promote relaxation and mindfulness." },
  { icon: Layers, title: "Rug Tufting", desc: "Design custom rugs using tufting guns. A satisfying craft that builds creativity." },
  { icon: Box, title: "Sculpture", desc: "Bring visions to life in 3D. Explore form, space, and multimedia installations." },
  { icon: Droplets, title: "Resin Art", desc: "Mix colors and embed objects for unique, translucent creations." },
  { icon: PenTool, title: "Whittling", desc: "Meditative wood carving. Develop patience and precision with small sculptures." },
  { icon: Flame, title: "Candle Making", desc: "Craft aromatic candles. Learn about fragrance blending and wax artistry." },
  { icon: Gift, title: "DIY Ornaments", desc: "Create personalized decorations. Perfect for celebrating milestones." },
  { icon: Monitor, title: "Digital Art", desc: "Merge technology with artistic expression through digital painting and design." },
  { icon: BookOpen, title: "Storytelling", desc: "Share your narrative and preserve memories in therapeutic sessions." },
  { icon: Users, title: "Peer Counseling", desc: "Professional development for peer counsellors in trauma-informed care." },
  { icon: HeartHandshake, title: "Mental Support", desc: "Safe, confidential space to address mental health challenges." },
];

const team = [
  { 
    initials: "FC", 
    name: "Fidel Castro", 
    role: "Project Director", 
    desc: "School of Education - Creative Arts & Wellness. Leading overall coordination and therapy sessions." 
  },
  { 
    initials: "BM", 
    name: "Belindah Mutumi", 
    role: "Project Supervisor", 
    desc: "Student Affairs - KCA University Counsellor. Providing expert supervision and guidance." 
  }
];

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      {/* Hero Section */}
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
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              Mental Wellness & Creative Expression
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-foreground">
              Healing Through <span className="text-primary italic">Art</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A mobile art therapy unit providing accessible mental health support through creative expression at KCA University and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 bg-background/50 backdrop-blur-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Join Our Mission
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Goal Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-primary/5 border border-primary/10"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary">Project Vision</h3>
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                "To be a transformative space where creativity nature healing, self-discovery and emotional freedom empowering individuals to connect deeply with themselves and the world through art."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-secondary/20 border border-secondary/20"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif text-secondary-foreground">Project Goal</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                DonCastro Galleria is dedicated to fostering emotional growth, mental wellness and personal exploration through art. By providing a safe expressive environment for creative engagement, we inspire individuals to manage stress, express their emotions and uncover their inner strengths and foster great coping abilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl leading-relaxed text-muted-foreground mb-12">
              DonCastro Galleria is dedicated to enhancing self-discovery and personal growth through creative engagement. We are establishing a mobile, accessible creative mental health support space by repurposing a shipping container into an art therapy unit, piloted at KCA University. Our mission is to raise awareness and reduce stigma around mental health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive art therapy services designed to promote mental wellness and emotional healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Making a difference in mental health support and creative expression</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Students Targeted" },
              { number: "Weekly", label: "Therapy Sessions" },
              { number: "10+", label: "Peer Counsellors" },
              { number: "100%", label: "Dedicated to Wellness" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 font-serif">{stat.number}</div>
                <div className="text-sm md:text-base opacity-80 uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">Passionate professionals dedicated to mental health and creative healing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-serif font-bold mb-6">
                  {member.initials}
                </div>
                <h3 className="text-2xl font-bold mb-2 font-serif">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join us in bringing art therapy and mental wellness to students and communities. Whether you want to volunteer, partner, or seek support.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">KCA University, Nairobi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Partner With Us</h4>
                    <p className="text-muted-foreground">Support our mobile therapy unit</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-lg py-6">
                    Send Message <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
