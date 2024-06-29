import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import nodeExternals from "vite-plugin-node-externals";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		nodeExternals(),
		viteStaticCopy({
			targets: [
				{
					src: "src/templates",
					dest: "./",
				},
			],
		}),
	],

	build: {
		lib: {
			entry: {
				index: resolve(__dirname, "src/index.ts"),
				plopfile: resolve(__dirname, "plopfile.js"),
				"bin/global": resolve(__dirname, "src/bin/index.ts"),
			},
			name: "plopit",
		},
	},
	// rollupOptions: {
	// 	external: ["inquirer", "fs", "path", "stream", "events"],
	// 	output: {
	// 		globals: {
	// 			inquirer: "inquirer",
	// 			fs: "fs",
	// 			path: "path",
	// 			stream: "stream",
	// 			events: "events",
	// 		},
	// 	},
	// },
});
