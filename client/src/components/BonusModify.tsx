export default function BonusModify (bonus: number | string | undefined): number | string {
    const newBonus: number | string = bonus === 1 ? bonus : Number(bonus)?.toFixed(2);
    const bonusDecimal: number = newBonus === 1 ? newBonus : Number(newBonus) * 100;
    
    return bonusDecimal + '%';
}