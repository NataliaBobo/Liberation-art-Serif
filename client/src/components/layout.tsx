import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [, setLocation] = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/collections", label: "Collections" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/bookings", label: "Bookings" },
    { href: "/contact", label: "Contact" },
    { href: "/admin", label: "Admin" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm border-b py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-primary tracking-tight hover:opacity-90 transition-opacity">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Paintbrush className="w-5 h-5" />
            </div>
            DonCastro Galleria
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Button className="rounded-full px-6" onClick={() => setLocation("/contact") }>
              Join Us
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
              <SheetContent>
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-serif font-bold mb-4">
              <Paintbrush className="w-5 h-5" />
              DonCastro Galleria
            </div>
            <p className="opacity-80 leading-relaxed max-w-xs">
              Healing through art. A mobile art therapy unit transforming mental health support through creative expression, accessibility, and community care.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><Link href="/about" className="hover:opacity-100">About</Link></li>
              <li><Link href="/collections" className="hover:opacity-100">Collections</Link></li>
              <li><Link href="/services" className="hover:opacity-100">Services</Link></li>
              <li><Link href="/gallery" className="hover:opacity-100">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>KCA University, Nairobi</li>
              <li>P.O.Box 20355-00200</li>
              <li>Tel: +254113096179</li>
              <li>fidelcastro6403@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-foreground/20 text-center opacity-60 text-sm">
          © {new Date().getFullYear()} DonCastro Galleria. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
