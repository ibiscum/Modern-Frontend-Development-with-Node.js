import { readFile } from "fs";
import { resolve } from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getLibName() {
  const packagePath = resolve(__dirname, "../package.json");
  return new Promise((resolve, reject) => {
    readFile(packagePath, "utf8", (err, content) => {
      if (err) {
        reject(err);
      } else {
        const { name, version } = JSON.parse(content);
        resolve(`${name}@${version}`);
      }
    });
  });
}
