import { JSX, useEffect, useState } from 'react';
import { Flight } from './types/Flight';

import './App.css';

import AllCards from './components/AllCards';
import DetailsScreen from './components/DetailsScreen';

function App(): JSX.Element {
  const [backendData, setBackendData] = useState<{ flights: Flight[] } | null | undefined>(undefined);

  useEffect(() => {
    fetch('/flights', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => setBackendData(data));
  }, []);

  return (
    <div className='app'>
      <header className='header'>
        <div className='headerContent'>
          <span></span>
          <p>Your virtual pilot career for Flight Simulator</p>
        </div>
      </header>
      <main>
        <div className='mainContent'>
          <div className='mainContentText'>
            <h1>Histórico de Voos</h1>
            <p className='mainContentDescription'>Visualize seu histórico completo de voos realizados</p>
          </div>
          <AllCards backendData={backendData}/>
        </div>
        <DetailsScreen/>
      </main>
    </div>
  );
}

export default App;