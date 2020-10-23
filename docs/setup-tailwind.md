## Tailwind CSS

We use [TailwindCSS] utility-first CSS framework for UI.

[TailwindCSS]: https://tailwindcss.com/

More details on the setup process on this [blog post].

[blog post]: https://daveceddia.com/tailwind-create-react-app/

### 1. Install Tailwind

Install the tailwindcss package:

```sh
npm install tailwindcss npm-run-all chokidar-cli
```

### 2. Add Tailwind to the Build

Configure your scripts in `package.json` so that:

* when you build the app, it first builds tailwind script.
* when you start the app, it watches and builds tailwind css.

The tailwind css input is `src/assets/tailwind.css` and the output is `src/assets/main.css`.

```json
  "scripts": {
    "build:tailwind": "tailwind build src/assets/tailwind.css -o src/assets/main.css",
    "watch:tailwind": "chokidar 'src/assets/tailwind.css' 'src/**/*.scss' --ignore src/assets/main.css -c 'npm run build:tailwind'",
    "start": "npm-run-all build:tailwind --parallel watch:tailwind start:react",
    "start:react": "react-scripts start",
    "prebuild": "run-s build:tailwind",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

### 3. Set up the Tailwind source CSS file

Create the `src/assets/tailwind.css` with the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Import the Generated CSS File

Import the ouput css `src/assets/main.css` to your `index.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

### Purge Unused CSS Classes for a Smaller Download

Create the `tailwind.config.js` with the following:

```js
module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

It's similar output as the `npx tailwind init` command, with the purge also configured.
