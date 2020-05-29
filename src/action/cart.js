export const addCart = (product) => {
    return {type : 'ADD_CART',payload : product}
}

export const removeCart = (id) => {
    return {type : 'REMOVE' , payload : id }
}