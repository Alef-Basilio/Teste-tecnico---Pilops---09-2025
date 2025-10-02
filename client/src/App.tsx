import { JSX, useEffect, useState, Suspense, lazy } from 'react';
import { Flight } from './types/Flight';

import './App.css';

import DetailsScreen from './components/DetailsScreen';
//const AllCards = lazy(() => import('./components/AllCards'));
import AllCards from './components/AllCards';

function App(): JSX.Element {
  const [backendData, setBackendData] = useState<{ flights: Flight[] } | null | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  const fetchFlights = () => {
    fetch('http://localhost:5000/flights', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .catch((error) => {
        console.error(error);
        //setBackendData(null);
      });
  };
  //fetchFlights();

  /*setTimeout(() => {
    console.log('1');
    fetchFlights();
  }, 1000);*/

  useEffect(() => {
    console.log(isReady + '1');
    fetchFlights();
  }, [isReady]);

  useEffect(() => {
    console.log(isReady + '2');
    setInterval(() => {
    console.log(isReady + '3');
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
                <AllCards backendData={backendData}/>
          </div>
          <DetailsScreen/>
      </main>
    </div>
  );
}

export default App;