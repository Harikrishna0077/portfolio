import { SectionWrapper, SectionTitle, FadeIn } from "./AnimationUtils";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="bg-surface">
      <SectionTitle>Get in Touch</SectionTitle>
      <FadeIn>
        <div className="bg-card rounded-xl p-8 md:p-10 border border-border glow-border text-center">
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I'm currently seeking opportunities in software development, UI/UX
            design, and data visualization. Let's connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="mailto:harikrishnavasu77@gmail.com"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
            >
              harikrishnavasu77@gmail.com
            </a>
            <a
              href="tel:+919600949188"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors w-full sm:w-auto text-center"
            >
              +91 9600949188
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/harikrishna-v-a17232279"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Languages */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              Languages
            </p>
            <div className="flex justify-center gap-3">
              {["English", "Tamil", "Telugu"].map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default ContactSection;
