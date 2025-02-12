#! /usr/bin/env node

import esbuild from "esbuild";
import { globSync } from "glob";
import { RewriteImportsPlugin } from "./build.rewrite-imports.mjs";
import { updatePackageJson } from "./build.update-package-json.mjs";
import fs from "fs";
import path from "path";

const configFileName = "dualmode.config.json";
const configPath = path.resolve(process.cwd());

const defaultConfig = {
  esbuild: {
    entryPoints: {
      ignore: ["./node_modules/**/*"],
    },
  },
};

let config;

if (!fs.existsSync(configPath)) {
  console.warn(
    `${configPath} not found. Proceeding with the default configuration. See https://www.npmjs.com/package/dualmode for more information.`,
    config
  );

  config = defaultConfig;
} else {
  config = JSON.parse(fs.readFileSync(configPath));
  console.log(`Using custom configuration from ${configFileName}:`, config);
}

esbuild
  .build({
    outdir: "cjs",
    format: "cjs",
    outExtension: { ".js": ".cjs" },
    bundle: false,
    plugins: [new RewriteImportsPlugin()],
    ...config.esbuild,
    entryPoints: globSync(
      "./**/*.mjs",
      config.esbuild?.entryPoints || defaultConfig.esbuild.entryPoints
    ),
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

updatePackageJson(config);
