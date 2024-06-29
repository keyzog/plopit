import { resolve, isAbsolute, relative, sep } from "path";

/**
 * Prepares an absolute path based on the provided path and an optional folder.
 *
 * @param {string} path - The base path, which can be either absolute or relative.
 * @param {string} [folder] - An optional folder name to append to the base path.
 * @returns {string} The absolute path, potentially including the appended folder.
 */
export const preparePath = (path: string, ...folders: string[]) => {
	const targetFolder = isAbsolute(path) ? path : resolve(process.cwd(), path);
	const finalPath = resolve(targetFolder, ...folders);

	// Check if finalPath is a subdirectory of process.cwd()
	const relativePath = relative(process.cwd(), finalPath);

	if (relativePath.split(sep)[0] === ".." || !relativePath) {
		throw new Error(
			`The resulting path ${finalPath} is not a subdirectory of the current working directory.`
		);
	}

	return finalPath;
};
