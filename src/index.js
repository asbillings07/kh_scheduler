import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './Global'
import { Provider } from 'react-redux'
import { createStore } from './redux/store'
import history from './utils/history'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Auth0Provider } from '@auth0/auth0-react'

const store = createStore()

// const onRedirectCallback = (appState) => {
//   history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname)
// }

ReactDOM.render(
  <Auth0Provider
    domain='abdevelops.us.auth0.com'
    clientId='NdUl8vLLeBhR4P7YaA3MQhB7VUov9x3q'
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <GlobalStyle />
      </React.StrictMode>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
