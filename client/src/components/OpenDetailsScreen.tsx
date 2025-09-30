"use client";

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

function childrenElements (element: HTMLElement, values: string[]) {
    const children = element.children;

    for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        child.innerHTML = values[i];
    }
}

function changeDetailsScreenCard (item: Flight | null | undefined, card: HTMLElement) {
    const aircraft = card.getElementsByClassName('aircraft')[0] as HTMLElement;
    const routeLocalDiv = card.getElementsByClassName('routeLocal')[0].lastChild as HTMLElement;
    const registration = card.getElementsByClassName('registration')[0] as HTMLElement;
    const date = card.getElementsByClassName('date')[0] as HTMLElement;

    childrenElements(aircraft, [String(item?.aircraft.name), String(item?.aircraft.airline)]);
    childrenElements(routeLocalDiv, [String(item?.flightData.route.from), String(item?.flightData.route.to)]);
    childrenElements(registration, ['Matrícula', String(item?.aircraft.registration)]);
    childrenElements(date, ['Data', DateModify(String(item?.flightData.date))]);
    BalanceModify(item?.flightData.balance);
}

export default function OpenDetailsScreen ({ item, index }: { item?: Flight | null | undefined, index?: number } = {}) {
    const headerElement = (document.body.getElementsByClassName('header')[0] as HTMLElement);
    const mainElement = (document.body.getElementsByTagName('main')[0] as HTMLElement);
    const mainContentElement = (document.body.getElementsByClassName('mainContent')[0] as HTMLElement);
    const detailsScreenElement = (document.body.getElementsByClassName('detailsScreen')[0] as HTMLElement);
    const detailsBalance = (document.getElementById('detailsBalance') as HTMLElement);
    const detailsXp = (document.getElementById('detailsXp') as HTMLElement);
    const detailsBonus = (document.getElementById('detailsBonus') as HTMLElement);
    const detailsScreenCard = detailsScreenElement.getElementsByClassName('allCards')[0] as HTMLElement;

    if (headerElement.classList.contains('open')) {
        mainElement.style.marginTop = '45px';
        mainContentElement.style.top = '0px';
        detailsScreenElement.style.display = 'none';
        detailsScreenElement.style.position = 'relative';
        document.body.style.overflowY = 'auto';
    } else {
        detailsBalance.innerHTML = String(item?.flightData.balance);
        detailsXp.innerHTML = String(item?.flightData.xp);
        detailsBonus.innerHTML = `${item?.flightData.missionBonus.toFixed(2)}%`;

        changeDetailsScreenCard(item, detailsScreenCard);

        mainElement.style.marginTop = '0px';
        mainContentElement.style.top = '218.262px';
        detailsScreenElement.style.display = 'flex';
        detailsScreenElement.style.position = 'fixed';
        document.body.style.overflowY = 'hidden';
    }

    headerElement.classList.toggle('open');
    detailsScreenElement.classList.toggle('open');
}