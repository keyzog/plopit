import { getConfig } from "./get-config";
import { readArgs } from "./read-args";

export const getDefaultPath = () => {
	return readArgs().path || getConfig().defaultPath;
};
