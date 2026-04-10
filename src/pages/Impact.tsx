import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { TrendingUp, Users, GraduationCap, MapPin, School, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Students Actively Learning", description: "Across 12 African countries" },
  { icon: School, value: "200+", label: "Schools Onboarded", description: "Public and private institutions" },
  { icon: GraduationCap, value: "85%", label: "Learning Improvement", description: "Average student performance gain" },
  { icon: MapPin, value: "12", label: "Countries", description: "Active platform presence" },
  { icon: Award, value: "98%", label: "Teacher Satisfaction", description: "Among trained educators" },
  { icon: TrendingUp, value: "3x", label: "Engagement Increase", description: "Compared to traditional methods" },
];

const stories = [
  {
    quote: "For the first time, my daughter with autism can follow a structured lesson at her own pace. This platform changed our family's life.",
    author: "Amina K.",
    role: "Parent, Nairobi",
  },
  {
    quote: "The tools for classroom management and progress tracking let me focus on teaching instead of paperwork.",
    author: "Mr. Osei Mensah",
    role: "Teacher, Accra",
  },
  {
    quote: "We onboarded 15 rural schools in three months. The integration tools made it seamless.",
    author: "Dr. Fatou Diallo",
    role: "NGO Director, Dakar",
  },
];

const Impact = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          tag="Our Impact"
          title="Numbers that tell our story"
          description="Real results from real classrooms. Every metric represents students gaining access to education they deserve."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
              <div className="font-semibold text-sm mb-1">{s.label}</div>
              <p className="text-muted-foreground text-xs">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-20">
      <div className="container">
        <SectionHeading tag="Voices" title="Stories from the ground" />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {stories.map((s) => (
            <blockquote key={s.author} className="bg-card rounded-xl p-6 card-shadow">
              <p className="text-foreground italic leading-relaxed mb-4">"{s.quote}"</p>
              <footer>
                <cite className="not-italic">
                  <span className="font-semibold text-sm block">{s.author}</span>
                  <span className="text-muted-foreground text-xs">{s.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Impact;
