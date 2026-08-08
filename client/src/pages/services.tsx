import React from "react";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Palette, Activity, Users, BookOpen, HeartHandshake, Gem, Hammer, Flame, SprayCan, Coffee, Scissors, Layers, Box, Droplets, PenTool, Gift, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import artwork1 from "@assets/1000023038_1767651988912.jpg";
import artwork2 from "@assets/1000023028_1767652187210.jpg";
import artwork3 from "@assets/1000023027_1767652187224.jpg";
import artwork4 from "@assets/1000023025_1767652187224.jpg";
import artwork5 from "@assets/1000023044_1767652198882.jpg";

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  desc: string;
  imageUrl?: string;
};

type StoredService = {
  title: string;
  desc: string;
  imageUrl?: string;
  iconName: string;
};

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Activity,
  Users,
  BookOpen,
  HeartHandshake,
  Gem,
  Hammer,
  Flame,
  SprayCan,
  Coffee,
  Scissors,
  Layers,
  Box,
  Droplets,
  PenTool,
  Gift,
  Monitor,
};

const builtInServices: ServiceItem[] = [
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

export default function Services() {
  const [customServices, setCustomServices] = React.useState<StoredService[]>([]);
  const services: ServiceItem[] = React.useMemo(() => {
    return [
      ...builtInServices,
      ...customServices.map((item) => ({
        icon: iconMap[item.iconName] ?? Gift,
        title: item.title,
        desc: item.desc,
        imageUrl: item.imageUrl?.trim() || undefined,
      })),
    ];
  }, [customServices]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("doncastro_custom_services");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setCustomServices(parsed);
      }
    } catch (err) {
      console.error("Failed to load custom services", err);
    }
  }, []);

  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [selected, setSelected] = React.useState<any | null>(null);
  const [comment, setComment] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");

  const serviceImages: Record<string, string> = {
    "Pottery": "https://img.magnific.com/free-photo/unfinished-jug_1098-13687.jpg?semt=ais_test_b&w=740&q=80",
    "String Art": "https://www.hachettebookgroup.com/wp-content/uploads/2023/02/Kids-Woodworking-Make-a-String-Thing.jpeg",
    "Crochet & Knitting": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgD8P4ruEh6dSjgcRgRFw-X54Dq4jICiElRJmGgDAWxhRRAA6-0OWjQ7T_&s=10",
    "Whittling": "https://gowildgowest.co.uk/wp-content/uploads/2022/03/elves-min-scaled-e1648561626576-768x1024.jpg",
    "Candle Making": "https://www.thespruce.com/thmb/dvW6HQvbub6MzMQTaVKoHFKfrwo=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-types-of-Candle-Wax-5323778-hero-e4277e76885049a28707749d892fe592.jpg",
    "Rug Tufting": "https://images.squarespace-cdn.com/content/v1/5d924c5adc02a317cd6b4282/931941d4-4a4b-47cf-adba-22ae1664241e/657B3208-02F3-46F3-A4AE-7AF5A5B55A54.JPG",
    "Woodworks": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCBEgkBAp1mjELiv8mgrkNnMwAd1wCgYn5Kr__0umUzbSoG2y3s1-UhI&s=10",
    "Peer Counseling": "https://static.vecteezy.com/system/resources/thumbnails/011/153/427/small/friendship-symbol-silhouette-vector.jpg",
    "Journaling Workshops": "https://assets.classbento.com.au/images/class/introduction-visual-journaling-workshop-sydney-600.jpg?v=1785702756",
    "Mindfulness Sessions": "https://www.mindful.org/content/uploads/Meditation-Mindfulness-1-scaled.jpg",
    "Group Support": "https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_1280.png",
    "Visual Art Therapy": "https://cdn.shopify.com/s/files/1/0061/4639/2135/files/Photo_2_large.jpeg?v=1593177775",
    "Glass Art": "https://images.squarespace-cdn.com/content/v1/5d517452d699f1000174a25f/1620056704423-LXV3015EPRKKMG2D3ZVT/IMG_7520.jpeg",
    "Spray Painting": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLidX4gtqhT1qPkHnCKS-S0ST_iHWRkHuTYJ4vT9pZAA7Ha48uB5V2IL8&s=10",
    "Pyrography": "https://images.squarespace-cdn.com/content/v1/5c35399cfcf7fd410bafb540/a12a3be7-83e9-434b-93a5-4a48e85b5107/how-to-wood-burn",
    "Sculpture": "https://media.istockphoto.com/id/515264580/photo/positive-negative-form.jpg?s=612x612&w=0&k=20&c=ggfY3sEFJQEZ4ai23W0veb5XvDN41UcWpxVw_VP-5bY=",
    "Resin Art": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLEYTvqVnneKArZPC5-YQbZ8pEOAPI1KfD1HwzbN5etvGBkWlmIvgw4I&s=10",
    "DIY Ornaments": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJDHgO2BnX582QwxVILyTU8OIVDX6fBcSXwlzAKCYagZdcTDYXU1YiGA&s=10",
    "Digital Art": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBZeYSF0VCITgeWWE3CfE1vR9iYwSIjjpFnvrSEY7qMvi642PeCmlvD4&s=10",
    "Storytelling": "https://simplyamazingtraining.co.uk/wp-content/uploads/2019/07/shutterstock_413547061.jpg",
  };

  return (
    <Layout>
      <section className="relative min-h-[75vh] flex items-center pt-28 pb-16 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 lg:grid-cols-[1.5fr_1fr] items-start"
          >
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Discover our range of art-based therapeutic services designed to support your mental wellness journey in a safe, creative environment.
              </p>
              <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/contact") }>
                Book a Session
              </Button>
            </div>

            {/* Mastery & Focus Craft panel removed per request */}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.button
                key={`${service.title}-${index}`}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => { setSelected(service); setComment(""); }}
                aria-label={`Explore ${service.title}`}
                className="group rounded-3xl bg-card border border-border p-8 shadow-sm hover:shadow-lg transition-all transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer w-full text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold mb-3 font-serif group-hover:text-primary transition-colors">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent>
          {selected && (
            <div>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.desc}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg overflow-hidden bg-muted">
                  <img src={serviceImages[selected.title] || artwork1} alt={selected.title} className="w-full h-64 object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-4">Select a preferred date/time on the contact page after booking, or reach out to coordinate sessions directly.</p>

                  <label className="block text-sm font-medium mb-2">Full name</label>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-3 rounded-md border bg-background mb-3" placeholder="Your full name" />

                  <label className="block text-sm font-medium mb-2">Phone number</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 rounded-md border bg-background mb-3" placeholder="+2547XXXXXXXX" />

                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="w-full p-3 rounded-md border bg-background mb-3" placeholder="you@example.com" />

                  <label className="block text-sm font-medium mb-2">Add a comment</label>
                  <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full min-h-[120px] p-3 rounded-md border bg-background resize-vertical" placeholder="Any notes for the facilitator (access needs, goals, questions)..." />
                </div>
              </div>

              <DialogFooter className="mt-6">
                <div className="flex w-full gap-3">
                  <Button variant="outline" className="w-1/2" onClick={() => { setSelected(null); }}>
                    Cancel
                  </Button>
                  <Button className="w-1/2" onClick={() => {
                    try {
                      const raw = localStorage.getItem("doncastro_bookings");
                      const list = raw ? JSON.parse(raw) : [];
                      const booking = {
                        id: Math.random().toString(36).slice(2, 9),
                        serviceTitle: selected.title,
                        name: fullName || "Guest",
                        phone: phone || "",
                        email: emailInput || "",
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(),
                        notes: comment || "",
                        createdAt: new Date().toISOString(),
                      };
                      list.push(booking);
                      localStorage.setItem("doncastro_bookings", JSON.stringify(list));
                      toast({ title: "Booking Added", description: `Booked ${selected.title}. Check Bookings page.` });
                      setSelected(null);
                      setLocation("/bookings");
                    } catch (e) {
                      console.error(e);
                      toast({ title: "Error", description: "Could not save booking." });
                    }
                  }}>
                    Book Service
                  </Button>
                </div>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
