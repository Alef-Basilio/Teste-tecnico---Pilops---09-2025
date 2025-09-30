"use client";

import { JSX } from 'react';
import DetailsScreen from './DetailsScreen';
import OpenDetailsScreen from "./OpenDetailsScreen";
import DateModify from './DateModify';
import BalanceModify from './BalanceModify';

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

function cardClicked (item?: Flight | null | undefined, index?: number) {
    DetailsScreen({ item, index });
    OpenDetailsScreen({ item, index });
}

function Card ({ data }: CardProps) {
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
                            <p>{DateModify(item.flightData.date)}</p>
                        </div>
                        <div className='balance column'>
                            <h4>Saldo</h4>
                            <p>{BalanceModify(item.flightData.balance)}</p>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

function CreateDetailsCard (): JSX.Element {
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
                        <p></p>
                    </div>
                </div>
            </div>
            <div className='registration column'>
                <h4>Matrícula</h4>
                <p>Carregando...</p>
            </div>
            <div className='date column'>
                <h4>Data</h4>
                <p>Carregando...</p>
            </div>
        </div>
    );
    
}

export { Card, CreateDetailsCard };