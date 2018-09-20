//export const isAdult = (x) => (x>=18) ? "yes" : "no";
export const isAdult = (age) => age >= 18;
export const canDrink = (x) => x>=21 ? "yes" : "no";
export default (age) => age >= 65;
