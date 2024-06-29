# Features

**Plopit** provides several templates to simplify and speed up the development process:

![demo](https://imgur.com/vFkxe7L.gif)

-  **React Component Templates:** Quickly create boilerplate code for new components. Specify multiple component names separated by spaces to generate several components at once.
-  **Context File Templates:** Streamline the creation of context files for React.
-  **Folder and File Generators:** Easily generate multiple folders and files with predefined structures by providing names separated by spaces.

# Installation

You can install plopit either globally or as a dev dependency.

### Global Installation

```bash
npm install -g plopit
```

### Local Installation

```bash
npm install --save-dev plopit
```

For local use, plop must already be installed and configured in the project. You can limit yourself to a minimal configuration of plopfile.js

```js
export default async function (plop) {
	await plop.load("plopit");
}
```

# Usage

### Global Usage

If plopit is installed globally, you can use it as follows. After running the command, simply follow the instructions.

```bash
plopit
```

### Local Usage

Run the command you run plop with, usually `npx plop`. Templates from plopit will be added to your list of templates.

# Configuration

You can customize the default path where new files and folders are generated by adding a plopit configuration in your package.json:

```json
"plopit": {
  "defaultPath": "src/shared/ui"
}
```

This will set the default path to src/shared/ui for all generated files and folders. You can still change it during the template application step.

### Passing Path Parameter

You can specify the target folder directly by passing the path parameter with the command. This allows you to create files in a specific directory.

```bash
# For global usage:
plopit --path src/shared/components

# For local usage:
npx plop -- --path src/components
```

This will generate the files in the specified folder instead of the default path.
