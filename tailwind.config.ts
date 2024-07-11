import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-green": "hsl(145 18% 24%)",
                "light-gray": "hsl(163 24% 94%)",
            },
        },
        container: {
            center: true,
            padding: '2rem'
        }
    },
    plugins: [],
};
export default config;
