import fs from "fs";
import path from "path";

export function updatePackageJson(config) {
  const jsonPath = path.resolve(process.cwd(), "package.json");

  try {
    const json = JSON.parse(fs.readFileSync(jsonPath));
    const outputDir = config.esbuild?.outdir || "cjs";
    const moduleName = config.moduleFileNameWithoutExtension || "index";

    json.exports = {
      require: `./${outputDir}/${moduleName}.cjs`,
      import: `./${moduleName}.mjs`,
      default: `./${outputDir}/${moduleName}.cjs`,
    };

    fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
  } catch (error) {
    console.error(
      `Error reading ${jsonPath}. Please run the script from the root of your project.`
    );
  }
}
