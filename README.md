# DualMode

DualMode is a versatile build tool that supports both CommonJS and ES modules, allowing for seamless integration in various JavaScript environments.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Reference](#api-reference)
4. [Configuration](#configuration)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To install DualMode, run the following command in your project directory:

```bash
npm install dualmode
```

## Usage

DualMode provides a CLI tool named `build`. You can use it directly from the command line:

```bash
npx build [options]
```

The `build` command allows you to compile your JavaScript files. Here are some examples:

```bash
# Build all JavaScript files in the current directory
npx build

# Specify input and output directories
npx build --input src --output dist

# Watch for changes and rebuild
npx build --watch

# Bundle and minify
npx build --bundle --minify

# Specify target environment
npx build --target es2020,node14
```

## API Reference

The `build` command accepts the following options:

- `--input`: Specify the input directory or file(s)
- `--output`: Specify the output directory
- `--bundle`: Bundle dependencies
- `--minify`: Minify the output
- `--watch`: Watch for file changes and rebuild
- `--target`: Specify the target environment (e.g., es2020,node14)

For a complete list of options, run:

```bash
npx build --help
```

DualMode uses esbuild under the hood. For more detailed information about the available options, you can refer to the [esbuild documentation](https://esbuild.github.io/api/).

## Configuration

DualMode uses sensible defaults, but you can customize its behavior by creating a `dualmode.config.js` file in your project root:

```javascript
module.exports = {
  entryPoints: ['src/index.js'],
  outdir: 'dist',
  bundle: true,
  minify: true,
  target: ['es2020', 'node14'],
};
```


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
