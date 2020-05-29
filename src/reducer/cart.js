const img1 = require('../Public/Assets/IMG/tshirt.jpg')

const cartState = [
    // { id : 1, image : img1, name : 'Top Up T-Shirt',price : 250,    quantity : 5 },
    // { id : 2, image : img1, name : 'Polo Shoes', price : 550, quantity : 4  },
    // {  id : 3,image : img1, name : ' Shoes', price : 350,quantity : 3  },
]

const cartReducers = (state = cartState , action) => {
    switch(action.type){
        case  'ADD_CART' :{
        return [...state , action.payload]
        }
        case 'REMOVE' : {
            return state.filter(product => product.id != action.payload)
        }

        default : {
        return [...state]
        }
    }

}

export default cartReducers