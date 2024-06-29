import { NodePlopAPI, ActionType } from "plop";
import { getDefaultPath } from "../libs";

export const componentGenerator = (plop: NodePlopAPI) => {
	plop.setGenerator("component", {
		description: "Create a new React component",
		prompts: [
			{
				type: "input",
				name: "path",
				default: getDefaultPath(),
				message: "Path to the component folder:",
			},
			{
				type: "input",
				name: "names",
				message: "Component names (separated by space):",
			},
			{
				type: "confirm",
				name: "withUi",
				message: "Add ui+lib folders?",
				default: false,
			},
		],
		actions: (answers) => {
			if (!answers) return [];

			const names: string[] = answers.names.split(" ");
			const actions: ActionType[] = [];
			const kebabFn = plop.getHelper("kebabCase");
			const pascalFn = plop.getHelper("pascalCase");

			const createActions = (name: string) => {
				const kebabName = kebabFn(name);
				const pascalName = pascalFn(name);
				// const componentPath = preparePath(answers.path, kebabName);

				// Логирование процесса для наглядности
				actions.push(`Create component <${pascalName}/>!`);

				// Создание основного файла компонента
				actions.push({
					type: "add",
					path: `{{folderPath}}/${kebabName}/${pascalName}.tsx`,
					templateFile: "templates/react/component/Component.tsx.hbs",
					data: { name },
				});

				// Создани SCSS файла со стилями
				actions.push({
					type: "add",
					path: `{{folderPath}}/${kebabName}/${pascalName}.module.scss`,
					templateFile:
						"templates/react/component/Component.module.scss.hbs",
					data: { name },
				});

				// Создание index.ts для сокращенных импортов
				actions.push({
					type: "add",
					path: `{{folderPath}}/${kebabName}/index.ts`,
					templateFile: "templates/react/component/index.ts.hbs",
					data: { name },
				});

				// Добавление папок UI и LIB внутрь компонента
				if (answers.withUi) {
					actions.push(
						{
							type: "add",
							path: `{{folderPath}}/${kebabName}/ui/index.ts`,
							templateFile: "templates/react/component/ui/index.ts",
							data: { name },
						},
						{
							type: "add",
							path: `{{folderPath}}/${kebabName}/lib/index.ts`,
							templateFile: "templates/react/component/lib/index.ts",
							data: { name },
						}
					);
				}
			};

			const addExports = () => {
				const exportsArray = names.map(
					(name: string) => `export * from './${kebabFn(name)}';`
				);
				// Добавление импорта в основной индексный файл каталога (если он есть)
				actions.push(`Append exports in index.ts file!`, {
					type: "append",
					path: `{{folderPath}}/index.ts`,
					template: exportsArray.join("\n"),
				});
			};

			names.forEach((v) => createActions(v));
			addExports();

			return actions;
		},
	});
};
