import { NodePlopAPI } from "plop";
import { getDefaultPath } from "../libs";

export const contextGenerator = (plop: NodePlopAPI) => {
	plop.setGenerator("context", {
		description: "Create a new React context",
		prompts: [
			{
				type: "input",
				name: "path",
				default: getDefaultPath(),
				message: "Path to create context file:",
			},
			{
				type: "input",
				name: "name",
				message: "Context name:",
			},
		],
		actions: (answers) => {
			if (!answers) return [];

			return [
				{
					type: "add",
					path: "{{folderPath}}/{{pascalCase name}}Context.tsx",
					templateFile: "templates/react/context/NameContext.tsx.hbs",
				},
				{
					type: "append",
					path: "{{folderPath}}/index.ts",
					template: 'export * from "./{{pascalCase name}}Context.tsx"',
				},
				`Context created!`,
			];
		},
	});
};
