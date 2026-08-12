import React from "react";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CalendarDays, Clock3, MapPin, Sparkles, HeartHandshake } from "lucide-react";

const wellnessEvents = [
  {
    title: "Live Art Sessions",
    date: "Open to all",
    time: "Flexible sessions",
    location: "Community spaces & studios",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "These spaces are intentionally calming and expressive, helping people slow down, reconnect with their emotions, and feel safer while creating.",
    description: "Hands-on painting, drawing, and collage experiences that invite people to express emotions, reflect, and heal through creative action.",
  },
  {
    title: "Mindfulness Activities",
    date: "Weekly guided moments",
    time: "Short calming sessions",
    location: "On-site or online",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "This environment supports breathwork and grounding, helping participants settle the nervous system and create space for inner calm and clarity.",
    description: "Breathwork, grounding exercises, and reflective practices designed to reduce stress and help participants reconnect with their inner calm.",
  },
  {
    title: "Music & Performance",
    date: "Live community gatherings",
    time: "Energetic and uplifting",
    location: "Festival spaces and open-air events",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Open-air performance spaces encourage release, joy, and collective healing through rhythm, movement, and shared expression.",
    description: "Creative performances, spoken word, and music-led experiences that encourage joy, release, and collective healing.",
  },
  {
    title: "Community Circles",
    date: "Safe and welcoming",
    time: "Conversation-based gatherings",
    location: "Local partner locations",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "These intimate gathering spaces nurture belonging and emotional safety, allowing people to process, listen, and reconnect with one another.",
    description: "Supportive discussion circles that foster belonging, storytelling, and emotional connection through shared human experience.",
  },
];

const upcomingEvents = [
  {
    title: "Wellness Festival Art & Nature",
    badge: "Festival",
    date: "15 Feb 2026",
    time: "9:00am - 5:00pm",
    location: "John Michuki Memorial Park",
    imageUrl: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Nature-filled spaces like this are naturally restorative, helping attendees feel grounded, refreshed, and more present through art and movement.",
    cost: "Free",
    spots: "100 spots",
    activities: ["Live Painting", "Nature works", "Yoga sessions"],
    description:
      "A restorative outdoor gathering blending art, nature, mindfulness, and community connection in a joyful celebration of wellbeing.",
  },
  {
    title: "Outdoor Painting Workshop",
    badge: "Workshop",
    date: "22nd Feb 2026",
    time: "10:00am - 7:00pm",
    location: "Nairobi Adventures",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Creative outdoor spaces invite gentle focus, reduce stress, and help people reconnect with themselves through color, breath, and observation.",
    cost: "Ksh 500",
    spots: "30 spots",
    activities: ["Art therapy", "Painting"],
    description:
      "Express your emotions through colors and brushstrokes in this guided outdoor painting session surrounded by nature.",
  },
  {
    title: "Mindfulness & Art Retreat",
    badge: "Festival",
    date: "Not specified",
    time: "8:00am - 6:00pm",
    location: "Lake Naivasha",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Lakefront settings are deeply therapeutic because they slow the pace of life, encourage reflection, and support nervous system regulation.",
    cost: "Ksh 2,500",
    spots: "25 slots",
    activities: ["Art session", "Journaling", "Meditation"],
    description:
      "A peaceful, restorative escape that blends creativity, reflection, and stillness for a deeper sense of balance and renewal.",
  },
  {
    title: "Healing Drum Circle",
    badge: "Workshop",
    date: "15th March 2026",
    time: "4:00pm - 7:00pm",
    location: "City Park",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Drumming in a welcoming outdoor setting creates rhythm, emotional release, and connection that can ease stress and support healing.",
    cost: "Ksh 300",
    spots: "40 spots",
    activities: ["Drumming", "Community Bonding", "Sound Healing"],
    description:
      "A grounding rhythm experience that invites participants to release stress, reconnect with their breath, and find calm through shared drumming and sound healing.",
  },
];

export default function Events() {
  const [, setLocation] = useLocation();
  const [expandedVenue, setExpandedVenue] = React.useState<Record<string, boolean>>({});

  return (
    <Layout>
      <section className="py-28 pt-36 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              Coming Soon!
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
              Wellness Festivals and Events
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Immersive celebration of art, healing and community connection. We create spaces where people can breathe, reflect, and reconnect with themselves and their communities.
            </p>
          </div>

          <div className="mb-8 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">What to Expect!</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {wellnessEvents.map((event, index) => {
              const isExpanded = !!expandedVenue[event.title];

              return (
                <motion.article
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[2rem] border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      Event
                    </span>
                    <HeartHandshake className="w-5 h-5 text-primary" />
                  </div>

                  <h2 className="text-2xl font-bold font-serif mb-4">{event.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock3 className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <button
                      type="button"
                      onClick={() => setExpandedVenue((prev) => ({ ...prev, [event.title]: !prev[event.title] }))}
                      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-border bg-background p-3 text-left text-sm text-muted-foreground transition hover:border-primary/50"
                    >
                      <span className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        {event.location}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        {isExpanded ? "Hide" : "View"}
                      </span>
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 rounded-2xl border border-border bg-background p-3">
                      <img
                        src={event.imageUrl}
                        alt={event.location}
                        className="mb-3 h-36 w-full rounded-xl object-cover"
                      />
                      <p className="text-sm leading-relaxed text-muted-foreground">{event.venueDescription}</p>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>

          <div className="mb-8 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Upcoming Events!</h2>
          </div>

          {upcomingEvents.map((event, index) => {
            const isExpanded = !!expandedVenue[event.title];

            return (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[2rem] border border-primary/20 bg-card p-8 shadow-sm mb-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {event.badge}
                    </div>
                    <h3 className="text-1xl md:text-4xl font-italics font-serif mb-3">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{event.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {event.activities.map((activity) => (
                        <span
                          key={activity}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-center min-w-[170px]">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Cost</div>
                    <div className="mt-2 text-3xl font-bold font-serif text-primary">{event.cost}</div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                    <Clock3 className="w-4 h-4 text-primary" />
                    {event.time}
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedVenue((prev) => ({ ...prev, [event.title]: !prev[event.title] }))}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-background p-4 border border-border text-left text-sm text-muted-foreground transition hover:border-primary/50"
                  >
                    <span className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {isExpanded ? "Hide" : "View"}
                    </span>
                  </button>
                  <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                    <HeartHandshake className="w-4 h-4 text-primary" />
                    {event.spots}
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-6 rounded-2xl border border-border bg-background p-4">
                    <img
                      src={event.imageUrl}
                      alt={event.location}
                      className="mb-4 h-48 w-full rounded-2xl object-cover"
                    />
                    <p className="text-sm leading-relaxed text-muted-foreground">{event.venueDescription}</p>
                  </div>
                )}

                <div className="mt-8 flex justify-start">
                  <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/join")}>
                    Register Now
                  </Button>
                </div>
              </motion.article>
            );
          })}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-secondary/20 bg-card p-8 shadow-sm mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="mb-4 inline-flex rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-foreground">
                  Workshop
                </div>
                <h3 className="text-1xl md:text-4xl font-italics font-serif mb-3">Outdoor Painting Workshop</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Express your emotions through colors and brushstrokes in this guided outdoor painting session surrounded by nature.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Art therapy",
                    "Painting"
                  ].map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-center min-w-[170px]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Cost</div>
                <div className="mt-2 text-3xl font-bold font-serif text-primary">Ksh 500</div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <CalendarDays className="w-4 h-4 text-primary" />
                22nd Feb 2026
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <Clock3 className="w-4 h-4 text-primary" />
                10:00am - 7:00pm
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                Nairobi Adventures
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <HeartHandshake className="w-4 h-4 text-primary" />
                30 spots
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background p-4">
              <img
                src="https://get2gether.co.ke/resources/assets/images/ngong_adventure_park_quests.jpg"
                alt="Nairobi Adventures"
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="mt-8 flex justify-start">
              <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/join")}>
                Register Now
              </Button>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-primary/20 bg-card p-8 shadow-sm mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Festival
                </div>
                <h3 className="text-1xl md:text-4xl font-italics font-serif mb-3">Mindfulness & Art Retreat</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  A peaceful, restorative escape that blends creativity, reflection, and stillness for a deeper sense of balance and renewal.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Art session",
                    "Journaling",
                    "Meditation"
                  ].map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-center min-w-[170px]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Cost</div>
                <div className="mt-2 text-3xl font-bold font-serif text-primary">Ksh 2,500</div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <CalendarDays className="w-4 h-4 text-primary" />
                Not specified
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <Clock3 className="w-4 h-4 text-primary" />
                8:00am - 6:00pm
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                Lake Naivasha
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <HeartHandshake className="w-4 h-4 text-primary" />
                25 slots
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background p-4">
              <img
                src="https://www.africarevealsafaris.com/wp-content/uploads/2024/12/flamingo-3816811_1280.jpg"
                alt="Lake Naivasha"
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="mt-8 flex justify-start">
              <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/join")}>
                Register Now
              </Button>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-primary/20 bg-card p-8 shadow-sm mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Workshop
                </div>
                <h3 className="text-1xl md:text-4xl font-italics font-serif mb-3">Healing Drum Circle</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  A grounding rhythm experience that invites participants to release stress, reconnect with their breath, and find calm through shared drumming and sound healing.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Drumming",
                    "Community Bonding",
                    "Sound Healing"
                  ].map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-center min-w-[170px]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Cost</div>
                <div className="mt-2 text-3xl font-bold font-serif text-primary">Ksh 300</div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <CalendarDays className="w-4 h-4 text-primary" />
                15th March 2026
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <Clock3 className="w-4 h-4 text-primary" />
                4:00pm - 7:00pm
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                City Park
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <HeartHandshake className="w-4 h-4 text-primary" />
                40 spots
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjg-AepOTfTChA0F4Rkjl00snpJNWJDZlW-uH4PT4pFaLxE1z0M_2UWJ_1&s=10"
                alt="City Park"
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="mt-8 flex justify-start">
              <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/join")}>
                Register Now
              </Button>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-primary/20 bg-card p-8 shadow-sm mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Festival
                </div>
                <h3 className="text-1xl md:text-4xl font-italics font-serif mb-3">Safari Art Experience</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  A vibrant wildlife-inspired creative retreat where participants connect with the landscape through observation, storytelling, and expressive art.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Handprinting observations",
                    "Bush Sketching",
                    "Painting"
                  ].map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-center min-w-[170px]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Cost</div>
                <div className="mt-2 text-3xl font-bold font-serif text-primary">Ksh 8,000</div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <CalendarDays className="w-4 h-4 text-primary" />
                Open for bookings
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <Clock3 className="w-4 h-4 text-primary" />
                8:00am - 9:00pm
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                Maasai Mara National Park
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background p-4 border border-border">
                <HeartHandshake className="w-4 h-4 text-primary" />
                30 spots
              </div>
            </div>

<div className="mt-6 rounded-2xl border border-border bg-background p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvLZk5cgYsLWX3g6iVS6796uyXmB6XykiyLUREwY4WxqqXzwKpbTwFdQ&s=10"
                alt="Maasai Mara National Park
                "
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="mt-8 flex justify-start">
              <Button size="lg" className="rounded-full px-8" onClick={() => setLocation("/join")}>
                Register Now
              </Button>
            </div>
          </motion.article>

          <div className="mt-12 rounded-[2rem] border border-primary/20 bg-gradient-to-r from-primary/10 via-background to-background p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Join the movement</p>
              <h3 className="text-3xl md:text-4xl font-bold font-serif">Bring wellness into your next celebration.</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="rounded-full px-6" onClick={() => setLocation("/join")}>
                Reserve a spot
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6" onClick={() => setLocation("/about")}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
