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
                void: "#000000",
                "nebula-cyan": "#00F0FF",
                "nebula-purple": "#7000FF",
                "hologram-cyan": "#00F0FF", // Alias for compatibility
                "hologram-purple": "#7000FF", // Alias for compatibility
                "hologram-pink": "#EC4899",
                "neon-cyan": "#00F0FF",
                "neon-purple": "#7000FF",
                "laser-cyan": "#00F0FF",
                "laser-purple": "#7000FF",
            },
            fontFamily: {
                display: ["var(--font-syne)", "sans-serif"],
                body: ["var(--font-space-grotesk)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
