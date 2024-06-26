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
      <div className="flex flex-col h-screen ">

            <Header onClick={handleChildClick} />

          <div className="flex-1 flex ">

            <Sidebar hide={eventResult} />

            <main className="flex-1 p-4 ">
                <Outlet />
            </main>

          </div>

      </div>
    </>
  )
}

export default App
