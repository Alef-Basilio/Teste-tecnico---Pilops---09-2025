import { JSX, useEffect, useState, Suspense, lazy } from 'react';
import { Flight } from './types/Flight';

import './App.css';

import DetailsScreen from './components/DetailsScreen';
const AllCards = lazy(() => import('./components/AllCards'));

function App(): JSX.Element {
  const [backendData, setBackendData] = useState<{ flights: Flight[] } | null | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  const fetchFlights: () => void = () => {
    fetch('https://teste-tecnico-pilops-rugl.onrender.com/flights', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .catch((error) => {
        console.error(error);
        setBackendData(null);
      });
  };

  useEffect(() => {
    fetchFlights();
  }, [isReady]);

  useEffect(() => {
    setInterval(() => {
      if (!isReady) {
        setIsReady(true);
      }
    }, 1000);
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
              <Suspense>
                {isReady ? (
                  <AllCards backendData={backendData}/>
                  ) : (
                  <p>Carregando...</p>
                  )
                }
              </Suspense>
          </div>
          <DetailsScreen/>
      </main>
    </div>
  );
}

export default App;