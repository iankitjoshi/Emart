import React from 'react'
import Emart from '../Home/Emart'
import CNav from './CartNav'
import MenuBar from '../Home/MenuBar'
import Navigation from '../Home/Navigation'
import Table from './table'

function Cart(){
    return(
        <div>

        <Emart />

        <MenuBar />

        <CNav />

        <Table />
        
        <Navigation />

        </div>
    )
}

export default Cart