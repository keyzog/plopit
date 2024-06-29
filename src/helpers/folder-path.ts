import { NodePlopAPI } from "plop";
import { preparePath } from "../libs";

export const folderPathHelper = (plop: NodePlopAPI) => {
	plop.setHelper("folderPath", ({ data }) => {
		const { path } = data.root;

		if (!path) {
			throw new Error(
				`The "folderPath" helper requires a prompt with the name "path". Please ensure that a "path" prompt is provided.`
			);
		}

		return preparePath(path);
	});
};
