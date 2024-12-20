import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
    
      // => @media (min-width: 640px) { ... }

      'md': '1116px',
      // => @media (min-width: 1024px) { ... }

      'sm': '862px',  

      'mini' : '760px',
        
   'ml' : '560px' ,
  
    
      // 'yxx' : '500',
      // 690
      // => @media (min-width: 1280px) { ... }
    // 'lg' : '590px',
      // => @media (min-width: 1280px) { ... }
    

     
    },
    extend: {
     
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
