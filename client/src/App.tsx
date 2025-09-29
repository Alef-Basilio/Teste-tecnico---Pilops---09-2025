import { useEffect, useState } from 'react';
import './App.css';

import AllCards from './components/AllCards';

function App() {
  interface Flight {
    id: string;
    aircraft: {
      name: string;
      registration: string;
      airline: string;
    };
    flightData: {
      date: string;
      balance: number;
      route: {
        from: string;
        to: string;
      },
      xp: number;
      missionBonus: number;
    };
  }
  
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
      <title>Pilops - Histórico de Voos</title>
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
      </main>
    </div>
  );
}

export default App;