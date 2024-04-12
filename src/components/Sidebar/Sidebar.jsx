import { Link } from "react-router-dom";


function Sidebar({hide}){
    
    return (
        <div className={hide ? "p-2 bg-white w-60 flex flex-col hidden md:flex" : "p-2 bg-white w-60 flex flex-col md:flex"} id="sideNav">
                <nav>
                    <Link to="/" className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white">
                        <i className="fas fa-home mr-2"></i>Inicio
                    </Link>

                    <Link to="/service" className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white">
                        <i className="fas fa-file-alt mr-2"></i>Servicio
                    </Link>

                    <Link to="/usuario" className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white">
                        <i className="fas fa-users mr-2"></i>Usuarios
                    </Link>

                    <Link to="" className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white">
                        <i className="fas fa-chart-line mr-2"></i>Reportes
                    </Link>
                </nav>


                <Link to="" className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto">
                    <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
                </Link>
                    
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

              
                <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright CCVC@2024</p>

            </div>
    );
}

export default Sidebar;