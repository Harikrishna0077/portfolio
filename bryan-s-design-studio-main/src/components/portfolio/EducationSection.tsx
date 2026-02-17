import { SectionWrapper, SectionTitle, FadeIn } from "./AnimationUtils";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "R.M.D Engineering College",
    period: "2022–2026",
    score: "CGPA: 7.92 / 10",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Shree Niketan MR Hr Sec School",
    period: "2021–2022",
    score: "Score: 73%",
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "Sri Sathiya Sai Matric School",
    period: "2019–2020",
    score: "Score: 98.4%",
  },
];

const certifications = [
  "Infosys Springboard – Python Foundation",
  "Infosys Springboard – Power BI Data Analytics",
  "Infosys Springboard – Cloud Computing",
  "Oracle – Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
  "Oracle – MySQL Implement Certified",
  "NPTEL – Programming in Java",
  "NPTEL – Distributed Systems and Cloud Computing",
  "NPTEL – Edge Computing",
];

const achievements = [
  "Winner – Coding Competition at CIT Symposium",
  "Team Lead – Infosys Springboard Internship Project (AQI Visualization)",
  "Student Peer Evaluator – SIMATS Engineering",
];

const EducationSection = () => {
  return (
    <SectionWrapper id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="grid gap-4 mb-16">
        {education.map((edu, i) => (
          <FadeIn key={edu.degree} delay={i * 0.5}>
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.institution}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-mono text-muted-foreground">
                  {edu.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {edu.score}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <SectionTitle>Certifications</SectionTitle>
      <div className="grid md:grid-cols-2 gap-3 mb-16">
        {certifications.map((cert, i) => (
          <FadeIn key={cert} delay={i * 0.3}>
            <div className="bg-card rounded-lg p-4 border border-border text-sm text-muted-foreground flex items-start gap-3">
              <span className="text-primary mt-0.5 shrink-0">✦</span>
              {cert}
            </div>
          </FadeIn>
        ))}
      </div>

      <SectionTitle>Achievements</SectionTitle>
      <div className="grid gap-3">
        {achievements.map((ach, i) => (
          <FadeIn key={ach} delay={i * 0.5}>
            <div className="bg-card rounded-lg p-5 border border-border flex items-center gap-4">
              <span className="text-2xl">🏆</span>
              <span className="text-foreground font-medium">{ach}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
