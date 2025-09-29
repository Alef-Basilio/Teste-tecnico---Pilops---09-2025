"use client";

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

export default function DetailsScreen ({ item, index }: { item?: Flight | null | undefined, index?: number } = {}) {
    //const detailsScreenStyleElement = (document.body.getElementsByClassName('detailsScreen')[0] as HTMLElement);
    //detailsScreenStyleElement.classList.toggle('open');
    
    return (
        <div className='detailsScreen'>
        <div className='detailsScreenSpace'>
            <div className='detailsScreenClose'>
                <span onClick={() => OpenDetailsScreen()}></span>
                <button>Detalhes do voo</button>
            </div>
            <div className='detailsScreenContent'>
            <div className='detailsScreenRewardSection'>
                <div className='detailsScreenRewardTitle'>
                    <span></span>
                    <p>Recompensas</p>
                </div>
                <div className='detailsScreenRewardContent'>
                <div className='detailsScreenRewardColumn'>
                    <span className='detailsScreenRewardPrice'>P$</span>
                    <div>
                        <p>Ganhos totais</p>
                        <p>{item?.flightData.balance}</p>
                    </div>
                </div>
                <div className='detailsScreenRewardColumn'>
                    <span></span>
                    <div>
                        <p>XP CONQUISTADO</p>
                        <p>{item?.flightData.xp}</p>
                    </div>
                </div>
                <div className='detailsScreenRewardColumn'>
                    <span></span>
                    <div>
                        <p>Bônus de missão</p>
                        <p>{item?.flightData.missionBonus}%</p>
                    </div>
                </div>
                </div>
            </div>
            <div>

            </div>
            </div>
        </div>
        </div>
    );
}