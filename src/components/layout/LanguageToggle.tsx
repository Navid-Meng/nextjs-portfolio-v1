import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const FLAG_IMAGES = {
  en: "https://flagsapi.com/KH/flat/64.png",  // Replace with actual English flag image path
  km: "https://flagsapi.com/EN/flat/64.png",  // Replace with actual Khmer flag image path
};

const LANGUAGE_NAMES = {
  en: "English",
  km: "ខ្មែរ",
};

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Languages className="h-5 w-5" />
          <img
            src={FLAG_IMAGES[language]}
            alt={`Current language: ${LANGUAGE_NAMES[language]}`}
            className="absolute -right-1 -bottom-1 h-4 w-6 rounded-sm shadow-sm"
          />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code)}
            className="flex items-center gap-2"
          >
            <img
              src={FLAG_IMAGES[code]}
              alt={`${name} flag`}
              className="h-4 w-6 rounded-sm"
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