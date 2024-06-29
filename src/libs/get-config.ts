import fs from "fs";
import { join } from "path";

let defaultConfig: PlopConfig = {
	defaultPath: "src/components",
};

/**
 * Reads and merges configuration from package.json with the default configuration.
 *
 * @returns {PlopConfig} The merged configuration.
 */
export const getConfig = (): PlopConfig => {
	// also we can use "find-up"
	const packageJsonPath = join(process.cwd(), "package.json");

	if (fs.existsSync(packageJsonPath)) {
		const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
		if (packageJson.plopit) {
			Object.keys(packageJson.plopit).forEach((key) => {
				const value = packageJson.plopit[key];

				if ((defaultConfig as any)[key] !== undefined) {
					(defaultConfig as any)[key] = value;
				}
			});
		}
	}

	return defaultConfig;
};
