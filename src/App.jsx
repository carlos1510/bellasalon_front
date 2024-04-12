import * as React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    const [eventResult, setEventResult] = React.useState(null);

    const handleChildClick = (result) => {
        // Hacer algo con el resultado, como establecerlo en el estado del componente padre
        setEventResult(result);
      };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">

            <Header onClick={handleChildClick} />

          <div className="flex-1 flex">

            <Sidebar hide={eventResult} />

            <main className="flex-1 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2">
                    <Outlet />
                </div>
            </main>

          </div>

      </div>
    </>
  )
}

export default App
