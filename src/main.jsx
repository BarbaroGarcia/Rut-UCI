import React from 'react'
import ReactDOM from 'react-dom/client'
import{createBrowserRouter,RouterProvider}from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import MostrarUsuarios from '../src/components/MostrarUsuarios.jsx'
import SolicitarCombustible from './components/Solicitarcombustible.jsx'
import MostrarRutas from './components/MostrarRutas.jsx'
const router=createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  
  },
  {
    path:"/rutas",
    element:<MostrarRutas/>,
    },
    
    {
    path:"/usuarios",
    element:<MostrarUsuarios/>,
    },
    {
      path:"/combustible",
      element:<SolicitarCombustible/>,
      },
      
     
  
  
  ]
  );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
 