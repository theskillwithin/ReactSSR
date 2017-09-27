import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'

// import { logPageView } from 'utils/analytics'

import configureStore from '../../store/configureStore'

export default (Component, onClientRender) => {
  const reactCreateElement = (store) => {
    return React.createElement(Provider, { store }, React.createElement(Component));
  }

  global.reactClientRender = (initialState) => {
    const store = configureStore(initialState);

    ReactDOM.render(
      reactCreateElement(store),
      document.getElementById('root'),
    )

    if (onClientRender) {
      onClientRender(store);
    }
  }

  global.reactServerRender = (initialState) => {
    const store = configureStore(initialState);
    return ReactDOMServer.renderToString(
      reactCreateElement(store),
    )
  }
}
