import React from 'react';
import ReactDOM from 'react-dom'
import App, { store } from './App'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'

const GlobalStyle = createGlobalStyle`
    
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
`

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
