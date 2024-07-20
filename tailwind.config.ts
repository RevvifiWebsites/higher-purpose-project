import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1024px",
        },
        extend: {
            colors: {
                "dark-green": "hsl(116 61% 15%)",
                "light-green": "hsl(74 100% 91%)",
                green: "hsl(116 40% 33%)",
                orange: "hsl(31 100% 50%)",
                yellow: "hsl(49 97% 58%)",
                beige: "hsl(47 92% 90%)",
                "dark-gray": "hsl(118 72% 7%)",
                blue: "hsl(193 94% 45%)",
                "light-gray": "hsl(0 0% 97%)",
            },
        },
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                sm: "100%",
                lg: "70rem",
            },
        },
    },
    plugins: [],
};
export default config;
