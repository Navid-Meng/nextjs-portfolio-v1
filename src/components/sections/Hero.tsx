import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Scene } from "../three/Scene";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
      <Scene />
      <div className="space-y-6 animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-gradient">{t('hero.title')}</span>
          <br />{t('hero.subtitle')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg">
            {t('hero.cta.projects')}
          </Button>
          <Button variant="outline" size="lg">
            {t('hero.cta.contact')}
          </Button>
        </div>
        <div className="flex gap-4 justify-center pt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:your.email@example.com">
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 animate-bounce"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </section>
  );
}