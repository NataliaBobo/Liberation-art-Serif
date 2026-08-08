import React from "react";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Users, HeartHandshake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { isAdminLoggedIn, logoutAdmin } from "@/lib/auth";

const iconOptions = [
  "Gift",
  "Palette",
  "Activity",
  "Monitor",
  "Box",
  "HeartHandshake",
  "Gem",
  "Hammer",
  "Flame",
  "SprayCan",
  "Coffee",
  "Scissors",
  "Layers",
  "Droplets",
  "PenTool",
  "BookOpen",
  "Users",
];

export default function Admin() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [iconName, setIconName] = React.useState("Gift");

  React.useEffect(() => {
    if (!isAdminLoggedIn()) {
      setLocation("/admin-login");
    }
  }, [setLocation]);

  const handleAddProduct = () => {
    if (!title.trim() || !description.trim()) {
      toast({ title: "Missing fields", description: "Please provide a title and description." });
      return;
    }

    const existing = localStorage.getItem("doncastro_custom_services");
    const list = existing ? JSON.parse(existing) : [];
    list.push({
      title: title.trim(),
      desc: description.trim(),
      imageUrl: imageUrl.trim(),
      iconName,
    });
    localStorage.setItem("doncastro_custom_services", JSON.stringify(list));

    setTitle("");
    setDescription("");
    setImageUrl("");
    setIconName("Gift");

    toast({ title: "Product added", description: `${title.trim()} is now available on the services page.` });
  };

  return (
    <Layout>
      <section className="relative min-h-[75vh] flex items-center pt-28 pb-16 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 border border-primary/20">
              Admin Support
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admin Help</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              This area is for project administrators and team leads who manage bookings, outreach events, and therapy coordination.
            </p>
            <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/bookings")}>
              Manage Bookings
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-card border border-border p-10 shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-6">Create a New Service</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Service title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 rounded-md border bg-background"
                    placeholder="Example: Sound Bath"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full min-h-[120px] p-3 rounded-md border bg-background resize-vertical"
                    placeholder="Describe what the service offers."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Image URL</label>
                  <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full p-3 rounded-md border bg-background"
                    placeholder="Optional image URL for the service card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Icon</label>
                  <select
                    value={iconName}
                    onChange={(e) => setIconName(e.target.value)}
                    className="w-full p-3 rounded-md border bg-background"
                  >
                    {iconOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <Button size="lg" className="w-full" onClick={handleAddProduct}>
                  Add Service Product
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-card border border-border p-10 shadow-sm"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Administrator</h3>
                    <p className="text-muted-foreground">Fidel Castro</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Contact Info</h3>
                    <p className="text-muted-foreground">Tel/Whatsapp: +254113096179</p>
                    <p className="text-muted-foreground">Email: fidelcastro6403@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
