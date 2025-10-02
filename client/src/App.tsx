import { JSX, useEffect, useState, Suspense, lazy } from 'react';
import { Flight } from './types/Flight';

import './App.css';

import DetailsScreen from './components/DetailsScreen';
const AllCards = lazy(() => import('./components/AllCards'));

function App(): JSX.Element {
  const [backendData, setBackendData] = useState<{ flights: Flight[] } | null | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  const fetchFlights = () => {
    fetch('/flights', {
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

    const interval = setInterval(fetchFlights, 3000);
    
    if (isReady) {
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isReady) {
        setIsReady(true);
      }
    }, 1000);
    return () => clearInterval(timer);
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
            <Suspense fallback={<p>Carregando...</p>}>
              {isReady ? (
                <AllCards backendData={backendData}/>
              ): (
                null
              )}
            </Suspense>
          </div>
          <DetailsScreen/>
      </main>
    </div>
  );
}

export default App;