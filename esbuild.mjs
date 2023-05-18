import * as esbuild from 'esbuild';
import * as dotenv from 'dotenv'
dotenv.config()
const entryPoint = `src/${process.env.COMPONENT_NAME}.js`;
// const entryPoint = `src/components/${process.env.COMPONENT_NAME}/index.js`;
const outfile = `dist/${process.env.COMPONENT_NAME}.js`;

await esbuild.build({
  entryPoints: [entryPoint],
  bundle: true,
  minify: true,
  outfile: outfile,
})
