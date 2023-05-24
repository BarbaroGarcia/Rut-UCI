import BasicExample from "../Components/Sidebar"
import Header from "./Header";

function SolicitarCombustible() {
  return (
    <>
    <Header/>
    <BasicExample/>
    
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-4">Solicitar combustible</h2>
          <div className="mb-4">
            <label htmlFor="cantidad-solicitada" className="block text-gray-700 font-bold mb-2">
              Cantidad solicitada:
            </label>
            <input
              type="number"
              id="cantidad-solicitada"
              name="cantidad-solicitada"
              required
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha-entrega" className="block text-gray-700 font-bold mb-2">
              Fecha de entrega:
            </label>
            <input
              type="date"
              id="fecha-entrega"
              name="fecha-entrega"
              required
              className="border border-gray-400 p-2 rounded w-full"
                     />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Aceptar
            </button>
            <button type="reset" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolicitarCombustible;