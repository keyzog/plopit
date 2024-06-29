import { folderPathHelper } from "./src/helpers";
import {
	componentGenerator,
	contextGenerator,
	foldersGenerator,
} from "./src/generators";

export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	// Helpers
	folderPathHelper(plop);

	// Generators
	componentGenerator(plop);
	contextGenerator(plop);
	foldersGenerator(plop);
}
