import { HiUserCircle, HiLockClosed } from "react-icons/hi";
import LogoImage from "../IMG/favicon.ico";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
        <div className="flex justify-center items-center mb-10">
          <img src={LogoImage} alt="Logo" className="w-12 h-12 mr-2" />
        </div>
        <div className="mb-5 flex justify-center items-center">
          <h2 className="text-2xl font-medium text-blue-900">Iniciar sesión</h2>
        </div>
        <form>
          <div className="mb-10">
            <div className="relative">
              <label

                htmlFor="email"
                className="leading-7 text-lg text-gray-600"
              >
                Usuario
              </label>
              <div className="flex">
                <div className="flex items-center">
                  <HiUserCircle className="text-gray-500 text-2xl mr-2" />
                </div>
                <input
                  type="text"
                  id="text"
                  name="text"
                  autoComplete="text"
                  className="w-full px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out mr-3"
                 required/>
              </div>
            </div>
          </div>
          <div className="mb-10 ">
            <div className="relative">
              <label
                htmlFor="password"
                className="leading-7 text-lg text-gray-600"
              >
                Contraseña
              </label>
              <div className="flex">
              <div className="flex items-center">
                <HiLockClosed className="text-gray-500 mr-2 text-2xl" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                className="w-full px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out mr-3"
             required />
            
            </div>
              </div>
            
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className=" mr-4 my-2 w-full block bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out text-center"
            >
              Iniciar 
            </button>

            <button
              type="submit"
              className=" ml-4 my-2 w-full block bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out text-center"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
