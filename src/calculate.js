// import { of, reduce } from "core-js/core/array";

// function calculateTotal(purchases) {
//     let result = 0;
//     for (let i = 0; i < purchases.length; i++) {
//         result += purchases[i].count * purchases[i].price;
//     }
//     return result;
// }

// module.exports = {
//     calculateTotal
// }

// Jest: import/export

// export function calculateTotal(purchases) {
//     let result = 0;
//     for (let i = 0; i < purchases.length; i++) {
//         result += purchases[i].count * purchases[i].price;
//     }
//     return result;
// }

// Использование метода массива reduce вместо цикла for...of

// export function calculateTotal(purchases) {
//     return purchases.reduce((total, item) => {
//         return total + (item.count * item.price);
//     }, 0);
// }

export default function calculateTotal(purchases, applyDiscount) {
    const sum = purchases.reduce((total, item) => {
        return total + (item.count * item.price);
    }, 0);

    if (applyDiscount) {
        return sum * 0.5;
    }
    return sum;
}
