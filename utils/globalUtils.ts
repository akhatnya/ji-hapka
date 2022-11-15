export function kzt(num: any) {
    return num !== undefined ? (num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " ₸") : ""
 }