

function Registrarconsumo() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-4">Registrar consumo</h2>
          <div className="mb-4">
            <label htmlFor="ruta" className="block text-gray-700 font-bold mb-2">
              Ruta:
            </label>
            <input
              type="text"
              id="ruta"
              name="ruta"
              required
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="consumo" className="block text-gray-700 font-bold mb-2">
              Consumo:
            </label>
            <input
              type="number"
              id="consumo"
              name="consumo"
              required
              className="border border-gray-700 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-gray-700 font-bold mb-2">
              Fecha:
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
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

export default Registrarconsumo;