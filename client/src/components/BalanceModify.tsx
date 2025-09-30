function addDecimal (elementChild: HTMLElement) {
    if (!elementChild.textContent?.includes(',')) {
        if (elementChild.textContent?.includes('.')) {
            const decimalIndex = elementChild.textContent?.indexOf('.');
            elementChild.textContent = `${elementChild.textContent.slice(0, decimalIndex)},${elementChild.textContent.slice(decimalIndex + 1, decimalIndex + 3)}`;
        } else {
            elementChild.textContent = `${elementChild.textContent},00`;
        }
    }
    
    /*var newElementChild = elementChild;
    if(elementChild.textContent.split('').length > 6) {
        var pointIndex = 3;

        for (let i = 3; i < elementChild.textContent?.split('').length; i = i + 3) {
            pointIndex += i;
            newElementChild.innerHTML += `${elementChild.textContent?.slice(0, pointIndex)}.`;
        }

        if (pointIndex >= elementChild.textContent?.split('').length) {
            newElementChild.innerHTML += `${elementChild.textContent?.slice(newElementChild.textContent.length, elementChild.textContent.length)}`;
        }
    }

    console.log(newElementChild);*/
}

export default function BalanceModify (balance: number | undefined) {
    const balanceElement = (document.getElementsByClassName('balance') as HTMLCollectionOf<HTMLElement>);
    const balancePElement = (document.getElementsByClassName('detailsScreenRewardColumn') as HTMLCollectionOf<HTMLElement>)[0];
    const detailsBalance = (document.getElementById('detailsBalance') as HTMLElement);
    
    for (let i = 0; i < balanceElement.length; i++) {
        const balanceElementChild = balanceElement[i].lastChild as HTMLElement;

        if (!balanceElementChild.textContent?.includes('-')) {
            balanceElementChild.style.color = '#00FF88';
            detailsBalance.style.color = '#00FF88';
        } else {
            balanceElementChild.style.color = '#FF0000';
        }

        addDecimal(balanceElementChild);
    }

    if (balance !== undefined && balancePElement.lastChild && balancePElement.lastChild.firstChild) {
        if (balance > 0) {
            balancePElement.lastChild.firstChild.textContent = 'Ganhos totais';
            detailsBalance.style.color = '#00FF88';
        } else {
            balancePElement.lastChild.firstChild.textContent = 'Perdas totais';
            detailsBalance.style.color = '#FF0000';
        }

        addDecimal(detailsBalance);
    }

    return `P$ ${balance}`;
}