import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Globe, Landmark, GraduationCap, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Schools & School Systems",
    description: "Public and private K-12 institutions adopting digital curriculum and inclusive learning tools.",
    examples: ["Lagos State Schools", "Nairobi Academy Network", "Cape Town Digital Schools Initiative"],
  },
  {
    icon: Globe,
    title: "NGOs & Foundations",
    description: "Non-profit organizations focused on education equity, disability inclusion, and youth development.",
    examples: ["Education First Africa", "Inclusive Futures Foundation", "Pan-African Learning Network"],
  },
  {
    icon: Landmark,
    title: "Government Partners",
    description: "National and regional education ministries implementing digital learning at scale.",
    examples: ["Ministry of Education, Kenya", "Ghana Education Service", "Rwanda Digital Transformation Office"],
  },
  {
    icon: GraduationCap,
    title: "Education Organizations",
    description: "Curriculum developers, research institutions, and education technology providers.",
    examples: ["African Curriculum Alliance", "EdTech Hub Africa", "UNICEF Education Division"],
  },
];

const Partners = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          tag="Partners"
          title="Building together across Africa"
          description="We work with schools, NGOs, governments, and education organizations to bring inclusive digital learning to every community."
        />
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {categories.map((c) => (
            <div key={c.title} className="bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                <c.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{c.description}</p>
              <ul className="space-y-2">
                {c.examples.map((e) => (
                  <li key={e} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="hero-gradient py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4 text-balance">Become a Partner</h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          Whether you're a school, NGO, or government body — let's build inclusive education systems together.
        </p>
        <Button variant="gold" size="lg" asChild>
          <Link to="/contact">Get in Touch <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Partners;
