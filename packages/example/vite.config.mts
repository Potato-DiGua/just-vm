import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        plugins: [
          "babel-plugin-transform-typescript-metadata",
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }],
        ],
        presets: ["@babel/preset-typescript"],
      },
      filter: /\.vm.ts$/,
    }),
    react(),
  ],
  resolve: {
    alias: [{ find: "@src", replacement: path.resolve("./src") }],
  },
  build: {
    rollupOptions: {
      input: {
        just: path.resolve(__dirname, "./src/pages/just-vm/index.html"),
        justtodolist: path.resolve(__dirname, "./src/pages/just-vm-todolist/index.html"),
      },
    },
  },
  server: {
    open: "/src/pages/just-vm-todolist/index.html",
    host: true,
  },
});
