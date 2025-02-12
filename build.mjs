#! /usr/bin/env node

import esbuild from "esbuild";
import { globSync } from "glob";
import { RewriteImportsPlugin } from "./build.rewrite-imports.mjs";
import { updatePackageJson } from "./build.update-package-json.mjs";
import fs from "fs";
import path from "path";

const configPath = path.resolve(process.cwd(), ".dualmoderc");

let config = {};

if (!fs.existsSync(configPath)) {
  console.warn(
    `No .env.dualmode file found in ${configPath}. Proceeding with a default configuration.`
  );
} else {
  config = JSON.parse(fs.readFileSync(configPath));
  console.log("Using custom configuration from .env.dualmode:", config);
}

esbuild
  .build({
    outdir: "cjs",
    format: "cjs",
    outExtension: { ".js": ".cjs" },
    bundle: false,
    plugins: [new RewriteImportsPlugin()],
    ...config.esbuild,
    entryPoints: globSync("./**/*.mjs", {
      ignore: ["./node_modules/**/*", "./tests/**/*", "./build/**/*"],
      ...config.esbuild?.entryPoints,
    }),
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

updatePackageJson(config);
