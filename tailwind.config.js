/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hellix': ['Hellix', 'sans-serif'],  
      },
      colors: {
        "bg_color": "#F6F8FC",
        "bg_sidebar": "#233742",
        "hoverBgSidebar": "#3B889F",
        "Bg_Headings": "#3B889F",
        "BG_text_button": "#E2EDF1",
        "BG_Selected_text_button": "#3B889F",
        "text_Gray":"#6E6E6E85",
        "borderColorCustomDropdown":"#3B889F",
        "LightTextColor":"#8C8C8C",
        "inputBorder":"#E1E1E1",
      }
    },
  },
  plugins: [],
};


// formate
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'Manrope': ['Manrope', 'sans-serif'],  
//       },
//       colors: {
//         "bg_color": "#F6F8FC",
//         "bg_sidebar": "#0E77C2",
//         "bg_menuSidebar": "#013C66",
//         "dashboardHeading_color": "#8C8C8C"
//       }
//     },
//   },
//   plugins: [],
// }

