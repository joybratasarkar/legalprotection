// tailwind.config.ts
import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Enhanced Color Palette
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        
        // Enhanced Gray Palette for better contrast
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          cool: '#E0E7FF',  // Softer Gray for sections
        },

        // Professional BlueGray Palette
        blueGray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },

        // Primary and Accent Colors
        primary: {
          light: '#B3C5DB',
          DEFAULT: '#4B6EAF',  // Professional Blue
          dark: '#2F4A74',
        },
        accent: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',  // Elegant Green Accent
          dark: '#065F46',
        },
        gold: {
          light: '#F3D19C',
          DEFAULT: '#D4AF37',  // Luxurious Gold Accent
          dark: '#A57C00',
        },

        // Additional Accent Colors
        emerald: {
          light: '#DCFCE7',
          DEFAULT: '#34D399',
          dark: '#064E3B',
        },
        amber: {
          light: '#FEF3C7',
          DEFAULT: '#F59E0B',
          dark: '#92400E',
        },
      },

      // Typography Enhancements
      fontFamily: {
        sans: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'serif'],  // Elegant Serif for Headings
        body: ['"Open Sans"', 'sans-serif'],  // Clean Sans-Serif for Body Text
        mono: ['"Fira Code"', 'monospace'],  // For Code Snippets
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        'hero': ['5rem', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        widest: '.25em',
        wider: '.15em',
        normal: '0',
        tight: '-0.05em',
        tighter: '-0.02em',
      },

      // Spacing and Layout Utilities
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // Container Settings
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        }
      },

      // Box Shadows and Elevation
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.06)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        highlight: '0 4px 10px rgba(212, 175, 55, 0.4)',  // Gold Highlight
      },

      // Custom Background Images
      backgroundImage: {
        'gavel': "url('/images/gavel.jpg')",
        'library': "url('/images/library-bg.jpg')",
        'hero-pattern': "url('/images/hero-pattern.jpg')",
        'footer-pattern': "url('/images/footer-pattern.jpg')",
        'about-us': "url('/images/about-us-bg.jpg')",
      },

      // Custom Animations and Transitions
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config);
