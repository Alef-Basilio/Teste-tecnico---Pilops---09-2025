import { useEffect, useState } from 'react';
import './App.css';

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
  const [backendData, setBackendData] = useState<{ flights: Flight[] } | null>(null);

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

  const allCards = () => {
    if (backendData === null ) {
      <p>Loadinng...</p>
    } else {
      const data = backendData?.flights;
      
      const cards = data.map((item, index) => (
      <div key={index} className='card'>
        <div className='aircraft column'>
          <h2>{item.aircraft.name}</h2>
          <h3>{item.aircraft.airline}</h3>
        </div>
        <div className='route column'>
          <p className='routeTitle'>Trajeto</p>
          <div className='routeLocal'>
            <span></span>
            <div>
              <p>{item.flightData.route.from}</p>
              <p>{item.flightData.route.to}</p>
            </div>
          </div>
        </div>
        <div className='registration column'>
          <h4>Matrícula</h4>
          <p>{item.aircraft.registration}</p>
        </div>
        <div className='date column'>
          <h4>Data</h4>
          <p>{item.flightData.date}</p>
        </div>
        <div className='balance column'>
          <h4>Saldo</h4>
          <p>P$ {item.flightData.balance}</p>
        </div>
      </div>
    ));

      return cards;
    }
  };

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
          <div className='allCards'>
            {allCards()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
