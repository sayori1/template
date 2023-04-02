# sveltekit-capacitor-template

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

```

## Android developing

You should add configs in capacitor.config.ts:
"server":{
"url":"http://10.0.2.2:3000",
"cleartext": true
}

```bash
npx cap run android(ios)
```

## Building

To create a production version of your app:

```bash
npm run build
```

## Building android/ios

```bash
npx cap sync
npx cap build android(ios)
```

## Useful links:

https://svelte-pixi.com/docs/getting-started/introduction - svelte pixi for drawing instead bear Canvas
