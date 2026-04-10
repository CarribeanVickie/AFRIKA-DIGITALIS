import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-learning.jpg";
import { BookOpen, Users, Globe, Heart, ArrowRight, CheckCircle } from "lucide-react";

const stats = [
  { value: "50K+", label: "Students Reached" },
  { value: "200+", label: "Schools Onboarded" },
  { value: "12", label: "African Countries" },
  { value: "98%", label: "Teacher Satisfaction" },
];

const features = [
  {
    icon: BookOpen,
    title: "K-12 Curriculum",
    description: "Structured, standards-aligned content for primary and secondary education across Africa.",
  },
  {
    icon: Heart,
    title: "Inclusive Learning",
    description: "Accessible tools designed for learners with cognitive disabilities and diverse needs.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Content available in multiple African languages for truly accessible education.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built with teachers, parents, and education experts across the continent.",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-gradient relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="container relative py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              Pan-African Education Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Reimagining education access across Africa
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
              Structured, inclusive digital learning that empowers every student — including those with cognitive disabilities — to thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Get Started <ArrowRight className="ml-1 h-5 w-5" /></Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/partners">Partner With Us</Link>
              </Button>
            </div>
          </div>
          <div className="animate-fade-up delay-200">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
              <img
                src={heroImage}
                alt="African students learning together with tablets in an inclusive classroom"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-card border-b border-border" aria-label="Key statistics">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center animate-count-up delay-${(i + 1) * 100}`}>
              <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 md:py-28" aria-label="Features">
      <div className="container">
        <SectionHeading
          tag="Why Afrika Digitalis"
          title="Education built for every learner"
          description="Our platform combines structured curriculum, accessibility, and technology to create learning experiences that work for all."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="hero-gradient py-20" aria-label="Call to action">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Ready to transform education in your community?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Join schools, NGOs, and governments across Africa building inclusive learning systems.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
