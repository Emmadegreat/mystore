// add to cart
export const addCart=(product) => {
    return {
        type: "ADDITEM",
        payload : product
    }
}
//deleteItem
export const delCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}