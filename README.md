# DualMode

DualMode is a versatile build tool that supports both CommonJS and ES modules, allowing for seamless integration in various JavaScript environments.

## Table of Contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
   - [As a CLI Tool](#as-a-cli-tool)
   - [As a Module](#as-a-module)
4. [API Reference](#api-reference)
5. [Configuration](#configuration)
6. [Examples](#examples)
7. [Contributing](#contributing)
8. [License](#license)

## Installation

To install DualMode, run the following command in your project directory:

```bash
npm install dualmode
```

## Getting Started

After installation, you can use DualMode either as a CLI tool or as a module in your JavaScript projects.

### CLI Usage

DualMode provides a CLI tool named `build`. You can use it directly from the command line:

```bash
npx build [options]
```

### Module Usage

You can also import DualMode in your JavaScript files:

```javascript
// ESM
import build from 'dualmode';

// CommonJS
const build = require('dualmode');
```

## Usage

### As a CLI Tool

The `build` command allows you to compile your JavaScript files. Here are some examples:

```bash
# Build all JavaScript files in the current directory
npx build

# Specify input and output directories
npx build --input src --output dist

# Watch for changes and rebuild
npx build --watch
```

### As a Module

You can use DualMode programmatically in your Node.js scripts:

```javascript
import build from 'dualmode';

async function runBuild() {
  try {
    await build({
      entryPoints: ['src/**/*.js'],
      outdir: 'dist',
      bundle: true,
      minify: true,
    });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
  }
}

runBuild();
```

## API Reference

The main `build` function accepts an options object with the following properties:

- `entryPoints`: An array of glob patterns for input files
- `outdir`: The output directory for compiled files
- `bundle`: Boolean, whether to bundle dependencies
- `minify`: Boolean, whether to minify the output
- `watch`: Boolean, whether to watch for file changes

For a complete list of options, refer to the [esbuild documentation](https://esbuild.github.io/api/), as DualMode uses esbuild under the hood.

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

## Examples

### Building a React App

```javascript
import build from 'dualmode';

build({
  entryPoints: ['src/App.jsx'],
  outdir: 'dist',
  bundle: true,
  minify: true,
  loader: { '.jsx': 'jsx' },
  define: { 'process.env.NODE_ENV': '"production"' },
});
```

### Building a Node.js Server

```javascript
import build from 'dualmode';

build({
  entryPoints: ['server.js'],
  outdir: 'dist',
  platform: 'node',
  target: 'node14',
  external: ['express'],
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
