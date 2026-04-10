import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutImage from "@/assets/about-impact.jpg";
import { Target, Eye, Lightbulb } from "lucide-react";

const values = [
  { icon: Eye, title: "Vision", text: "A continent where every learner — regardless of ability, location, or income — has access to structured, quality digital education." },
  { icon: Target, title: "Mission", text: "To build accessible, inclusive learning platforms that empower African students, teachers, and communities through technology." },
  { icon: Lightbulb, title: "Approach", text: "We combine structured curriculum design, WCAG-compliant accessibility standards, and culturally relevant content to meet learners where they are." },
];

const About = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          tag="About Us"
          title="African-led. Inclusive by design."
          description="Afrika Digitalis was founded on the belief that quality education is a right — not a privilege. We build systems that serve every learner."
        />
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="rounded-2xl overflow-hidden card-shadow">
            <img src={aboutImage} alt="Children smiling while learning with digital devices" loading="lazy" width={1280} height={720} className="w-full h-auto object-cover" />
          </div>
          <div className="space-y-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <v.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-muted py-20">
      <div className="container">
        <SectionHeading tag="Impact Goals" title="What we're building toward" />
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {[
            { metric: "1M+", goal: "Students with access to structured digital learning by 2028" },
            { metric: "25+", goal: "Countries with active school partnerships across Africa" },
            { metric: "100%", goal: "WCAG AA compliance across all learning modules" },
          ].map((g) => (
            <div key={g.metric} className="bg-card rounded-xl p-8 text-center card-shadow">
              <div className="text-4xl font-bold text-primary mb-2">{g.metric}</div>
              <p className="text-muted-foreground text-sm">{g.goal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
