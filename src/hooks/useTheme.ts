import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Helper function to get initial theme
const getInitialTheme = (): Theme => {
  // Check if we're on the client side
  if (typeof window !== 'undefined') {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // If no saved theme, check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
}

export const useTheme = create(
  persist<ThemeState>(
    (set) => ({
      theme: getInitialTheme(),
      setTheme: (theme) => {
        set({ theme });
        if (typeof window !== 'undefined') {
          const root = document.documentElement;
          if (theme === 'dark') {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
        }
      }
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        // When the store is rehydrated, ensure the theme class is applied
        if (state?.theme) {
          const root = document.documentElement;
          if (state.theme === 'dark') {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
        }
      }
    }
  )
);