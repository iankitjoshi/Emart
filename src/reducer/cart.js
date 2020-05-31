const img1 = require('../Public/Assets/IMG/tshirt.jpg')

const cartState = [
    // { id : 1, image : img1, name : 'Top Up T-Shirt',price : 250,    quantity : 5 },
    // { id : 2, image : img1, name : 'Polo Shoes', price : 550, quantity : 4  },
    // {  id : 3,image : img1, name : ' Shoes', price : 350,quantity : 3  },
]

const cartReducers = (state = cartState , action) => {
    switch(action.type){
        case  'ADD_CART' :{
        // return state.find(function(item){
        //     if(item.id == action.payload.id){
        //         return {...item, quantity: item.quantity + 1}
        //     } else {
        //         // [...state , action.payload]
        //     }
        // })
        return [...state , action.payload]
    }
        
        
        case 'REMOVE' : {
            return state.filter(product => product.id != action.payload)
        }

        case 'INCREASE' : {
            return state.map(item =>{
                if(item.id == action.payload.id){
                    return {...item, quantity: item.quantity + 1};
                }
                return item;;
            })
        }

        case 'DECREASE' : {
            return state.map(item =>{
                if(item.id == action.payload.id){
                    return {...item, quantity: item.quantity - 1};
                }
                return item;;
            })
        }

        default : {
        return [...state]
        }
    }

}

export default cartReducers

// return state.map(function(department){
//     if(department.id == action.payload.id){
//         return {...department, ...action.payload.department}
//     }else 
//         return {...department}
// })

// function add2Cart(state,item){
//     const result = state.find(function(cartItem){
//         return cartItem.id == item.id
//     })
//     console.log(result,'result in reducer1')

//     if(result){
//         result.quantity = result.quantity + item.quantity
//     } else {
//         state.push(item)
//     }
//     console.log(result,'result in reducer2')
// }