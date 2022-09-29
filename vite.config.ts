import { rmSync } from "fs";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron, { onstart } from "vite-plugin-electron";
import pkg from "./package.json";
import components from "unplugin-vue-components/vite";
import { VarletUIResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
rmSync("dist", { recursive: true, force: true }); // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		components({
			resolvers: [VarletUIResolver()],
		}),
		Unocss(),
		electron({
			main: {
				entry: "electron/main/index.ts",
				vite: {
					build: {
						// For Debug
						sourcemap: true,
						outDir: "dist/electron/main",
					},
					// Will start Electron via VSCode Debug
					plugins: [process.env.VSCODE_DEBUG ? onstart() : null],
				},
			},
			preload: {
				input: {
					// You can configure multiple preload here
					index: path.join(__dirname, "electron/preload/index.ts"),
				},
				vite: {
					build: {
						// For Debug
						sourcemap: "inline",
						outDir: "dist/electron/preload",
					},
				},
			},
			// Enables use of Node.js API in the Renderer-process
			// https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
			renderer: {},
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	server: process.env.VSCODE_DEBUG
		? {
				host: pkg.debug.env.VITE_DEV_SERVER_HOSTNAME,
				port: pkg.debug.env.VITE_DEV_SERVER_PORT,
		  }
		: undefined,
});
