"use client";

import DetailsScreen from './DetailsScreen';

export default function OpenDetailsScreen () {
    const headerElement = (document.body.getElementsByClassName('header')[0] as HTMLElement);
    const mainElement = (document.body.getElementsByTagName('main')[0] as HTMLElement);
    const mainContentElement = (document.body.getElementsByClassName('mainContent')[0] as HTMLElement);
    //const detailsScreenStyleElement = (document.body.getElementsByClassName('detailsScreen')[0] as HTMLElement);
    
    headerElement.classList.toggle('open');

    if (headerElement.classList.contains('open')) {
        mainElement.style.marginTop = '45px';
        mainContentElement.style.top = '0px';
        console.log('open');
        //return document.body.getElementsByClassName('allCards')[0].appendChild(<DetailsScreen/>);
    } else {
        mainElement.style.marginTop = '0px';
        mainContentElement.style.top = '218.262px';
        console.log('close');
        return <DetailsScreen/>
    }
    //detailsScreenStyleElement.classList.toggle('open');
}