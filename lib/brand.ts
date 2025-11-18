export const brandConfig = {
  name: "Wormibox",
  tagline: "Solusi Digital Terpercaya untuk Bisnis Anda",
  description:
    "Kami adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif untuk membantu bisnis berkembang di era modern.",
  colors: {
    primary: {
      50: "hsl(210, 100%, 98%)",
      100: "hsl(210, 100%, 95%)",
      200: "hsl(210, 100%, 90%)",
      300: "hsl(210, 100%, 80%)",
      400: "hsl(210, 100%, 65%)",
      500: "hsl(210, 100%, 50%)", 
      600: "hsl(210, 100%, 40%)",
      700: "hsl(210, 100%, 30%)",
      800: "hsl(210, 100%, 20%)",
      900: "hsl(210, 100%, 10%)",
    },
    secondary: {
      50: "hsl(160, 100%, 98%)",
      100: "hsl(160, 100%, 95%)",
      200: "hsl(160, 100%, 90%)",
      300: "hsl(160, 100%, 80%)",
      400: "hsl(160, 100%, 65%)",
      500: "hsl(160, 100%, 50%)", // Brand secondary
      600: "hsl(160, 100%, 40%)",
      700: "hsl(160, 100%, 30%)",
      800: "hsl(160, 100%, 20%)",
      900: "hsl(160, 100%, 10%)",
    },
    accent: {
      50: "hsl(340, 100%, 98%)",
      100: "hsl(340, 100%, 95%)",
      200: "hsl(340, 100%, 90%)",
      300: "hsl(340, 100%, 80%)",
      400: "hsl(340, 100%, 65%)",
      500: "hsl(340, 100%, 60%)", // Brand accent
      600: "hsl(340, 100%, 50%)",
      700: "hsl(340, 100%, 40%)",
      800: "hsl(340, 100%, 30%)",
      900: "hsl(340, 100%, 20%)",
    },
  },

  fonts: {
    heading: ["Inter", "system-ui", "sans-serif"],
    body: ["Inter", "system-ui", "sans-serif"],
    mono: ["JetBrains Mono", "monospace"],
  },

  spacing: {
    section: "5rem",
    container: "1200px",
    gap: "2rem",
  },

  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },

  animation: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
    easing: {
      ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
};

export type BrandConfig = typeof brandConfig;
