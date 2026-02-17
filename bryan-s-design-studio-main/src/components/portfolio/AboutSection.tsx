import { SectionWrapper, SectionTitle, FadeIn } from "./AnimationUtils";

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <SectionTitle>Professional Summary</SectionTitle>
      <FadeIn>
        <div className="bg-card rounded-xl p-8 md:p-10 border border-border glow-border">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Final-year B.E. Computer Science student with hands-on experience in
            UI & UX development, frontend technologies, and data visualization.
            Skilled in building clean, user-friendly interfaces using HTML, CSS,
            JavaScript, and visualization tools such as Power BI and Streamlit.
            Interested in working on AI-driven products and intuitive user
            experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Thiruvallur, Tamil Nadu", "B.E. CSE 2026", "CGPA 7.92/10"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-mono bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default AboutSection;
