import React from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Palette, Activity, Gem, Hammer, Flame, SprayCan, 
  Coffee, Scissors, Layers, Box, Droplets, PenTool, 
  Gift, Monitor, BookOpen, Users, HeartHandshake, ArrowRight,
  Heart, HandHeart, Handshake, MessageCircle, Sparkles, ChevronDown,
  CreditCard, Smartphone, Globe, Landmark
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/art_therapy_studio_inside_shipping_container.png";

const services = [
  { icon: Palette, title: "Visual Art Therapy", desc: "Express emotions through painting, drawing, and mixed media in guided sessions." },
  { icon: Activity, title: "Expressive Arts", desc: "Combine movement, music, and creative writing for holistic emotional release." },
  { icon: Users, title: "Peer Counseling", desc: "Confidential support from trained peers who understand your journey." },
  { icon: BookOpen, title: "Journaling Workshops", desc: "Guided journaling techniques for self-reflection and emotional processing." },
  { icon: HeartHandshake, title: "Mindfulness Sessions", desc: "Meditation and mindfulness practices integrated with creative activities." },
  { icon: Users, title: "Group Support", desc: "Community-based healing circles fostering connection and shared growth." },
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
];

const testimonials = [
  {
    quote: "The art therapy sessions helped me express feelings I couldn't put into words. It's been transformative for my mental health journey.",
    author: "Sarah M.",
    role: "KCA University Student"
  },
  {
    quote: "Being trained as a peer counselor here gave me skills I'll carry forever. The trauma-informed approach is truly special.",
    author: "James K.",
    role: "Peer Counselor"
  },
  {
    quote: "This mobile unit brings hope to places that need it most. The accessibility factor is game-changing for mental health support.",
    author: "Dr. Amina W.",
    role: "Mental Health Advocate"
  }
];

import artwork1 from "@assets/1000023038_1767651988912.jpg";
import artwork2 from "@assets/1000023028_1767652187210.jpg";
import artwork3 from "@assets/1000023027_1767652187224.jpg";
import artwork4 from "@assets/1000023025_1767652187224.jpg";
import artwork5 from "@assets/1000023044_1767652198882.jpg";

const galleryImages = [
  { src: artwork1, alt: "Outdoor Session - Christ Mission" },
  { src: artwork2, alt: "Art Director's Workshop - Starry Night" },
  { src: artwork3, alt: "Creative Healing - Portrait Study" },
  { src: artwork4, alt: "Outdoor Therapy - Bird in Water" },
  { src: artwork5, alt: "Nature Inspiration - Tropical Bird" },
];

const team = [
  { 
    initials: "FC", 
    name: "Fidel Castro", 
    role: "Art Director", 
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
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} data-testid="button-explore-services">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 bg-background/50 backdrop-blur-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} data-testid="button-join-mission">
                Join Our Mission
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all text-white border-0 group"
                    data-testid="button-get-involved"
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Get Involved
                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-72 p-2 rounded-2xl border-2 shadow-2xl bg-card/95 backdrop-blur-md"
                  align="center"
                  sideOffset={8}
                >
                  <DropdownMenuLabel className="text-center py-3">
                    <span className="text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                      ✨ I'm Interested In...
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem 
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 dark:hover:from-pink-950/30 dark:hover:to-purple-950/30 transition-all group"
                    onClick={() => {
                      const donationSection = document.getElementById('donations-relay');
                      if (donationSection) {
                        donationSection.scrollIntoView({behavior: 'smooth'});
                      }
                    }}
                    data-testid="dropdown-donations"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">💝 Donations</div>
                      <div className="text-xs text-muted-foreground">Support via M-Pesa, PayPal, Visa/Mastercard</div>
                    </div>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-950/30 dark:hover:to-cyan-950/30 transition-all group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                    data-testid="dropdown-therapy"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">🎨 Attending Therapy Sessions</div>
                      <div className="text-xs text-muted-foreground">Join our art therapy programs</div>
                    </div>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-950/30 dark:hover:to-emerald-950/30 transition-all group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                    data-testid="dropdown-volunteer"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <HandHeart className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">🙌 Becoming a Volunteer</div>
                      <div className="text-xs text-muted-foreground">Give your time and skills</div>
                    </div>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 dark:hover:from-amber-950/30 dark:hover:to-orange-950/30 transition-all group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                    data-testid="dropdown-partnerships"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Handshake className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">🤝 Partnership Opportunities</div>
                      <div className="text-xs text-muted-foreground">Collaborate with us</div>
                    </div>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-950/30 dark:hover:to-purple-950/30 transition-all group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                    data-testid="dropdown-peer-counsellor"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">👥 Become a Peer Counsellor</div>
                      <div className="text-xs text-muted-foreground">Train to support others</div>
                    </div>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem 
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-muted/50 transition-all group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                    data-testid="dropdown-general-inquiry"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">💬 General Inquiry</div>
                      <div className="text-xs text-muted-foreground">Have questions? Ask us anything</div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

      {/* About Section */}
      <section id="mission" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>
            <h3 className="text-xl md:text-2xl text-primary font-serif italic mb-8">Transforming Mental Health Care Through Art</h3>
            <p className="text-xl leading-relaxed text-muted-foreground mb-12">
              DonCastro Galleria is pioneering a new approach to mental health support by repurposing a shipping container into a mobile art therapy unit. Piloted at KCA University, we're creating spaces where emotional healing meets creative expression.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-16">
              Our mission extends beyond therapy—we're building a practice hub for peer counselors to develop their skills in trauma-informed, art-based interventions, ensuring sustainable mental wellness support for communities that need it most.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { title: "Art-Based Healing", desc: "Creative expression through various art forms for emotional processing and healing.", icon: Palette },
                { title: "Peer Support", desc: "Trained peer counselors providing trauma-informed care in a safe environment.", icon: Users },
                { title: "Safe Space", desc: "An inclusive, judgment-free zone designed for mental wellness and self-discovery.", icon: HeartHandshake },
                { title: "Accessible Care", desc: "Mobile unit bringing mental health support directly to where it's needed most.", icon: SprayCan }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <h3 className="text-xl text-primary font-serif italic mb-4">Pathways to Healing</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our range of art-based therapeutic services designed to support your mental wellness journey in a safe, creative environment.
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
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300"
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

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <h3 className="text-xl text-primary font-serif italic">Stories of Transformation</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl border shadow-sm relative"
              >
                <div className="text-primary text-4xl font-serif mb-4">"</div>
                <p className="text-lg mb-8 italic text-muted-foreground">
                  {t.quote}
                </p>
                <div>
                  <div className="font-bold text-lg">{t.author}</div>
                  <div className="text-primary text-sm font-medium">{t.role}</div>
                </div>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
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

          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Gallery</h2>
            <h3 className="text-xl text-primary font-serif italic mb-12 text-center">Outdoor Sessions & Creative Expressions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="rounded-2xl overflow-hidden border shadow-lg bg-card h-full flex flex-col"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-muted relative group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-lg font-serif italic text-center px-4">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-card mt-auto border-t">
                    <p className="text-sm text-muted-foreground italic text-center font-medium">
                      Fidel Castro — Art Director Session
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Festivals Section */}
      <section id="festivals" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-rose-950/20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-rose-500/10 text-amber-700 dark:text-amber-400 font-semibold text-sm mb-4 border border-amber-500/20">
              🎪 Coming Soon
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Wellness Festivals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immersive celebrations of art, healing, and community connection bringing together creative expression and mental wellness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-400">What to Expect</h3>
              <div className="space-y-4">
                {[
                  { emoji: "🎨", title: "Live Art Sessions", desc: "Watch and participate in live painting, sculpture, and creative workshops" },
                  { emoji: "🧘", title: "Mindfulness Activities", desc: "Guided meditation, yoga, and stress-relief practices in nature" },
                  { emoji: "🎵", title: "Music & Performance", desc: "Healing sounds, drum circles, and expressive movement therapy" },
                  { emoji: "🤝", title: "Community Healing Circles", desc: "Share stories, connect with others, and build supportive relationships" },
                  { emoji: "🌿", title: "Nature Therapy", desc: "Grounding exercises and eco-art activities connecting with the environment" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 hover:shadow-md transition-all"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-center mb-6">
                <span className="text-4xl">📍</span>
                <h3 className="text-2xl font-bold mt-2 font-serif">Sacred Spaces for Healing</h3>
                <p className="text-sm text-muted-foreground italic mt-2">"Where nature whispers, the soul listens"</p>
              </div>

              <div className="max-h-[600px] overflow-y-auto pr-2 space-y-4 scrollbar-thin">
                {[
                  { emoji: "🌿", name: "John Michuki Memorial Park", county: "Nairobi", color: "emerald", desc: "A sanctuary where the ancient Nairobi River breathes life into reclaimed wilderness. Wetlands mirror the sky as indigenous trees stand sentinel, composing symphonies of restoration with every rustling leaf." },
                  { emoji: "🌻", name: "City Park", county: "Nairobi", color: "amber", desc: "An urban eden where centuries-old fig trees stretch cathedral branches toward heaven. Sykes monkeys dance through canopies as butterflies paint the air with living color and wild possibility." },
                  { emoji: "🦋", name: "Nairobi Arboretum", county: "Nairobi", color: "sky", desc: "A living gallery of 350 tree species where nature curates exquisite exhibitions. Winding paths whisper secrets of acacia while bird songs compose spontaneous concertos for wandering souls." },
                  { emoji: "🌸", name: "Uhuru Gardens", county: "Nairobi", color: "rose", desc: "Where Kenya's spirit of freedom blooms eternal. Historic grounds embrace sprawling lawns kissed by morning dew, towering palms swaying in tribute to dreams realized." },
                  { emoji: "🏔️", name: "Hell's Gate National Park", county: "Nakuru", color: "orange", desc: "Towering cliffs rise like ancient sentinels, carved by time's patient hand. Geothermal steam dances from the earth's heart while eagles soar above gorges that echo with primal beauty." },
                  { emoji: "🦩", name: "Lake Nakuru National Park", county: "Nakuru", color: "pink", desc: "A shimmering alkaline mirror where flamingos paint the shores in living coral. Euphorbia forests stand watch as rhinos graze beneath acacia canopies in this sanctuary of pink-tinged dreams." },
                  { emoji: "🌊", name: "Lake Naivasha", county: "Nakuru", color: "blue", desc: "Fresh waters cradle floating islands of papyrus where hippos wade through liquid silver at dawn. Fish eagles cry their ancient songs as the Great Rift Valley embraces this oasis of tranquility." },
                  { emoji: "🌺", name: "Crater Lake Sanctuary", county: "Nakuru", color: "teal", desc: "A hidden gem nestled in volcanic embrace, where emerald waters hold secrets of geological ages. Walking trails wind through fever tree forests alive with colobus monkey calls." },
                  { emoji: "🐘", name: "Amboseli National Park", county: "Kajiado", color: "slate", desc: "Where elephant matriarchs lead families across sun-baked plains beneath Kilimanjaro's eternal snows. Dust devils dance like spirits while swamps pulse with life at the mountain's feet." },
                  { emoji: "🦁", name: "Maasai Mara National Reserve", county: "Narok", color: "yellow", desc: "The greatest wildlife theater on Earth, where the great migration writes poetry in hoofbeats across endless savanna. Lions reign over golden grasslands as the circle of life unfolds in magnificent drama." },
                  { emoji: "🌅", name: "Mara River Crossings", county: "Narok", color: "red", desc: "Sacred waters where courage meets destiny. Wildebeest gather on trembling banks before plunging into crocodile-patrolled currents—a primal spectacle of survival and determination." },
                  { emoji: "🦒", name: "Nairobi National Park", county: "Nairobi", color: "green", desc: "Where wilderness meets skyline in harmonious defiance. Giraffes browse acacia against a backdrop of glass towers—proof that nature and humanity can share the same horizon." },
                  { emoji: "🐆", name: "Samburu National Reserve", county: "Samburu", color: "copper", desc: "Rugged wilderness where the Ewaso Ng'iro River carves life through semi-arid splendor. Rare northern species roam under doum palms as Samburu warriors guard ancestral lands." },
                  { emoji: "🏝️", name: "Diani Beach", county: "Kwale", color: "cyan", desc: "Powder-white sands kiss turquoise waters in eternal embrace. Coral reefs shimmer beneath waves while palm groves whisper ancient Swahili secrets to those who pause to listen." },
                  { emoji: "🌴", name: "Watamu Marine Park", county: "Kilifi", color: "aqua", desc: "An underwater cathedral where coral gardens bloom in technicolor splendor. Sea turtles glide through crystalline depths as the Indian Ocean reveals its most precious treasures." },
                  { emoji: "🏰", name: "Fort Jesus", county: "Mombasa", color: "terracotta", desc: "Portuguese stone walls hold centuries of coastal saga. Ocean breezes carry whispers of sultans and sailors through corridors where African, Arab, and European histories intertwine." },
                  { emoji: "🌙", name: "Lamu Old Town", county: "Lamu", color: "sand", desc: "A UNESCO treasure where time flows like dhow sails on monsoon winds. Coral stone architecture and carved doorways frame streets unchanged for centuries, breathing Swahili soul." },
                  { emoji: "⛵", name: "Shela Beach", county: "Lamu", color: "ivory", desc: "Twelve kilometers of pristine solitude where dhows rest on golden sands. The call to prayer mingles with wave songs in this timeless archipelago haven." },
                  { emoji: "🗻", name: "Mount Kenya National Park", county: "Nyeri", color: "ice", desc: "Africa's second-highest peak pierces the heavens with glacial majesty. Afro-alpine moorlands bloom with giant lobelias while crystal streams cascade through bamboo forests." },
                  { emoji: "🌲", name: "Aberdare National Park", county: "Nyandarua", color: "forest", desc: "Mist-shrouded highlands where waterfalls thunder into ravines draped in ancient forest. Elephants traverse mountain paths while black leopards prowl through bamboo shadows." },
                  { emoji: "🦏", name: "Ol Pejeta Conservancy", county: "Laikipia", color: "olive", desc: "Where conservation writes its boldest chapters. The last northern white rhinos graze these plains as chimpanzees find sanctuary and community conservation proves its power." },
                  { emoji: "🌾", name: "Lewa Wildlife Conservancy", county: "Meru", color: "wheat", desc: "A pioneering sanctuary where community and wildlife thrive in symbiotic harmony. Grevy's zebras roam freely as the Lewa Marathon brings global attention to conservation's noble cause." },
                  { emoji: "🏜️", name: "Chalbi Desert", county: "Marsabit", color: "dust", desc: "An otherworldly expanse where salt flats shimmer like mirrors to infinity. Camels traverse ancient trade routes as Gabbra nomads navigate this stark, beautiful wilderness." },
                  { emoji: "🌋", name: "Mount Marsabit", county: "Marsabit", color: "volcanic", desc: "A forested oasis rising from desert sands, crowned with crater lakes of impossible blue. Elephants with the longest tusks in Kenya roam these misty slopes." },
                  { emoji: "💎", name: "Lake Turkana", county: "Turkana", color: "jade", desc: "The Jade Sea—world's largest permanent desert lake, cradling humanity's oldest fossils. Volcanic islands dot waters where Nile crocodiles and flamingos share shores." },
                  { emoji: "🌊", name: "Central Island National Park", county: "Turkana", color: "obsidian", desc: "Three crater lakes glow like jewels in volcanic stone. Crocodiles nest on shores unchanged since prehistoric times—a living time capsule of Earth's raw power." },
                  { emoji: "🦅", name: "Kakamega Forest", county: "Kakamega", color: "moss", desc: "Kenya's last remnant of ancient Guineo-Congolian rainforest. 400 butterfly species dance through canopy gaps while rare birds perform dawn choruses in primordial green." },
                  { emoji: "🐟", name: "Lake Victoria", county: "Kisumu", color: "sapphire", desc: "Africa's greatest lake, source of the eternal Nile. Fishing dhows dot the horizon as hippos bask in papyrus-fringed bays and cichlids paint the shallows." },
                  { emoji: "🌿", name: "Ruma National Park", county: "Homa Bay", color: "sage", desc: "Last stronghold of the roan antelope in Kenya. Oribi bound through tall grasslands while the rare Jackson's hartebeest grazes beneath solitary acacias." },
                  { emoji: "🏞️", name: "Menengai Crater", county: "Nakuru", color: "ash", desc: "One of Earth's largest calderas, where geothermal steam rises like prayers from volcanic depths. The Maasai call it 'Place of Corpses'—hauntingly beautiful and spiritually charged." },
                  { emoji: "🌈", name: "Thomson's Falls", county: "Nyandarua", color: "mist", desc: "A 74-meter cascade plunging into rainbow-kissed mist. The Ewaso Narok River celebrates gravity in spectacular fashion, carving beauty from ancient volcanic rock." },
                  { emoji: "🦬", name: "Meru National Park", county: "Meru", color: "bronze", desc: "Where Elsa the lioness learned to live free. Palm-dotted savannas and clear streams create paradise, while lesser kudu and reticulated giraffe roam Adamson's beloved wilderness." },
                  { emoji: "🌵", name: "Shaba National Reserve", county: "Isiolo", color: "sienna", desc: "Rugged volcanic landscapes where the Ewaso Ng'iro River is lifeline to all. Gerenuk stand tall on hind legs while Beisa oryx navigate this semi-arid wonderland." },
                  { emoji: "🐊", name: "Tana River Primate Reserve", county: "Tana River", color: "riverine", desc: "Ribbon of green through arid lands, home to endangered red colobus and crested mangabey. Gallery forests line the sacred Tana as it journeys to the sea." },
                  { emoji: "🌙", name: "Kisite-Mpunguti Marine Park", county: "Kwale", color: "lagoon", desc: "Dolphin pods dance through protected waters as coral gardens teem with tropical splendor. Snorkelers swim with sea turtles in this underwater paradise." },
                  { emoji: "🦜", name: "Arabuko-Sokoke Forest", county: "Kilifi", color: "canopy", desc: "East Africa's largest coastal forest, sanctuary to golden-rumped elephant shrews and Clarke's weavers. Ancient Brachystegia trees shelter creatures found nowhere else on Earth." },
                  { emoji: "🏔️", name: "Mount Elgon National Park", county: "Bungoma", color: "granite", desc: "World's largest caldera crowns this ancient volcano. Salt-mining elephants venture into caves by torchlight while endemic flora clings to afro-alpine peaks." },
                  { emoji: "🌻", name: "Saiwa Swamp National Park", county: "Trans-Nzoia", color: "marsh", desc: "Kenya's smallest park holds its rarest treasure—the sitatunga antelope. Boardwalks wind through papyrus as de Brazza's monkeys watch from riverine canopy." },
                  { emoji: "⛰️", name: "Cherangani Hills", county: "Elgeyo-Marakwet", color: "highland", desc: "Rolling grasslands and indigenous forest crown these ancient hills. Kalenjin runners train on legendary slopes where mist and tradition interweave." },
                  { emoji: "🦌", name: "Rimoi National Reserve", county: "Elgeyo-Marakwet", color: "escarpment", desc: "Lesser known gem along the Kerio Valley escarpment. Greater kudu browse steep slopes while views stretch across the Great Rift's dramatic canvas." },
                  { emoji: "🌊", name: "Malindi Marine National Park", county: "Kilifi", color: "coral", desc: "Kenya's first marine protected area, where reef fish paint living murals. Glass-bottom boats reveal underwater galaxies of color and life." },
                  { emoji: "🦢", name: "Lake Bogoria", county: "Baringo", color: "flamingo", desc: "Geysers erupt beside flamingo-lined shores in this soda lake sanctuary. Hot springs heal while millions of lesser flamingos create living pink carpets." },
                  { emoji: "🐦", name: "Lake Baringo", county: "Baringo", color: "freshwater", desc: "Freshwater haven where 470 bird species find paradise. Crocodiles bask on islands as Njemps fishermen cast nets using ancient methods." }
                ].map((venue, i) => {
                  const colorMap: Record<string, string> = {
                    emerald: "from-emerald-100 via-green-50 to-teal-100 dark:from-emerald-900/40 dark:via-green-900/30 dark:to-teal-900/40 border-emerald-300/50 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-300",
                    amber: "from-amber-100 via-yellow-50 to-orange-100 dark:from-amber-900/40 dark:via-yellow-900/30 dark:to-orange-900/40 border-amber-300/50 dark:border-amber-700/50 text-amber-800 dark:text-amber-300",
                    sky: "from-sky-100 via-blue-50 to-indigo-100 dark:from-sky-900/40 dark:via-blue-900/30 dark:to-indigo-900/40 border-sky-300/50 dark:border-sky-700/50 text-sky-800 dark:text-sky-300",
                    rose: "from-rose-100 via-pink-50 to-fuchsia-100 dark:from-rose-900/40 dark:via-pink-900/30 dark:to-fuchsia-900/40 border-rose-300/50 dark:border-rose-700/50 text-rose-800 dark:text-rose-300",
                    orange: "from-orange-100 via-amber-50 to-red-100 dark:from-orange-900/40 dark:via-amber-900/30 dark:to-red-900/40 border-orange-300/50 dark:border-orange-700/50 text-orange-800 dark:text-orange-300",
                    pink: "from-pink-100 via-rose-50 to-red-100 dark:from-pink-900/40 dark:via-rose-900/30 dark:to-red-900/40 border-pink-300/50 dark:border-pink-700/50 text-pink-800 dark:text-pink-300",
                    blue: "from-blue-100 via-sky-50 to-cyan-100 dark:from-blue-900/40 dark:via-sky-900/30 dark:to-cyan-900/40 border-blue-300/50 dark:border-blue-700/50 text-blue-800 dark:text-blue-300",
                    teal: "from-teal-100 via-cyan-50 to-emerald-100 dark:from-teal-900/40 dark:via-cyan-900/30 dark:to-emerald-900/40 border-teal-300/50 dark:border-teal-700/50 text-teal-800 dark:text-teal-300",
                    slate: "from-slate-100 via-gray-50 to-zinc-100 dark:from-slate-900/40 dark:via-gray-900/30 dark:to-zinc-900/40 border-slate-300/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-300",
                    yellow: "from-yellow-100 via-amber-50 to-orange-100 dark:from-yellow-900/40 dark:via-amber-900/30 dark:to-orange-900/40 border-yellow-300/50 dark:border-yellow-700/50 text-yellow-800 dark:text-yellow-300",
                    red: "from-red-100 via-rose-50 to-orange-100 dark:from-red-900/40 dark:via-rose-900/30 dark:to-orange-900/40 border-red-300/50 dark:border-red-700/50 text-red-800 dark:text-red-300",
                    green: "from-green-100 via-emerald-50 to-teal-100 dark:from-green-900/40 dark:via-emerald-900/30 dark:to-teal-900/40 border-green-300/50 dark:border-green-700/50 text-green-800 dark:text-green-300",
                    copper: "from-orange-100 via-amber-50 to-yellow-100 dark:from-orange-900/40 dark:via-amber-900/30 dark:to-yellow-900/40 border-orange-300/50 dark:border-orange-700/50 text-orange-800 dark:text-orange-300",
                    cyan: "from-cyan-100 via-sky-50 to-blue-100 dark:from-cyan-900/40 dark:via-sky-900/30 dark:to-blue-900/40 border-cyan-300/50 dark:border-cyan-700/50 text-cyan-800 dark:text-cyan-300",
                    aqua: "from-cyan-100 via-teal-50 to-emerald-100 dark:from-cyan-900/40 dark:via-teal-900/30 dark:to-emerald-900/40 border-cyan-300/50 dark:border-cyan-700/50 text-cyan-800 dark:text-cyan-300",
                    terracotta: "from-orange-100 via-red-50 to-amber-100 dark:from-orange-900/40 dark:via-red-900/30 dark:to-amber-900/40 border-orange-300/50 dark:border-orange-700/50 text-orange-800 dark:text-orange-300",
                    sand: "from-amber-100 via-yellow-50 to-orange-100 dark:from-amber-900/40 dark:via-yellow-900/30 dark:to-orange-900/40 border-amber-300/50 dark:border-amber-700/50 text-amber-800 dark:text-amber-300",
                    ivory: "from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 border-amber-200/50 dark:border-amber-800/50 text-amber-700 dark:text-amber-400",
                    ice: "from-blue-100 via-sky-50 to-indigo-100 dark:from-blue-900/40 dark:via-sky-900/30 dark:to-indigo-900/40 border-blue-300/50 dark:border-blue-700/50 text-blue-800 dark:text-blue-300",
                    forest: "from-green-100 via-emerald-50 to-teal-100 dark:from-green-900/40 dark:via-emerald-900/30 dark:to-teal-900/40 border-green-300/50 dark:border-green-700/50 text-green-800 dark:text-green-300",
                    olive: "from-lime-100 via-green-50 to-emerald-100 dark:from-lime-900/40 dark:via-green-900/30 dark:to-emerald-900/40 border-lime-300/50 dark:border-lime-700/50 text-lime-800 dark:text-lime-300",
                    wheat: "from-amber-100 via-yellow-50 to-orange-100 dark:from-amber-900/40 dark:via-yellow-900/30 dark:to-orange-900/40 border-amber-300/50 dark:border-amber-700/50 text-amber-800 dark:text-amber-300",
                    dust: "from-orange-100 via-amber-50 to-yellow-100 dark:from-orange-900/40 dark:via-amber-900/30 dark:to-yellow-900/40 border-orange-300/50 dark:border-orange-700/50 text-orange-800 dark:text-orange-300",
                    volcanic: "from-slate-100 via-gray-50 to-zinc-100 dark:from-slate-900/40 dark:via-gray-900/30 dark:to-zinc-900/40 border-slate-300/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-300",
                    jade: "from-emerald-100 via-teal-50 to-cyan-100 dark:from-emerald-900/40 dark:via-teal-900/30 dark:to-cyan-900/40 border-emerald-300/50 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-300",
                    obsidian: "from-slate-100 via-gray-50 to-zinc-100 dark:from-slate-900/40 dark:via-gray-900/30 dark:to-zinc-900/40 border-slate-300/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-300",
                    moss: "from-green-100 via-emerald-50 to-lime-100 dark:from-green-900/40 dark:via-emerald-900/30 dark:to-lime-900/40 border-green-300/50 dark:border-green-700/50 text-green-800 dark:text-green-300",
                    sapphire: "from-blue-100 via-indigo-50 to-violet-100 dark:from-blue-900/40 dark:via-indigo-900/30 dark:to-violet-900/40 border-blue-300/50 dark:border-blue-700/50 text-blue-800 dark:text-blue-300",
                    sage: "from-green-100 via-emerald-50 to-teal-100 dark:from-green-900/40 dark:via-emerald-900/30 dark:to-teal-900/40 border-green-300/50 dark:border-green-700/50 text-green-800 dark:text-green-300",
                    ash: "from-gray-100 via-slate-50 to-zinc-100 dark:from-gray-900/40 dark:via-slate-900/30 dark:to-zinc-900/40 border-gray-300/50 dark:border-gray-700/50 text-gray-800 dark:text-gray-300",
                    mist: "from-slate-100 via-gray-50 to-blue-100 dark:from-slate-900/40 dark:via-gray-900/30 dark:to-blue-900/40 border-slate-300/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-300",
                    bronze: "from-amber-100 via-orange-50 to-yellow-100 dark:from-amber-900/40 dark:via-orange-900/30 dark:to-yellow-900/40 border-amber-300/50 dark:border-amber-700/50 text-amber-800 dark:text-amber-300",
                    sienna: "from-orange-100 via-amber-50 to-red-100 dark:from-orange-900/40 dark:via-amber-900/30 dark:to-red-900/40 border-orange-300/50 dark:border-orange-700/50 text-orange-800 dark:text-orange-300",
                    riverine: "from-green-100 via-teal-50 to-cyan-100 dark:from-green-900/40 dark:via-teal-900/30 dark:to-cyan-900/40 border-green-300/50 dark:border-green-700/50 text-green-800 dark:text-green-300",
                    lagoon: "from-cyan-100 via-blue-50 to-teal-100 dark:from-cyan-900/40 dark:via-blue-900/30 dark:to-teal-900/40 border-cyan-300/50 dark:border-cyan-700/50 text-cyan-800 dark:text-cyan-300",
                    canopy: "from-green-100 via-emerald-50 to-lime-100 dark:from-green-900/40 dark:via-emerald-900/30 dark:to-lime-900/40 border-green-300/50 dark:border-green-700/50 text-green-800 dark:text-green-300",
                    granite: "from-slate-100 via-gray-50 to-stone-100 dark:from-slate-900/40 dark:via-gray-900/30 dark:to-stone-900/40 border-slate-300/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-300",
                    marsh: "from-green-100 via-teal-50 to-emerald-100 dark:from-green-900/40 dark:via-teal-900/30 dark:to-emerald-900/40 border-green-300/50 dark:border-green-700/50 text-green-800 dark:text-green-300",
                    highland: "from-green-100 via-emerald-50 to-teal-100 dark:from-green-900/40 dark:via-emerald-900/30 dark:to-teal-900/40 border-green-300/50 dark:border-green-700/50 text-green-800 dark:text-green-300",
                    escarpment: "from-amber-100 via-orange-50 to-red-100 dark:from-amber-900/40 dark:via-orange-900/30 dark:to-red-900/40 border-amber-300/50 dark:border-amber-700/50 text-amber-800 dark:text-amber-300",
                    coral: "from-pink-100 via-rose-50 to-red-100 dark:from-pink-900/40 dark:via-rose-900/30 dark:to-red-900/40 border-pink-300/50 dark:border-pink-700/50 text-pink-800 dark:text-pink-300",
                    flamingo: "from-pink-100 via-rose-50 to-fuchsia-100 dark:from-pink-900/40 dark:via-rose-900/30 dark:to-fuchsia-900/40 border-pink-300/50 dark:border-pink-700/50 text-pink-800 dark:text-pink-300",
                    freshwater: "from-blue-100 via-cyan-50 to-teal-100 dark:from-blue-900/40 dark:via-cyan-900/30 dark:to-teal-900/40 border-blue-300/50 dark:border-blue-700/50 text-blue-800 dark:text-blue-300"
                  };
                  const colors = colorMap[venue.color] || colorMap.emerald;
                  const textColor = colors.split(" ").find(c => c.startsWith("text-")) || "text-emerald-800";
                  
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02 }}
                      whileHover={{ scale: 1.01, x: 5 }}
                      className={`bg-gradient-to-br ${colors} rounded-2xl p-4 border-2 shadow-md cursor-pointer transition-all`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{venue.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <h4 className={`text-lg font-bold font-serif ${textColor}`}>{venue.name}</h4>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20 text-muted-foreground font-medium shrink-0">
                              {venue.county} County
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground italic leading-relaxed mt-1">
                            {venue.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              data-testid="button-festival-interest"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Register Interest for Next Festival
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Donations Relay Section */}
      <section id="donations-relay" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Support Our Mission</h2>
            <p className="text-xl text-muted-foreground">Your contribution helps us bring art therapy to those who need it most.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "M-Pesa",
                icon: Smartphone,
                color: "green",
                details: [
                  { label: "Paybill", value: "222111" },
                  { label: "Account", value: "2920676" }
                ],
                desc: "Quick mobile money transfer"
              },
              {
                title: "PayPal",
                icon: Globe,
                color: "blue",
                details: [
                  { label: "Email", value: "cfidel209@gmail.com" }
                ],
                desc: "International & online payments"
              },
              {
                title: "Bank Transfer",
                icon: Landmark,
                color: "slate",
                details: [
                  { label: "Acc No", value: "5220570000524046" }
                ],
                desc: "Direct bank deposit/transfer"
              },
              {
                title: "Card Payments",
                icon: CreditCard,
                color: "rose",
                details: [
                  { label: "Visa / Mastercard", value: "Accepted" }
                ],
                desc: "Secure credit & debit cards"
              }
            ].map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-3xl border shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                <div className="space-y-3 mb-6">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">{detail.label}</span>
                      <span className="text-lg font-mono font-medium text-primary break-all">{detail.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{method.desc}</p>
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
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">KCA University, Nairobi</p>
                    <p className="text-muted-foreground">P.O.Box 20355-00200</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Connect</h4>
                    <p className="text-muted-foreground">Tel/Whatsapp: +254113096179</p>
                    <p className="text-muted-foreground">Email: fidelcastro6403@gmail.com</p>
                    <div className="mt-2 space-y-1 text-sm">
                      <p className="text-muted-foreground font-medium">Instagram: <span className="text-primary">don_castro_galleria_ltd</span></p>
                      <p className="text-muted-foreground font-medium">TikTok: <span className="text-primary">don_castro_galleria</span></p>
                      <a href="https://www.linkedin.com/in/fidel-castro-a2baa2398" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2 font-medium">View LinkedIn Profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-contact-name" />
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
                          <Input placeholder="john@example.com" {...field} data-testid="input-contact-email" />
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
                          <Textarea placeholder="How can we help?" className="min-h-[120px]" {...field} data-testid="textarea-contact-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-lg py-6" data-testid="button-submit-contact">
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
