import { folderPathHelper } from "./helpers";
import {
	componentGenerator,
	contextGenerator,
	foldersGenerator,
} from "./generators";

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
