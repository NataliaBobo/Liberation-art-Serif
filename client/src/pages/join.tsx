import React from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Users, HeartHandshake } from "lucide-react";

const joinSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Join() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof joinSchema>>({
    resolver: zodResolver(joinSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof joinSchema>) {
    console.log(values);
    toast({
      title: "Request Sent",
      description: "Thanks — we'll be in touch about joining the mission.",
    });
    form.reset();
  }

  return (
    <Layout>
      <section className="relative min-h-[75vh] flex items-center pt-28 pb-16 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 border border-primary/20">
              Join DonCastro Galleria
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us in bringing art therapy and mental wellness to students and communities. Whether you want to volunteer, partner, or seek support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Tell us how you'd like to join — volunteer, partner, or receive support.
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
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-join">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-join-name" />
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
                          <Input placeholder="john@example.com" {...field} data-testid="input-join-email" />
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
                          <Textarea placeholder="How would you like to join?" className="min-h-[120px]" {...field} data-testid="textarea-join-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-lg py-6" data-testid="button-submit-join">
                    Send Request
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
