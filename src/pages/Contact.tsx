import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 48 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="Contact"
            title="Let's start a conversation"
            description="Whether you're a school, NGO, government partner, or parent — we'd love to hear from you."
          />
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl p-8 card-shadow">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Organization</Label>
                  <Input id="org" name="org" placeholder="School, NGO, or company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Inquiry Type</Label>
                  <select
                    id="type"
                    name="type"
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="school">School Enrollment</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Tell us how we can help..." />
                </div>
                <Button type="submit" size="lg" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"} <Send className="ml-1 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">hello@afrikadigitalis.org</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-1">Headquarters</h3>
                <p className="text-muted-foreground text-sm">Nairobi, Kenya<br />With teams across West & Southern Africa</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">+254 700 000 000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
