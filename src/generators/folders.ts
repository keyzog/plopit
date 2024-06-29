import { ActionType, NodePlopAPI } from "plop";
import { getDefaultPath } from "../libs";

export const foldersGenerator = (plop: NodePlopAPI) => {
	plop.setGenerator("folders", {
		description: "Create folders with an empty index.ts file",
		prompts: [
			{
				type: "input",
				name: "path",
				default: getDefaultPath(),
				message: "Path to the folder:",
			},
			{
				type: "input",
				name: "names",
				default: "ui lib",
				message: "Folder names (separated by space):",
			},
		],
		actions: (answers) => {
			if (!answers) return [];

			const names: string[] = answers.names.split(" ");
			const actions: ActionType[] = [];
			const createFolderActions = (name: string) => {
				const kebabName = plop.getHelper("kebabCase")(name);
				// const folderPath = `${answers.path}/${kebabName}`;
				actions.push({
					type: "add",
					path: `{{folderPath}}/${kebabName}/index.ts`,
				});
			};
			names.forEach((name) => createFolderActions(name));
			return actions;
		},
	});
};
