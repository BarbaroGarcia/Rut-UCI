import React from 'react'
import ReactDOM from 'react-dom/client'
import{createBrowserRouter,RouterProvider}from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import InsertarUsuarios from '../src/components/InsertarUsuarios.jsx'
import MostrarUsuarios from '../src/components/MostrarUsuarios.jsx'
import SolicitarCombustible from './components/Solicitarcombustible.jsx'
import MostrarRutas from './components/MostrarRutas.jsx'
import ModificarUsuario from './components/ModificarUsuario.jsx'
import NuevaRuta from './components/NuevaRuta.jsx'
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
      {
        path:"/usuarios/insertar",
        element:<InsertarUsuarios/>,
        },
        {
          path:"/usuarios/modificar",
          element:<ModificarUsuario/>,
          },
          {
            path:"/rutas/nueva",
            element:<NuevaRuta/>,
            },
            {
              path:"/rutas/modificar",
              element:<ModificarUsuario/>,
              },
     
  
  
  ]
  );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
 