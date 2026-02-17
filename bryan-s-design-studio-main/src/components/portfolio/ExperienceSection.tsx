import { SectionWrapper, SectionTitle, FadeIn } from "./AnimationUtils";

const experiences = [
  {
    role: "Cloud Computing Intern",
    company: "Trillion Thoughts Technologies LLP",
    duration: "Jun 2024 – Jul 2024",
    description:
      "Configured and optimized AWS cloud environments to support successful project delivery and gain practical real-world experience.",
  },
  {
    role: "Data Visualization Intern",
    company: "Infosys Springboard",
    duration: "Nov 2024 – Jan 2025",
    description:
      "Designed and developed an AQI dashboard using Power BI and Streamlit. Performed data collection, preprocessing, KPI creation, and reporting for data-driven insights.",
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="bg-surface">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.role} delay={i * 0.5}>
              <div className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
