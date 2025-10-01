export default function DateModify (date: string): string {
    const year: string = date.slice(0, 4);
    const month: string = date.slice(5, 7);
    const day: string = date.slice(8, 10);
    const newDate: string = `${day}/${month}/${year}`
    
    return newDate;
}