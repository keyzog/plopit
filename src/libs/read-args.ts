import minimist from "minimist";

export const readArgs = () => {
	const args = process.argv.slice(2);
	return minimist(args);

	// const args = process.argv.slice(2);
	// const parsedArgs: Record<string, string | true> = {};

	// for (let i = 0; i < args.length; i++) {
	// 	const arg = args[i];
	// 	if (arg.startsWith("--")) {
	// 		const key = arg.slice(2);
	// 		const value =
	// 			args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
	// 		parsedArgs[key] = value;
	// 		if (value !== true) {
	// 			i++;
	// 		}
	// 	}
	// }

	// return parsedArgs;
};
