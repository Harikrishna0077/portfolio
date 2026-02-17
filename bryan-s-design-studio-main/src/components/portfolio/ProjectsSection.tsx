import { SectionWrapper, SectionTitle, FadeIn } from "./AnimationUtils";

const projects = [
  {
    title: "Visual Communication for Paralyzed Patients",
    description:
      "Developed a blink-based communication system to distinguish intentional blinks and generate messages or voice alerts for paralyzed or MND patients.",
    tags: ["Python", "AI", "Accessibility", "Healthcare"],
  },
  {
    title: "Air Quality Index Visualization",
    description:
      "Implemented interactive dashboards using Power BI and Streamlit to analyze and visualize AQI data across regions for environmental awareness.",
    tags: ["Power BI", "Streamlit", "Data Visualization", "Python"],
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-8">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.5}>
            <div className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:glow-border transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                  →
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
