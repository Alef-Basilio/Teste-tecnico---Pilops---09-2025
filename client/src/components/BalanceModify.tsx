function addDecimal (elementChild: HTMLElement): void {
    if (!elementChild.textContent?.includes(',')) {
        if (elementChild.textContent?.includes('.')) {
            const decimalIndex: number = elementChild.textContent.indexOf('.');
            
            elementChild.textContent = `${elementChild.textContent.slice(0, decimalIndex)},${elementChild.textContent.slice(decimalIndex + 1, decimalIndex + 3)}`;
        } else {
            elementChild.textContent = `${elementChild.textContent},00`;
        }
    }

    if (elementChild.textContent.indexOf('.') === -1) {
        if (elementChild.textContent.includes('P')) {
            if (elementChild.textContent[0] === '-' && elementChild.textContent.length > 11) {
                elementChild.textContent = `${elementChild.textContent.slice(0, 6)}.${elementChild.textContent.slice(6, elementChild.textContent.length)}`;
            } else if (elementChild.textContent.indexOf('-') === -1 && elementChild.textContent.length > 9) {
                elementChild.textContent = `${elementChild.textContent.slice(0, 4)}.${elementChild.textContent.slice(4, elementChild.textContent.length)}`;
            } else if (elementChild.textContent.indexOf('-') === -1 && elementChild.textContent.length > 9) {
                elementChild.textContent = `${elementChild.textContent.slice(0, 1)}.${elementChild.textContent.slice(1, elementChild.textContent.length)}`;
            }
        } else {
            if (elementChild.textContent[0] === '-' && elementChild.textContent.length > 7) {
                elementChild.textContent = `${elementChild.textContent.slice(0, 2)}.${elementChild.textContent.slice(2, elementChild.textContent.length)}`;
            } else if (elementChild.textContent.indexOf('-') === -1 && elementChild.textContent.length > 9) {
                elementChild.textContent = `${elementChild.textContent.slice(0, 4)}.${elementChild.textContent.slice(4, elementChild.textContent.length)}`;
            } else if (elementChild.textContent.indexOf('-') === -1 && elementChild.textContent.length > 6) {
                elementChild.textContent = `${elementChild.textContent.slice(0, 1)}.${elementChild.textContent.slice(1, elementChild.textContent.length)}`;
            }
        }
    }
}

export default function BalanceModify (balance: number | undefined): string {
    const balanceElement: HTMLCollection = (document.getElementsByClassName('balance') as HTMLCollectionOf<HTMLElement>);
    const balancePElement: HTMLElement = (document.getElementsByClassName('detailsScreenRewardColumn') as HTMLCollectionOf<HTMLElement>)[0];
    const detailsBalance: HTMLElement = (document.getElementById('detailsBalance') as HTMLElement);
    
    for (let i = 0; i < balanceElement.length; i++) {
        const balanceElementChild: HTMLElement = balanceElement[i].lastChild as HTMLElement;

        if (!balanceElementChild.textContent?.includes('-')) {
            balanceElementChild.style.color = '#00FF88';
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

    if (String(balance).indexOf('-') === -1) {
        return `P$ ${balance}`;
    } else {
        const newBalance: string = String(balance).replaceAll('-', '');

        return `- P$ ${newBalance}`;
    }
}