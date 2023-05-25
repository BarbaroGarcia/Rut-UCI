import BasicExample from "../Components/Sidebar"
import { useNavigate } from 'react-router-dom';
function ModificarRuta() {
    const navigate = useNavigate();

    function handleGoBack() {
      navigate(-1);
    }
    return (
      <>
      <BasicExample/>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md">
          <div className="p-6">
          <div>
      <button className="" onClick={handleGoBack}>Volver</button></div>
            <form className="flex flex-col items-center">
              <div className="block text-center text-2xl font-bold mb-4">
                <h2>Modificar Ruta</h2>
              </div>
              <div className="flex flex-col items-start my-4 max-w-350px">
                <label className="text-start text-lg font-bold mb-2" htmlFor="Lugar de salida">Lugar de salida:</label>
                <input className="rounded-md max-h-10 border border-gray-300 text-base py-2 px-10 mx-10" type="text" id="nombre" name="Lugar de salida" required />
              </div>
              <div className="flex flex-col items-start my-4 max-w-350px">
                <label className="text-start text-lg font-bold mb-2" htmlFor="paradas">Paradas:</label>
                <input className="rounded-md max-h-10 border border-gray-300 text-base py-2 px-10 mx-10" type="text" id="apellido" name="apellido" required />
              </div>
              <div className="flex flex-col items-start my-4 max-w-350px">
                <label className="text-start text-lg font-bold mb-2" htmlFor="paradas">Hora de salida:</label>
                <input className="rounded-md max-h-10 border border-gray-300 text-base py-2 px-20 mx-10" type="time" id="apellido" name="apellido" required />
              </div>
              <div className="flex flex-col items-start my-4 max-w-350px">
                <label className="text-start text-lg font-bold mb-2" htmlFor="telefono">Chofer:</label>
                <input className="rounded-md max-h-10 border border-gray-300 text-base py-2 px-10 mx-10" type="text" id="telefono" name="telefono" required />
              </div>
              <button type="submit" className="bg-blue-700 rounded-md border-none w-full text-white cursor-pointer text-lg font-bold py-3 px-6 transition duration-300 hover:bg-blue-600 my-4">
                Insertar
              </button>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default ModificarRuta;