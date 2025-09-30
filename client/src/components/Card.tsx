"use client";

import ReactDOM from 'react-dom';
import { JSX } from 'react';
import DetailsScreen from './DetailsScreen';
import OpenDetailsScreen from "./OpenDetailsScreen";

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

interface CardProps {
  data?: Flight[] | null | undefined;
}

export default function Card ({ data }: CardProps) {
    const detailsScreenElement = (document.body.getElementsByClassName('detailsScreen')[0] as HTMLElement);
    const detailsScreenCard = detailsScreenElement.getElementsByClassName('allCards')[0] as HTMLElement;
    const cardElement = createDetailsCard();
    ReactDOM.createRoot(detailsScreenCard).render(cardElement);

    if (data === null || data === undefined) {
        return <p>Carregando...</p>;
    } else {
        return (
            <>
                {data?.map((item, index) => (
                    <div key={index} className='card' onClick={() => cardClicked(item, index)}>
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
                ))}
            </>
        );
    }
}

function createDetailsCard (): JSX.Element {
    return (
        <div className='card'>
            <div className='aircraft column'>
                <h2>Carregando...</h2>
                <h3>Carregando...</h3>
            </div>
            <div className='route column'>
                <p className='routeTitle'>Trajeto</p>
                <div className='routeLocal'>
                    <span></span>
                    <div>
                        <p>Carregando...</p>
                        <p>Carregando...</p>
                    </div>
                </div>
            </div>
            <div className='registration column'>
                <h4>Matrícula</h4>
                <p></p>
            </div>
            <div className='date column'>
                <h4>Data</h4>
                <p>Carregando...</p>
            </div>
            <div className='balance column'>
                <h4>Saldo</h4>
                <p>Carregando...</p>
            </div>
        </div>
    );
    
}

function cardClicked (item?: Flight | null | undefined, index?: number) {
    DetailsScreen({ item, index });
    OpenDetailsScreen({ item, index });
}