export const addCart = (product) => {
    return {type : 'ADD_CART',payload : product}
}

export const removeCart = (id) => {
    return {type : 'REMOVE' , payload : id }
}

export const quantityIncrease = (id) => {
    return {type : 'INCREASE', payload : id
 }
}

export const quantityDecrease = (id) => {
    return {type : 'DECREASE',payload : id }
}