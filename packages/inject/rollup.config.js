import jsx from "acorn-jsx";
import typescript from "@rollup/plugin-typescript";
import typescript2 from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

import path from "path";
import dotenv from "dotenv";

const env =
  dotenv.config({
    path: path.join(__dirname, "../../.env.test"),
  }).parsed || {};

const define = Object.keys(env).reduce(
  (p, a) => ({ ...p, ["process.env." + a]: env[a] }),
  {}
);

const config = {
  input: ["./src/index.tsx"],
  output: {
    dir: "./es",
    format: "es",
    preserveModules: false,
    // preventAssignment: true,
    preserveModulesRoot: "./src",
  },
  plugins: [typescript2()],
};

const injectionConfig = {
  input: ["./src/website.tsx"],
  output: {
    dir: "./dist",
    format: "es",
    preserveModules: false,
    // preserveModulesRoot: "./",
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    // typescript({
    //   jsx: "preserve",
    //   tsconfig: "tsconfig.json",
    // }),
    typescript2(),

    commonjs(),
    nodeResolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      ...define,
    }),
  ],
};

export default [config, injectionConfig];