import React from "react";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { loginAdmin, isAdminLoggedIn } from "@/lib/auth";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (isAdminLoggedIn()) {
      setLocation("/admin");
    }
  }, [setLocation]);

  const handleSubmit = () => {
    if (!username.trim() || !password.trim()) {
      toast({ title: "Missing fields", description: "Enter username and password." });
      return;
    }

    if (loginAdmin(username.trim(), password.trim())) {
      toast({ title: "Logged in", description: "Admin access granted." });
      setLocation("/admin");
    } else {
      toast({ title: "Login failed", description: "Incorrect username or password." });
    }
  };

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-16 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto rounded-3xl bg-card border border-border p-10 shadow-sm"
          >
            <h1 className="text-4xl font-bold mb-6">Admin Login</h1>
            <p className="text-muted-foreground mb-8">
              Enter your credentials to manage the services page and booking workflow.
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-md border bg-background"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex gap-3">
                <Button className="w-full" onClick={handleSubmit}>
                  Sign in
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setLocation("/")}>
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
