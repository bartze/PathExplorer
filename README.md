# pathexplorer

**Descripción:**

Esta es una sencilla aplicación Node.js que demuestra cómo utilizar el objeto `import.meta` para obtener información sobre el módulo actual y cómo verificar la existencia de directorios utilizando el módulo `fs`.

**Características:**

- **Módulos ES6:** Utiliza `import` y `export` para una mejor organización del código.
- **Colorización de salida:** Emplea el paquete `picocolors` para resaltar la salida en la consola y mejorar la legibilidad.
- **Verificación de directorios:** Comprueba la existencia de directorios especificados y muestra mensajes informativos al usuario.

**Instalación:**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/bartze/PathExplorer
   ```
2. Instala las dependencias:
   ```bash
   cd pathexplorer
   npm install
   ```

## Uso

Para verificar la existencia de un directorio específico, puedes ejecutar el comando `npm start` seguido de la ruta del directorio como argumento:

```bash
npm start /ruta/a/tu/directorio
```

## Estructura del proyecto:

index.js: Archivo principal de la aplicación.
package.json: Archivo de configuración de npm, que incluye dependencias y scripts.

## Explicación de import.meta:

Para una explicación detallada sobre el objeto import.meta y su uso, por favor consulta el archivo import-meta.md.
