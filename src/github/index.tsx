import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.tsx'
import { links } from '../data.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App page="redirect" redirect_to={links.github} />
    </React.StrictMode>,
)
