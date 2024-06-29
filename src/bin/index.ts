#!/usr/bin/env node

console.log("zcxv");

const args = process.argv.slice(2);
// import { parseArgs } from "../libs";
// import path from "path";
import { Plop, run } from "plop";
import minimist from "minimist";
const argv = minimist(args);

console.log("lol kek");

console.log("argv", args, argv);

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configPath = join(__dirname, "../plopfile.js");
console.log("configPath", configPath);

// Получаем текущий рабочий каталог, из которого был вызван скрипт
const invokeDir = process.cwd();
console.log("invokeDir", invokeDir);

Plop.prepare(
	{
		cwd: invokeDir,
		configPath,
		// require: argv.require,
		completion: argv.completion,
	},
	(env: any) => run(env, undefined, true)
);
