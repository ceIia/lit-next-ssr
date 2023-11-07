### installing/running

```bash
npm install && npm run dev
yarn install && yarn dev
pnpm i && pnpm dev
```

### updating @lit-labs/nextjs

```ts
/* packages/labs/nextjs/src/index.ts */

webpack: (config, options) => {
  config.module.rules.unshift({
    // ...
    test: /\/(pages|app)\/.*\.(?:jsx?|tsx?)$/,
    // ...
  });
};
```

→ i suggest you clone & setup the lit repo, make the change, and use your package manager to link to it.