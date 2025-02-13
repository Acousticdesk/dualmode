# DualMode

DualMode is a build tool designed to support the use of modern npm packages built using ES modules in older applications where only `require` is available.

## Table of Contents

1. [How it Works](#how-it-works)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Configuration](#configuration)
1. [Contributing](#contributing)
1. [License](#license)

## How it Works

1. DualMode will transform all the `.mjs` files in the project to the `.cjs` format and put them into the `cjs` folder.
1. An `export` property will be added to the `package.json` that will allow the older application use the `.cjs` version of your npm module

## Installation

```
npm i dualmode
```

## Usage

> Make sure to run the `build` command from the root of your project where the package.json file is located

To use DualMode, add the following script to your `package.json`:

```json
{
  "scripts": {
    "build": "npx dualmode"
  }
}
```

Then you can run the build process using:

```bash
npm run build
```

This command will use the latest version of DualMode to build your project.

## Configuration

You can customize the build process by creating a `dualmode.config.json` file in your project root. You can pass any [esbuild.build](https://esbuild.github.io/api/#build) parameter via the `esbuild` property.

Here's an example configuration:

```json
{
  "esbuild": {},
  "moduleFileNameWithoutExtension": "index"
}
```

DualMode uses esbuild under the hood. For more detailed information about the available options, you can refer to the [esbuild documentation](https://esbuild.github.io/api/).

## License

This project is licensed under the ISC License.
