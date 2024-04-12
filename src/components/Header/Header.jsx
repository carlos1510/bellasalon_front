import * as React from 'react'

function Header({onClick }){
    const [hide, setHide] = React.useState(true);
    const handleClick = () => {
        // Simular algún tipo de evento o cálculo
        setHide(!hide);
        // Llamar a la función de devolución de llamada proporcionada por el padre con el resultado
        onClick(hide);
      };
    return (
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
            <div className="flex items-center">
                <div className="hidden md:flex items-center"> 
                    <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-28 h-18 mr-2" />
                    <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
                </div>
                <div className="md:hidden flex items-center"> 
                    <button id="menuBtn" onClick={handleClick}>
                        <i className="fas fa-bars text-gray-500 text-lg"></i> 
                    </button>
                </div>
            </div>

            <div className="space-x-5">
                <button>
                    <i className="fas fa-bell text-gray-500 text-lg"></i>
                </button>
            
                <button>
                    <i className="fas fa-user text-gray-500 text-lg"></i>
                </button>
            </div>
        </div>
    );
}

export default Header;