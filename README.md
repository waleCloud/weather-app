# Weather React Exercise

[Demo Link](https://walecloud.github.io/weather-app/)

This project displays weather information up to 5 days forcast with a maximum of 8 reports per day.

## Architectural decisions and Technologies

This project uses of React.Context to manage the state across UI, Mainly bacause we're dealing with small footprint of data/state, Redux will be an overkill. Simplicity over extra external Library since redux is built ontop of context so it seems like a no brainer.

Uses purely functional components with react hooks across board, employs a composable colocation folder structure.

### Technologies

- Language - Typescript
- Frontend Library - [Create React App](https://github.com/facebook/create-react-app).
- State Management - [React Context API](https://reactjs.org/docs/context.html#api).
- UI Component Lbrary - [Material UI](https://material-ui.com/components).
- Chart Library - [Devexpress Chart Library](https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/).
- Testing - [React testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Setup
 
 - Clone Repo ` git clone <repository>`
 - Install Dependecies ` yarn`
 - Run App `yarn start` Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 - Test App - `yarn test`
