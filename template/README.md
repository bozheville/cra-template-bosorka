This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using [Bosorka template](https://github.com/bozheville/cra-template-bosorka).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Add new component/page

### Add new page

```
npm run add:page --name NewPage --path /new-page-path [--menu]
```

creates following files:
- `./src/pages/NewPage/types.ts`
- `./src/pages/NewPage/index.ts`
- `./src/pages/NewPage/NewPage.container.tsx`
- `./src/pages/NewPage/NewPage.tsx`
- `./src/pages/NewPage/__tests__/NewPage.test.tsx`

It also adds a page section in `./src/en.json`, adds a route under a Switch in `./src/pages/App.tsx`.
Running a script with `--menu` argument, it also adds a menu item in `./src/services/menu-items.json`.

### Add new component

```
npm run add:component --name NewComponent
```

creates following files:
- `./src/components/NewComponent/types.ts`
- `./src/components/NewComponent/index.ts`
- `./src/components/NewComponent/NewComponent.tsx`
- `./src/components/NewComponent/__tests__/NewComponent.test.tsx`

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

- [`yarn build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

- [Deployment on heroku](https://github.com/mars/create-react-app-buildpack)
