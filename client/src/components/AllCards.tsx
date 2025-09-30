"use client";

import { Card } from './Card';

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

interface AllCardsProps {
  backendData?: { flights: Flight[] } | null | undefined;
}

export default function AllCards ({ backendData }: AllCardsProps) {
    if (backendData === null || backendData === undefined) {
        return <p>Carregando...</p>
    } else {
        const data = backendData?.flights;
        return (
            <div className='allCards'>
                <Card data={data}/>
            </div>
        );
    }
};