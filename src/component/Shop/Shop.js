import React from 'react'
import Emart from '../Home/header'
import Nav from './Nav'
import Menu from '../Home/MenuBar'
import Navigation from '../Home/footer'
import Collection from '../Home/Collection'
import ShopAlls from './ShopAlls'
import ShopAllss from './shopHeader'


function Shop(){
    return(
        <div>

            <Emart />

            <Menu />

            <Nav />


            <ShopAlls />
            
            {/* <ShopAllss /> */}
            <hr />
            <h4 style={{textAlign:'center'}}>Categroies</h4>
            <Collection />

            <hr />

            <Navigation />
        </div>
    )
}

export default Shop