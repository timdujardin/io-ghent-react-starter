# io-ghent-react-starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
specifically with typescript: `yarn create react-app io-ghent-react-starter --template typescript`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app in the development mode.\
The build will be available inside the /build repository, including a main.js file.

### `yarn export`

Builds the app in the production mode.\
The build will be available inside the /build repository, including a **minified** main.js file.

## Babel

This starter kit is using Babel to convert React and TypeScript code to JavaScript.
Configuration is available in the .babelrc file on the root.

Below is an explanation of the packages that are installed:

- `@babel/core`: As the name suggests, this is the core Babel library.
- `@babel/preset-env`: This is a collection of plugins that allow us to use the latest JavaScript features but still target browsers that don&apos;t support them.
- `@babel/preset-react`: This is a collection of plugins that enable Babel to transform React code into JavaScript.
- `@babel/preset-typescript`: This is a plugin that enables Babel to transform TypeScript code into JavaScript.

## Linting

ESLint is used for this starter kit, configuration is available in the .eslintrc.json file on the root.\
Below is an explanation of the packages that are installed:

- `eslint`: This is the core ESLint library.
- `eslint-plugin-react`: This contains some standard linting rules for React code.
- `eslint-plugin-react-hooks`: This includes some linting rules for React hooks code.
- `@typescript-eslint/parser`: This allows TypeScript code to be linted.
- `@typescript-eslint/eslint-plugin`: This contains some standard linting rules for TypeScript code.

ESLint in this starter kit is configured to use the TypeScript parser, and the standard React and TypeScript rules as a base set of rules. We&apos;ve explicitly added the two React hooks rules and suppressed the react/prop-types rule because prop types aren&apos;t relevant in React with TypeScript projects. We have also told ESLint to detect the version of React we are using.

## Webpack

This starter kit uses Webpack 5 as the tool to bundle all JavaScript code into the main.js file.
