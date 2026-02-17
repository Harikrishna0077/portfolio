import { SectionWrapper, SectionTitle, FadeIn } from "./AnimationUtils";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "Java"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Django"],
  },
  {
    title: "UI/UX & Design",
    skills: [
      "UI/UX Design Principles",
      "Wireframing & Prototyping",
      "Responsive Design",
      "Figma",
      "Canva",
      "Photoshop",
      "Illustrator",
    ],
  },
  {
    title: "Data & Visualization",
    skills: ["Power BI", "Streamlit"],
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Oracle Cloud Infrastructure"],
  },
  {
    title: "DevOps Tools",
    skills: ["Git", "GitHub", "Jenkins", "Docker"],
  },
  {
    title: "Soft Skills",
    skills: ["Teamwork", "Leadership", "Communication", "Critical Thinking"],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="bg-surface">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.5}>
            <div className="bg-card rounded-xl p-6 border border-border h-full hover:glow-border transition-shadow duration-300">
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm bg-secondary text-secondary-foreground"
                  >
                    {skill}
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

export default SkillsSection;
