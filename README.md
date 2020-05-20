### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Styles from [Material - UI](https://material-ui.com/).

Live build [here](https://momoshopping.netlify.app/).

### Notes for myself

Moved hooks and CRUD functions from `ShoppingApp.js` to its own `hooks` folder. This makes it cleaner and the code DRY.

`useInputState.js` and `useToggleState.js` are custom hooks that are generic and is reusable.

`useItemState.js` code used to be in the `ShoppingApp.js` but have moved to its own file to make the code cleaner.
