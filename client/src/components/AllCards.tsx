import { Flight } from '../types/Flight';
import { JSX } from 'react';
import { Card } from './Card';

interface AllCardsProps {
  backendData?: { flights: Flight[] } | null | undefined;
}

export default function AllCards ({ backendData }: AllCardsProps): JSX.Element {
    const data: Flight[] | undefined = backendData?.flights;
    
    return (
        <div className='allCards'>
            <Card data={data}/>
        </div>
    );
};