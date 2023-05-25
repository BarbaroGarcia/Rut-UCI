import BasicExample from "../Components/Sidebar"
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

function MostrarRutas() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/rutas/nueva');
  }
  const navigateedit = useNavigate();

  function handleClickedit() {
    navigateedit('/rutas/modificar');
  }
  return (
    <>
    <Header/>
    <BasicExample/>
      <div className="bg-white shadow-md rounded-md overflow-hidden mx-4 y mt-4 py-2 px-4">
        <div className="flex justify-between items-center px-4 py-2 ">
          <h2 className="text-lg font-bold text-gray-800">Rutas Establecidas</h2>
          <button onClick={handleClick} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Nueva Ruta
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Luagar de salida</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Paradas</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Hora de salida</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Chofer</th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 4 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 5 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 6 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 6 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={handleClickedit} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Editar
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Eliminar
                </button>
              </td>
            </tr>
            
            


          </tbody>
          <tbody className="bg-white divide-y divide-gray-200">

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 4 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 5 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 6 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 6 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Editar
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Eliminar
                </button>
              </td>
            </tr>
            
            


          </tbody>
          <tbody className="bg-white divide-y divide-gray-200">

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 4 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 5 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 6 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 6 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Editar
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Eliminar
                </button>
              </td>
            </tr>
            
            


          </tbody>
          <tbody className="bg-white divide-y divide-gray-200">

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 4 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 5 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 6 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">{/* Dato 6 */}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Editar
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                  Eliminar
                </button>
              </td>
            </tr>
            
            


          </tbody>
        </table>
      </div>
    </>
  );
}

export default MostrarRutas;