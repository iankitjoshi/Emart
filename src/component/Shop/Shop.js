import React from 'react'
import Emart from '../Home/Emart'
import Nav from './Nav'
import Menu from '../Home/MenuBar'
import Navigation from '../Home/Navigation'
import Collection from '../Home/Collection'
import ShopAll from './ShopAll'

function Shop(){
    return(
        <div>

            <Emart />

            <Menu />

            <Nav />

            {/* <ShopAll /> */}
            
            <hr />
            <h4 style={{textAlign:'center'}}>Categroies</h4>
            <Collection />

            <hr />

            <Navigation />
        </div>
    )
}

export default Shop