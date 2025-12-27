import { build as viteBuild } from "vite";
import { build as esbuild } from "esbuild";
import { rm, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// ES module safe __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// server deps to bundle
const allowlist = [
  "axios",
  "connect-pg-simple",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-session",
  "memorystore",
  "passport",
  "passport-local",
  "pg",
  "ws",
  "zod",
  "zod-validation-error"
];

async function buildAll() {
  await rm(path.resolve(__dirname, "../dist"), { recursive: true, force: true });

  console.log("building client...");
  await viteBuild({
    configFile: path.resolve(__dirname, "../vite.config.ts")
  });

  console.log("building server...");
  const pkg = JSON.parse(await readFile(path.resolve(__dirname, "../package.json"), "utf-8"));

  const allDeps = [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.devDependencies ?? {})
  ];

  const externals = allDeps.filter(dep => !allowlist.includes(dep));

  await esbuild({
    entryPoints: [path.resolve(__dirname, "../server/index.ts")],
    platform: "node",
    bundle: true,
    format: "cjs",
    target: "node20",
    outfile: path.resolve(__dirname, "../dist/index.cjs"),
    external: externals,
    minify: true,
    sourcemap: false,
    define: {
      "process.env.NODE_ENV": "\"production\""
    },
    logLevel: "info"
  });

  console.log("Build completed successfully!");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
