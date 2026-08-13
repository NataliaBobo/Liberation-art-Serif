import React from "react";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  Users,
  HeartHandshake,
  CalendarDays,
  Clock3,
  MapPin,
  Pencil,
  Trash2,
  Plus,
  X,
  LogOut,
} from "lucide-react";
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

interface Service {
  title: string;
  desc: string;
  imageUrl?: string;
  iconName: string;
}

interface EventItem {
  id: string;
  title: string;
  badge: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  venueDescription: string;
  description: string;
  cost: string;
  spots: string;
  activities: string[];
}

const defaultEvents: EventItem[] = [
  {
    id: "wellness-festival-art-nature",
    title: "Wellness Festival Art & Nature",
    badge: "Festival",
    date: "15 Feb 2026",
    time: "9:00am - 5:00pm",
    location: "John Michuki Memorial Park",
    imageUrl:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Nature-filled spaces like this are naturally restorative, helping attendees feel grounded, refreshed, and more present through art and movement.",
    description:
      "A restorative outdoor gathering blending art, nature, mindfulness, and community connection in a joyful celebration of wellbeing.",
    cost: "Free",
    spots: "100 spots",
    activities: ["Live Painting", "Nature works", "Yoga sessions"],
  },
  {
    id: "outdoor-painting-workshop",
    title: "Outdoor Painting Workshop",
    badge: "Workshop",
    date: "22nd Feb 2026",
    time: "10:00am - 7:00pm",
    location: "Nairobi Adventures",
    imageUrl:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Creative outdoor spaces invite gentle focus, reduce stress, and help people reconnect with themselves through color, breath, and observation.",
    description:
      "Express your emotions through colors and brushstrokes in this guided outdoor painting session surrounded by nature.",
    cost: "Ksh 500",
    spots: "30 spots",
    activities: ["Art therapy", "Painting"],
  },
  {
    id: "mindfulness-art-retreat",
    title: "Mindfulness & Art Retreat",
    badge: "Festival",
    date: "Not specified",
    time: "8:00am - 6:00pm",
    location: "Lake Naivasha",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Lakefront settings are deeply therapeutic because they slow the pace of life, encourage reflection, and support nervous system regulation.",
    description:
      "A peaceful, restorative escape that blends creativity, reflection, and stillness for a deeper sense of balance and renewal.",
    cost: "Ksh 2,500",
    spots: "25 slots",
    activities: ["Art session", "Journaling", "Meditation"],
  },
  {
    id: "healing-drum-circle",
    title: "Healing Drum Circle",
    badge: "Workshop",
    date: "15th March 2026",
    time: "4:00pm - 7:00pm",
    location: "City Park",
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    venueDescription:
      "Drumming in a welcoming outdoor setting creates rhythm, emotional release, and connection that can ease stress and support healing.",
    description:
      "A grounding rhythm experience that invites participants to release stress, reconnect with their breath, and find calm through shared drumming and sound healing.",
    cost: "Ksh 300",
    spots: "40 spots",
    activities: ["Drumming", "Community Bonding", "Sound Healing"],
  },
  {
    id: "safari-art-experience",
    title: "Safari Art Experience",
    badge: "Festival",
    date: "Open for bookings",
    time: "8:00am - 9:00pm",
    location: "Maasai Mara National Park",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvLZk5cgYsLWX3g6iVS6796uyXmB6XykiyLUREwY4WxqqXzwKpbTwFdQ&s=10",
    venueDescription:
      "A wildlife-inspired creative environment where participants can connect with nature through observation, storytelling and expressive art.",
    description:
      "A vibrant wildlife-inspired creative retreat where participants connect with the landscape through observation, storytelling, and expressive art.",
    cost: "Ksh 8,000",
    spots: "30 spots",
    activities: ["Handprinting observations", "Bush Sketching", "Painting"],
  },
];

export default function Admin() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // =====================================================
  // SERVICE STATES
  // =====================================================

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [iconName, setIconName] = React.useState("Gift");

  // =====================================================
  // EVENT STATES
  // =====================================================

  const [events, setEvents] = React.useState<EventItem[]>([]);
  const [editingEventId, setEditingEventId] =
    React.useState<string | null>(null);

  const [eventTitle, setEventTitle] = React.useState("");
  const [eventBadge, setEventBadge] = React.useState("Workshop");
  const [eventDate, setEventDate] = React.useState("");
  const [eventTime, setEventTime] = React.useState("");
  const [eventLocation, setEventLocation] = React.useState("");
  const [eventImageUrl, setEventImageUrl] = React.useState("");
  const [eventVenueDescription, setEventVenueDescription] =
    React.useState("");
  const [eventDescription, setEventDescription] =
    React.useState("");
  const [eventCost, setEventCost] = React.useState("");
  const [eventSpots, setEventSpots] = React.useState("");
  const [eventActivities, setEventActivities] =
    React.useState("");

  // =====================================================
  // ADMIN AUTHENTICATION
  // =====================================================

  React.useEffect(() => {
    if (!isAdminLoggedIn()) {
      setLocation("/admin-login");
    }
  }, [setLocation]);

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    logoutAdmin();

    toast({
      title: "Logged out",
      description: "You have been logged out of the admin account.",
    });

    setLocation("/admin-login");
  };

  // =====================================================
  // LOAD EVENTS
  // =====================================================

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const savedEvents = localStorage.getItem("doncastro_events");

    if (savedEvents) {
      try {
        const parsed = JSON.parse(savedEvents);

        if (Array.isArray(parsed)) {
          setEvents(parsed);
          return;
        }
      } catch (error) {
        console.error("Failed to load events:", error);
      }
    }

    setEvents(defaultEvents);

    localStorage.setItem(
      "doncastro_events",
      JSON.stringify(defaultEvents)
    );
  }, []);

  // =====================================================
  // SAVE EVENTS
  // =====================================================

  const saveEvents = (updatedEvents: EventItem[]) => {
    setEvents(updatedEvents);

    localStorage.setItem(
      "doncastro_events",
      JSON.stringify(updatedEvents)
    );
  };

  // =====================================================
  // ADD SERVICE
  // =====================================================

  const handleAddProduct = () => {
    if (!title.trim() || !description.trim()) {
      toast({
        title: "Missing fields",
        description:
          "Please provide a title and description.",
      });

      return;
    }

    const existing = localStorage.getItem(
      "doncastro_custom_services"
    );

    const list: Service[] = existing
      ? JSON.parse(existing)
      : [];

    list.push({
      title: title.trim(),
      desc: description.trim(),
      imageUrl: imageUrl.trim(),
      iconName,
    });

    localStorage.setItem(
      "doncastro_custom_services",
      JSON.stringify(list)
    );

    const addedTitle = title.trim();

    setTitle("");
    setDescription("");
    setImageUrl("");
    setIconName("Gift");

    toast({
      title: "Service added",
      description: `${addedTitle} is now available on the services page.`,
    });
  };

  // =====================================================
  // CLEAR EVENT FORM
  // =====================================================

  const clearEventForm = () => {
    setEditingEventId(null);

    setEventTitle("");
    setEventBadge("Workshop");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventImageUrl("");
    setEventVenueDescription("");
    setEventDescription("");
    setEventCost("");
    setEventSpots("");
    setEventActivities("");
  };

  // =====================================================
  // EDIT EVENT
  // =====================================================

  const editEvent = (event: EventItem) => {
    setEditingEventId(event.id);

    setEventTitle(event.title);
    setEventBadge(event.badge);
    setEventDate(event.date);
    setEventTime(event.time);
    setEventLocation(event.location);
    setEventImageUrl(event.imageUrl);
    setEventVenueDescription(event.venueDescription);
    setEventDescription(event.description);
    setEventCost(event.cost);
    setEventSpots(event.spots);
    setEventActivities(event.activities.join(", "));

    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  // =====================================================
  // ADD OR UPDATE EVENT
  // =====================================================

  const handleSaveEvent = () => {
    if (
      !eventTitle.trim() ||
      !eventDate.trim() ||
      !eventTime.trim() ||
      !eventLocation.trim() ||
      !eventDescription.trim()
    ) {
      toast({
        title: "Missing fields",
        description:
          "Please provide the event title, date, time, location and description.",
      });

      return;
    }

    const activities = eventActivities
      .split(",")
      .map((activity) => activity.trim())
      .filter(Boolean);

    // UPDATE EXISTING EVENT
    if (editingEventId) {
      const updatedEvents = events.map((event) => {
        if (event.id !== editingEventId) {
          return event;
        }

        return {
          ...event,
          title: eventTitle.trim(),
          badge: eventBadge.trim() || "Workshop",
          date: eventDate.trim(),
          time: eventTime.trim(),
          location: eventLocation.trim(),
          imageUrl: eventImageUrl.trim(),
          venueDescription:
            eventVenueDescription.trim(),
          description: eventDescription.trim(),
          cost: eventCost.trim() || "Free",
          spots: eventSpots.trim() || "Open",
          activities,
        };
      });

      saveEvents(updatedEvents);

      toast({
        title: "Event updated",
        description: `${eventTitle.trim()} has been updated successfully.`,
      });

      clearEventForm();

      return;
    }

    // CREATE NEW EVENT
    const newEvent: EventItem = {
      id: `custom-event-${Date.now()}`,
      title: eventTitle.trim(),
      badge: eventBadge.trim() || "Workshop",
      date: eventDate.trim(),
      time: eventTime.trim(),
      location: eventLocation.trim(),
      imageUrl: eventImageUrl.trim(),
      venueDescription:
        eventVenueDescription.trim(),
      description: eventDescription.trim(),
      cost: eventCost.trim() || "Free",
      spots: eventSpots.trim() || "Open",
      activities,
    };

    saveEvents([...events, newEvent]);

    toast({
      title: "Event added",
      description: `${eventTitle.trim()} has been added to the events page.`,
    });

    clearEventForm();
  };

  // =====================================================
  // DELETE EVENT
  // =====================================================

  const deleteEvent = (id: string) => {
    const event = events.find(
      (item) => item.id === id
    );

    if (!event) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${event.title}"?`
    );

    if (!confirmed) return;

    const updatedEvents = events.filter(
      (item) => item.id !== id
    );

    saveEvents(updatedEvents);

    if (editingEventId === id) {
      clearEventForm();
    }

    toast({
      title: "Event deleted",
      description: `${event.title} has been removed.`,
    });
  };

  return (
    <Layout>

      {/* =====================================================
          ADMIN HEADER
      ===================================================== */}

      <section className="relative min-h-[55vh] flex items-center pt-28 pb-16 bg-secondary/10 overflow-hidden">

        <div className="container mx-auto px-4 text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-4xl mx-auto"
          >

            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 border border-primary/20">
              Admin Support
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Admin Dashboard
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Manage services, events, bookings and event information.
            </p>

            {/* =====================================================
                ADMIN ACTION BUTTONS
            ===================================================== */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <Button
                size="lg"
                className="rounded-full px-8"
                onClick={() =>
                  setLocation("/bookings")
                }
              >
                Manage Bookings
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </Button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          SERVICE MANAGEMENT
      ===================================================== */}

      <section className="py-20 bg-background">

        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">

            {/* CREATE SERVICE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-3xl bg-card border border-border p-10 shadow-sm"
            >

              <h2 className="text-3xl font-bold mb-6">
                Create a New Service
              </h2>

              <div className="space-y-5">

                <div>

                  <label className="block text-sm font-medium mb-2">
                    Service title
                  </label>

                  <input
                    value={title}
                    onChange={(e) =>
                      setTitle(e.target.value)
                    }
                    className="w-full p-3 rounded-md border bg-background"
                    placeholder="Example: Sound Bath"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium mb-2">
                    Description
                  </label>

                  <textarea
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value)
                    }
                    className="w-full min-h-[120px] p-3 rounded-md border bg-background resize-vertical"
                    placeholder="Describe what the service offers."
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium mb-2">
                    Image URL
                  </label>

                  <input
                    value={imageUrl}
                    onChange={(e) =>
                      setImageUrl(e.target.value)
                    }
                    className="w-full p-3 rounded-md border bg-background"
                    placeholder="Optional image URL"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium mb-2">
                    Icon
                  </label>

                  <select
                    value={iconName}
                    onChange={(e) =>
                      setIconName(e.target.value)
                    }
                    className="w-full p-3 rounded-md border bg-background"
                  >

                    {iconOptions.map(
                      (option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      )
                    )}

                  </select>

                </div>

                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleAddProduct}
                >
                  Add Service
                </Button>

              </div>

            </motion.div>

            {/* ADMIN INFORMATION */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-3xl bg-card border border-border p-10 shadow-sm"
            >

              <div className="space-y-6">

                <div className="flex items-start gap-4">

                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <Users className="w-6 h-6" />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Administrator
                    </h3>

                    <p className="text-muted-foreground">
                      Fidel Castro
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Contact Info
                    </h3>

                    <p className="text-muted-foreground">
                      Tel/Whatsapp: +254113096179
                    </p>

                    <p className="text-muted-foreground">
                      Email: fidelcastro6403@gmail.com
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          EVENT MANAGEMENT
      ===================================================== */}

      <section className="py-20 bg-muted/30">

        <div className="container mx-auto px-4 max-w-6xl">

          <div className="mb-10">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <CalendarDays className="w-4 h-4" />
              Event Management
            </span>

            <h2 className="text-4xl font-bold mt-5">

              {editingEventId
                ? "Edit Event"
                : "Create New Event"}

            </h2>

            <p className="text-muted-foreground mt-2">
              Add, update or remove events displayed on the website.
            </p>

          </div>

          {/* EVENT FORM */}

          <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-sm">

            <div className="grid md:grid-cols-2 gap-6">

              {/* TITLE */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Event Title *
                </label>

                <input
                  value={eventTitle}
                  onChange={(e) =>
                    setEventTitle(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="Example: Art Therapy Workshop"
                />

              </div>

              {/* TYPE */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Event Type
                </label>

                <select
                  value={eventBadge}
                  onChange={(e) =>
                    setEventBadge(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                >

                  <option value="Workshop">
                    Workshop
                  </option>

                  <option value="Festival">
                    Festival
                  </option>

                  <option value="Event">
                    Event
                  </option>

                  <option value="Retreat">
                    Retreat
                  </option>

                </select>

              </div>

              {/* DATE */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Date *
                </label>

                <input
                  value={eventDate}
                  onChange={(e) =>
                    setEventDate(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="Example: 25 Aug 2026"
                />

              </div>

              {/* TIME */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Time *
                </label>

                <input
                  value={eventTime}
                  onChange={(e) =>
                    setEventTime(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="Example: 10:00am - 2:00pm"
                />

              </div>

              {/* LOCATION */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Location *
                </label>

                <input
                  value={eventLocation}
                  onChange={(e) =>
                    setEventLocation(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="Example: KCA University"
                />

              </div>

              {/* IMAGE */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Image URL
                </label>

                <input
                  value={eventImageUrl}
                  onChange={(e) =>
                    setEventImageUrl(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="https://..."
                />

              </div>

              {/* COST */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Cost
                </label>

                <input
                  value={eventCost}
                  onChange={(e) =>
                    setEventCost(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="Example: Ksh 500 or Free"
                />

              </div>

              {/* SPOTS */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Available Spots
                </label>

                <input
                  value={eventSpots}
                  onChange={(e) =>
                    setEventSpots(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="Example: 30 spots"
                />

              </div>

              {/* DESCRIPTION */}

              <div className="md:col-span-2">

                <label className="block text-sm font-medium mb-2">
                  Event Description *
                </label>

                <textarea
                  value={eventDescription}
                  onChange={(e) =>
                    setEventDescription(e.target.value)
                  }
                  className="w-full min-h-[130px] p-3 rounded-md border bg-background"
                  placeholder="Describe the event..."
                />

              </div>

              {/* VENUE DESCRIPTION */}

              <div className="md:col-span-2">

                <label className="block text-sm font-medium mb-2">
                  Venue Description
                </label>

                <textarea
                  value={eventVenueDescription}
                  onChange={(e) =>
                    setEventVenueDescription(e.target.value)
                  }
                  className="w-full min-h-[110px] p-3 rounded-md border bg-background"
                  placeholder="Describe the venue..."
                />

              </div>

              {/* ACTIVITIES */}

              <div className="md:col-span-2">

                <label className="block text-sm font-medium mb-2">
                  Activities
                </label>

                <input
                  value={eventActivities}
                  onChange={(e) =>
                    setEventActivities(e.target.value)
                  }
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="Example: Painting, Journaling, Meditation"
                />

                <p className="text-xs text-muted-foreground mt-2">
                  Separate activities with commas.
                </p>

              </div>

            </div>

            {/* EVENT FORM BUTTONS */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Button
                size="lg"
                className="flex-1"
                onClick={handleSaveEvent}
              >

                {editingEventId ? (
                  <>
                    <Pencil className="w-5 h-5 mr-2" />
                    Update Event
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 mr-2" />
                    Add Event
                  </>
                )}

              </Button>

              {editingEventId && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={clearEventForm}
                >
                  <X className="w-5 h-5 mr-2" />
                  Cancel
                </Button>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXISTING EVENTS
      ===================================================== */}

      <section className="py-20 bg-background">

        <div className="container mx-auto px-4 max-w-6xl">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-4xl font-bold">
                Manage Events
              </h2>

              <p className="text-muted-foreground mt-2">
                {events.length} event
                {events.length !== 1
                  ? "s"
                  : ""}{" "}
                available
              </p>

            </div>

          </div>

          {events.length === 0 ? (

            <div className="text-center py-16 border-2 border-dashed rounded-3xl">

              <CalendarDays className="w-12 h-12 mx-auto text-muted-foreground mb-4" />

              <h3 className="text-xl font-bold">
                No Events
              </h3>

              <p className="text-muted-foreground mt-2">
                Create your first event above.
              </p>

            </div>

          ) : (

            <div className="grid gap-6 md:grid-cols-2">

              {events.map((event) => (

                <motion.div
                  key={event.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="rounded-3xl bg-card border border-border overflow-hidden shadow-sm"
                >

                  {/* EVENT IMAGE */}

                  {event.imageUrl && (
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-52 object-cover"
                    />
                  )}

                  <div className="p-6">

                    {/* BADGE */}

                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      {event.badge}
                    </span>

                    {/* TITLE */}

                    <h3 className="text-2xl font-bold font-serif">
                      {event.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {event.description}
                    </p>

                    {/* EVENT DETAILS */}

                    <div className="mt-6 space-y-3 text-sm">

                      <div className="flex items-center gap-3">

                        <CalendarDays className="w-5 h-5 text-primary" />

                        <span>
                          {event.date}
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <Clock3 className="w-5 h-5 text-primary" />

                        <span>
                          {event.time}
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <MapPin className="w-5 h-5 text-primary" />

                        <span>
                          {event.location}
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <HeartHandshake className="w-5 h-5 text-primary" />

                        <span>
                          {event.spots}
                        </span>

                      </div>

                    </div>

                    {/* COST */}

                    <div className="mt-5 rounded-2xl bg-primary/5 border border-primary/20 p-4">

                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Cost
                      </p>

                      <p className="text-xl font-bold text-primary mt-1">
                        {event.cost}
                      </p>

                    </div>

                    {/* ACTIVITIES */}

                    {event.activities.length > 0 && (

                      <div className="mt-5 flex flex-wrap gap-2">

                        {event.activities.map(
                          (activity) => (
                            <span
                              key={activity}
                              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                            >
                              {activity}
                            </span>
                          )
                        )}

                      </div>

                    )}

                    {/* ACTION BUTTONS */}

                    <div className="flex gap-3 mt-7">

                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() =>
                          editEvent(event)
                        }
                      >

                        <Pencil className="w-4 h-4 mr-2" />

                        Edit

                      </Button>

                      <Button
                        variant="destructive"
                        className="flex-1"
                        onClick={() =>
                          deleteEvent(event.id)
                        }
                      >

                        <Trash2 className="w-4 h-4 mr-2" />

                        Delete

                      </Button>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          )}

        </div>

      </section>

    </Layout>
  );
}