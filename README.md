# Reproduction Repository

This repo is a example repo to reproduce the issue of https://github.com/brillout/vite-plugin-ssr/discussions/1023

## Steps to reproduce

```
1. Clone this repo
2. npm i
3. npm run dev // will work
4. npm run build // will fail
```

`npm run build` only fails if in `vite.config.ts` the `prerender` option is set to `true`.

The error:

```
file:///home/fabio/Desktop/playground/vps-cjs-issue/dist/server/entries/pages_index-page.mjs:2
import { Badge } from "primereact/badge/badge.esm.js";
         ^^^^^
SyntaxError: Named export 'Badge' not found. The requested module 'primereact/badge/badge.esm.js' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'primereact/badge/badge.esm.js';
const { Badge } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:128:21)
    at ModuleJob.run (node:internal/modules/esm/module_job:194:5)
    at async Promise.all (index 0)
    at ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at Object.pageFile.loadFile (/home/fabio/Desktop/playground/vps-cjs-issue/node_modules/vite-plugin-ssr/dist/cjs/shared/getPageFiles/parseGlobResults.js:35:40)
    at async Promise.all (index 0)
    at loadPageFilesServerSide (/home/fabio/Desktop/playground/vps-cjs-issue/node_modules/vite-plugin-ssr/dist/cjs/shared/getPageFiles/analyzePageServerSide/loadPageFilesServerSide.js:10:5)
    at async Promise.all (index 0)
    at loadPageFilesServer (/home/fabio/Desktop/playground/vps-cjs-issue/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/renderPage/loadPageFilesServer.js:15:110)
    at /home/fabio/Desktop/playground/vps-cjs-issue/node_modules/vite-plugin-ssr/dist/cjs/node/prerender/runPrerender.js:257:48
```
