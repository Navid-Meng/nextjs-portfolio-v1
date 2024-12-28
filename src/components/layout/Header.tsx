import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/hooks/useLanguage";

export function Header() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary transition-all duration-300 ease-in-out hover:text-primary" />
            <span className="font-bold text-lg transition-all duration-300 ease-in-out hover:text-primary">
              MN
            </span>
          </div>
        </a>


        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => scrollToSection("about")}>
            {t('nav.about')}
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("projects")}>
            {t('nav.projects')}
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")}>
            {t('nav.contact')}
          </Button>
          <Button variant="default">{t('nav.resume')}</Button>
          <ThemeToggle />
          <LanguageToggle />
        </nav>

        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
}