import { fileURLToPath } from "url";
import { dirname, sep } from "path";
import fs from "fs/promises";
import pc from "picocolors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(pc.blue(__dirname));
console.log(pc.green("URL del módulo:"), pc.yellow(import.meta.url));
console.log(pc.green("Ruta del archivo:"), pc.cyan(__filename));
console.log(pc.green("Directorio del archivo:"), pc.magenta(__dirname));

// Función para buscar un directorio específico
async function checkDirectory(directory) {
  try {
    const stats = await fs.stat(directory);
    if (stats.isDirectory()) {
      console.log(pc.green(`El directorio "${directory}" existe.`));
    } else {
      console.log(pc.red(`"${directory}" no es un directorio.`));
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(pc.red(`El directorio "${directory}" no existe.`));
    } else {
      console.error(pc.red(`Error al comprobar el directorio: ${err.message}`));
    }
  }
}

// Usar la función para buscar un directorio
const directoryToCheck = `${__dirname}${sep}carpeta`;
const directoryToCheck2 = `${__dirname}${sep}carpeta2`;
checkDirectory(directoryToCheck);
checkDirectory(directoryToCheck2);
