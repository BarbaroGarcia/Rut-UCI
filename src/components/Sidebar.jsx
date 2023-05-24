import { Link } from 'react-router-dom';
import { RiHome2Line, RiMapPinLine, RiUserLine, RiGasStationLine } from 'react-icons/ri';

function Sidebar(props) {
  return (
    <div className={`h-full bg-gradient-to-b from-blue-500 to-blue-700 text-white p-4 fixed top-0 left-0 w-64 z-10 ${props.isOpen ? '' : 'hidden'}`}>
      <h1 className="text-2xl font-bold mb-6">RUT-UCI</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link className="nav-link flex items-center rounded-lg py-2 px-4 transition duration-300 hover:bg-white hover:text-blue-700" to="/" activeClassName="bg-white text-blue-700">
              <RiHome2Line className="icon mr-2" />
             
              Inicio
            </Link>
          </li>
          <li className="mb-4">
            <Link className="nav-link flex items-center rounded-lg py-2 px-4 transition duration-300 hover:bg-white hover:text-blue-700" to="/rutas" activeClassName="bg-white text-blue-700">
            <RiMapPinLine className="iconmr-2" />
              Rutas
            </Link>
          </li>
          
          <li className="mb-4">
            <Link className="nav-link flex items-center rounded-lg py-2 px-4 transition duration-300 hover:bg-white hover:text-blue-700" to="/usuarios" activeClassName="bg-white text-blue-700">
              <RiUserLine className="icon mr-2" />
              Usuarios
            </Link>
          </li>
          <li className="mb-4">
            <Link className="nav-link flex items-center rounded-lg py-2 px-4 transition duration-300 hover:bg-white hover:text-blue-700" to="/combustible" activeClassName="bg-white text-blue-700">
              <RiGasStationLine className="icon mr-2" />
              Combustible
            </Link>
          </li>
        </ul>
      </nav>
     <button className="text-white mt-4 rounded-xl w-24 h-8 border bg-blue-500 hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out" onClick={props.onClose}>Cerrar</button>
    </div>
  );
}

export default Sidebar;