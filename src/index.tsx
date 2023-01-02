import React from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './app/store'
import envInfo from './config/keycloak/initialization'
import { RouteConfigProvider } from './config/routes/routeConfigContext'
import './index.css'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')!
const root = createRoot(container)

function renderApp() {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouteConfigProvider userRole="admin">
          <App />
        </RouteConfigProvider>
      </Provider>
    </React.StrictMode>
  )
}

envInfo
  .initApp()
  .then(() => {
    renderApp()
  })
  .catch(() => {})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
