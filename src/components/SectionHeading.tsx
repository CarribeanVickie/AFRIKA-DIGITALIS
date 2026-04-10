interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ tag, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {tag && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-balance">{title}</h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto text-balance leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
