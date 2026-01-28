import React from "react";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, FileText, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface Booking {
  id: string;
  serviceTitle: string;
  name: string;
  email: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: string;
}

export default function Bookings() {
  const [, setLocation] = useLocation();
  const [bookings, setBookings] = React.useState<Booking[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem("doncastro_bookings");
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookings", e);
      }
    }
  }, []);

  const deleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem("doncastro_bookings", JSON.stringify(updated));
  };

  return (
    <Layout>
      <section className="py-24 pt-32 min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <Button 
                variant="ghost" 
                className="mb-4 -ml-4 text-muted-foreground hover:text-primary"
                onClick={() => setLocation("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-4xl font-bold font-serif">Your Bookings</h1>
              <p className="text-muted-foreground mt-2">Manage your scheduled art therapy sessions and wellness workshops.</p>
            </div>
            <div className="bg-primary/10 px-6 py-3 rounded-2xl border border-primary/20">
              <span className="text-primary font-bold text-2xl">{bookings.length}</span>
              <span className="text-primary/80 ml-2 font-medium">Scheduled Sessions</span>
            </div>
          </div>

          {bookings.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-card rounded-3xl border-2 border-dashed border-muted-foreground/20"
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-muted-foreground/40" />
              </div>
              <h2 className="text-2xl font-bold mb-2">No Bookings Found</h2>
              <p className="text-muted-foreground mb-8">You haven't scheduled any sessions yet. Ready to start your creative journey?</p>
              <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/")}>
                Explore Services
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((booking, index) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 bg-primary p-8 text-primary-foreground flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        <h3 className="text-2xl font-bold font-serif mb-2 relative z-10">{booking.serviceTitle}</h3>
                        <div className="flex items-center gap-2 opacity-90 relative z-10">
                          <Calendar className="w-4 h-4" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-90 mt-1 relative z-10">
                          <Clock className="w-4 h-4" />
                          <span>{booking.time}</span>
                        </div>
                      </div>
                      <CardContent className="flex-1 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <User className="w-5 h-5 text-primary mt-0.5" />
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Client Name</p>
                                <p className="font-semibold text-lg">{booking.name}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Mail className="w-5 h-5 text-primary mt-0.5" />
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</p>
                                <p className="font-medium">{booking.email}</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <FileText className="w-5 h-5 text-primary mt-0.5" />
                              <div className="flex-1">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Notes</p>
                                <p className="text-sm text-muted-foreground italic leading-relaxed">
                                  {booking.notes || "No additional notes provided."}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 pt-6 border-t flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                            Booked on {new Date(booking.createdAt).toLocaleDateString()}
                          </span>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            variant="ghost"
                            className="text-destructive hover:bg-destructive/10 rounded-full"
                            onClick={() => deleteBooking(booking.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Cancel Booking
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
