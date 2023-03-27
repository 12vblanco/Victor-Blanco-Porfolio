import { defineConfig } from "vite";

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
