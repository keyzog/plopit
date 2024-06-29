#!/usr/bin/env node

const args = process.argv.slice(2);
import { Plop, run } from "plop";
import minimist from "minimist";
const argv = minimist(args);

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configPath = join(__dirname, "../plopfile.js");

// Получаем текущий рабочий каталог, из которого был вызван скрипт
const invokeDir = process.cwd();

Plop.prepare(
	{
		cwd: invokeDir,
		configPath,
		// require: argv.require,
		completion: argv.completion,
	},
	(env: any) => run(env, undefined, true)
);
