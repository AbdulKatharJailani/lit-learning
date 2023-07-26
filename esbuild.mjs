import * as esbuild from 'esbuild';
import fs from 'fs';

const componentDir = 'src';
const outputDir = 'dist';

const findFolders = (directory) => {
  const files = fs.readdirSync(directory);
  const folders = [];

  for (const file of files) {
    const filePath = `${directory}/${file}`;
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      folders.push(filePath);
      folders.push(...findFolders(filePath));
    }
  }

  return folders;
};

const folders = [componentDir, ...findFolders(componentDir)];

folders.forEach(folderPath => {
  const indexPath = `${folderPath}/index.ts`;
  const folderName = folderPath.split('/').pop();
  const outputFileName = `${outputDir}/${folderName}/index.js`;
  if (fs.existsSync(indexPath)) {
    esbuild.buildSync({
      entryPoints: [indexPath],
      outfile: outputFileName,
      bundle: true,
      minify: true,
    });
  }
});


