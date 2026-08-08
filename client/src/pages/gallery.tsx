import React from "react";
import Layout from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

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

function FlipBook() {
  const [currentPage, setCurrentPage] = React.useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-[3/4] [perspective:1000px] group py-12">
      <div className="absolute inset-0 bg-card rounded-r-3xl shadow-2xl border-y-4 border-r-4 border-primary/20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full flex flex-col transform-gpu origin-left"
          >
            <div className="flex-1 overflow-hidden relative">
              <img
                src={galleryImages[currentPage].src}
                alt={galleryImages[currentPage].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <p className="text-white text-xl font-serif italic">
                  {galleryImages[currentPage].alt}
                </p>
              </div>
            </div>
            <div className="p-6 bg-card border-t flex justify-between items-center">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Fidel Castro — Art Director Session
              </span>
              <span className="text-sm font-bold font-serif text-primary">
                Page {currentPage + 1} / {galleryImages.length}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-primary/40 to-primary/10 rounded-l-md shadow-inner border-l-2 border-primary/30 z-20" />
      <div className="absolute inset-y-0 -left-16 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevPage}
          className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowRight className="w-6 h-6 rotate-180" />
        </Button>
      </div>
      <div className="absolute inset-y-0 -right-16 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextPage}
          className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground animate-pulse">
        <Book className="w-4 h-4" />
        <span className="text-sm font-medium italic">Click arrows to flip through the story</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [, setLocation] = useLocation();

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Outdoor sessions, creative expressions, and the healing moments that define our mobile art therapy journey.
            </p>
            <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/contact") }>
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <FlipBook />
        </div>
      </section>
    </Layout>
  );
}
