import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Heart, School, ArrowRight, CheckCircle } from "lucide-react";
import elekezaLogo from "@/assets/elekeza_logo.jpeg";

const solutions = [
  {
    icon: BookOpen,
    title: "K-12 Learning Platform",
    description: "Standards-aligned digital curriculum covering mathematics, science, literacy, and social studies for primary and secondary students.",
    features: ["Interactive lessons & assessments", "Progress tracking for teachers", "Offline-capable content", "Multi-language support"],
  },
  {
    icon: Heart,
    title: "Inclusive Learning Tools",
    description: "Purpose-built features for learners with cognitive disabilities, including simplified interfaces, visual aids, and structured repetition.",
    features: ["Adaptive difficulty levels", "Visual & audio learning aids", "Simplified navigation modes", "Caregiver progress dashboards"],
  },
  {
    icon: School,
    title: "School & NGO Integration",
    description: "Tools for schools, NGOs, and government programs to onboard students, manage classrooms, and track outcomes at scale.",
    features: ["Bulk student enrollment", "Classroom management tools", "Impact reporting & analytics", "API for partner integration"],
  },
];

const Solutions = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          tag="Solutions"
          title="Built for learners. Designed for scale."
          description="Three interconnected solutions that bring structured, accessible education to classrooms and homes across Africa."
        />
        <div className="mt-10 mb-14 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <img
              src={elekezaLogo}
              alt="Elekeza software solution logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Software Solution</p>
              <h3 className="text-2xl font-bold mt-2">Elekeza</h3>
              <p className="text-muted-foreground mt-2">
                Elekeza is our software platform focused on guided, inclusive digital learning delivery for
                schools, NGOs, and families.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-16 mt-12">
          {solutions.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-3 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/contact">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className={`bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <s.icon className="h-24 w-24 text-primary/20" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Solutions;
