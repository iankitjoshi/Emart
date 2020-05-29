import {createStore , combineReducers} from 'redux'
import cartReducers from '../reducer/cart'

const configureStore = () => {
    const store = createStore(combineReducers({
        carts : cartReducers,
    }))
    return store
}

export default configureStore