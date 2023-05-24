import Header from "./Header";
import BasicExample from "../Components/Sidebar"
function InsertarUsuario() {
    return (
      <>
      <Header/>

      <BasicExample/>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md w-full max-w-sm">
          <div className="p-6">
            <form className="flex flex-col items-center ">
              <div className="block text-center text-2xl font-bold mb-4">
                <h2>Insertar Usuario</h2>
              </div>
              <div className="flex flex-col items-start my-4 max-w-350px">
                <label className="text-start text-lg font-bold mb-2" htmlFor="Usuario">Nombre de usuario:</label>
                <input className="rounded-md max-h-10 border border-gray-300 text-base py-2 px-10 mx-2" type="text" id="Usuario" name="Usuario" required />
              </div>
              <div className="flex flex-col items-start my-4 max-w-350px">
                <label className="text-start text-lg font-bold mb-2" htmlFor="Contraseña">Contraseña:</label>
                <input className="rounded-md max-h-10 border border-gray-300 text-base py-2 px-10 mx-2" type="password" id="contraseña" name="contraseña" required />
              </div>
              <div className="flex flex-col items-start my-4 max-w-350px">
                <label className="text-start text-lg font-bold mb-2" htmlFor="Rol">Rol:</label>
                <input className="rounded-md max-h-10 border border-gray-300 text-base py-2 px-10 mx-2" type="text" id="Rol" name="Rol" required />
              </div>
              <div className="flex flex-col items-center mx-2 ">
                <button type="submit" className="bg-blue-700 rounded-md border-none w-3/2 text-white cursor-pointer text-md font-bold py-3 px-20 transition duration-300 hover:bg-blue-600 my-2">
                  Insertar
                </button>
                <button type="submit" className="bg-red-600 rounded-md border-none w-3/2 text-white cursor-pointer text-md font-bold py-3 px-20 transition duration-300 hover:bg-red-500 my-2">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default InsertarUsuario;