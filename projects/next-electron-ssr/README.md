# next-electron-ssr

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "electron": "electron .",
    "electron-dev": "concurrently \"npm run dev\" \"wait-on http://localhost:3000 && electron .\"",
    "electron-build": "next build && electron-builder"
  }
}
```
