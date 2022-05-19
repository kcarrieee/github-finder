module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
   daisyui: {
      themes: [
        {
          mytheme: {
          
              "primary": "#0D0D0D",
                        
              "secondary": "#1A1919",
                        
              "accent": "#262626",
                        
              "neutral": "#000000",
                        
              "base-100": "#FFFFFF",
                        
              "info": "#0072F5",
                        
              "success": "#21CA51",
                        
              "warning": "#FF6052",
                        
              "error": "#DE1B8D",
          },
        },
      ],
    },
  plugins: [
    require('daisyui')
  ],
}
