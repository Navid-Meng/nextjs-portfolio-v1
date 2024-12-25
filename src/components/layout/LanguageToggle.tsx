import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronDown } from "lucide-react";

type Language = 'en' | 'km';

const FLAG_IMAGES: Record<Language, string> = {
  en: "https://flagsapi.com/GB/flat/64.png",
  km: "https://flagsapi.com/KH/flat/64.png"
}

const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  km: "ខ្មែរ"
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <img 
            src={FLAG_IMAGES[language]}
            alt={`Current language: ${LANGUAGE_NAMES[language]}`} 
            className="rounded-sm"
          />
          <ChevronDown className="h-4 w-4 opacity-50" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className="flex items-center gap-2"
          >
            <img 
              src={FLAG_IMAGES[code as Language]} 
              alt={`${name} flag`} 
              className="h-5 w-5 rounded-sm"
            />
            <span className={language === code ? "font-bold" : ""}>
              {name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}