import { defineConfig } from "vite";
import netlifyPlugin from "vite-plugin-netlify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    netlifyPlugin({
      redirects: [
        {
          from: "/#netlify-forms-submit-success",
          to: "/confirmation",
          status: 200,
        },
      ],
    }),
  ],
});
