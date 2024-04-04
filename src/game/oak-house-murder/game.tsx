import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App page="game" game_id='oak-house-murder' />
  </React.StrictMode>,
)
