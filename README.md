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
