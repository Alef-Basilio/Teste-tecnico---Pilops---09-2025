import { Flight } from '../types/Flight';
import DateModify from './DateModify';
import BalanceModify from './BalanceModify';
import BonusModify from './BonusModify';

function childrenElements (element: HTMLElement, values: string[]): void {
    const children: HTMLCollectionOf<Element> = element.children;

    for (let i = 0; i < children.length; i++) {
        const child: HTMLElement = children[i] as HTMLElement;
        child.innerHTML = values[i];
    }
}

function changeDetailsScreenCard (item: Flight | null | undefined, card: HTMLElement): void {
    const aircraft: HTMLElement = card.getElementsByClassName('aircraft')[0] as HTMLElement;
    const routeLocalDiv: HTMLElement = card.getElementsByClassName('routeLocal')[0].lastChild as HTMLElement;
    const registration: HTMLElement = card.getElementsByClassName('registration')[0] as HTMLElement;
    const date: HTMLElement = card.getElementsByClassName('date')[0] as HTMLElement;

    childrenElements(aircraft, [String(item?.aircraft.name), String(item?.aircraft.airline)]);
    childrenElements(routeLocalDiv, [String(item?.flightData.route.from), String(item?.flightData.route.to)]);
    childrenElements(registration, ['Matrícula', String(item?.aircraft.registration)]);
    childrenElements(date, ['Data', DateModify(String(item?.flightData.date))]);
    BalanceModify(item?.flightData.balance);
}

export default function OpenDetailsScreen ({ item, index }: { item?: Flight | null | undefined, index?: number } = {}): void {
    const headerElement: HTMLElement = (document.body.getElementsByClassName('header')[0] as HTMLElement);
    const mainElement: HTMLElement = (document.body.getElementsByTagName('main')[0] as HTMLElement);
    const mainContentElement: HTMLElement = (document.body.getElementsByClassName('mainContent')[0] as HTMLElement);
    const detailsScreenElement: HTMLElement = (document.body.getElementsByClassName('detailsScreen')[0] as HTMLElement);
    const detailsBalance: HTMLElement = (document.getElementById('detailsBalance') as HTMLElement);
    const detailsXp: HTMLElement = (document.getElementById('detailsXp') as HTMLElement);
    const detailsBonus: HTMLElement = (document.getElementById('detailsBonus') as HTMLElement);
    const detailsScreenCard: HTMLElement = detailsScreenElement.getElementsByClassName('allCards')[0] as HTMLElement;

    if (headerElement.classList.contains('open')) {
        mainElement.style.marginTop = '45px';
        mainContentElement.style.top = '0px';
        detailsScreenElement.style.display = 'none';
        detailsScreenElement.style.position = 'relative';
        document.body.style.overflowY = 'auto';
    } else {
        detailsBalance.innerHTML = String(item?.flightData.balance);
        detailsXp.innerHTML = String(item?.flightData.xp);
        detailsBonus.innerHTML = String(BonusModify(item?.flightData.missionBonus));

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