/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objets
 * @returns {number} Total price
 */

export const totalPrice = (products) => {

    let cont= 0;
    products.map(product => cont += product.price)

    return cont;
}
