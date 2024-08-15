//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import InicioApp from './InicioApp'

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
 // <StrictMode>
    <InicioApp />
  //</StrictMode>,
)
