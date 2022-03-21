//use local storage to manage data
const addToData = (id) => {
    let shoppingCart = {}

    //get the shopping cart from local storage
    const storedCard = localStorage.getItem('shopping-cart');
    if (storedCard) {
        shoppingCart = JSON.parse(storedCard);
    }
    else {
        shoppingCart = {};
    }
    //Add Quantity
    const Quantity = shoppingCart[id];
    if (Quantity) {
        const newQuantity = Quantity + 1;
        shoppingCart[id] = newQuantity

        // localStorage.setItem(id, newData)
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}
export { addToData }