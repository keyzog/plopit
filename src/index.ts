import { NodePlopAPI } from "plop";
import {
	componentGenerator,
	contextGenerator,
	foldersGenerator,
} from "./generators";
import { folderPathHelper } from "./helpers";

export default (plop: NodePlopAPI) => {
	// Configuration
	plop.setDefaultInclude({ generators: true });

	// Helpers
	folderPathHelper(plop);

	// Generators
	componentGenerator(plop);
	contextGenerator(plop);
	foldersGenerator(plop);
};
