import React from 'react'

import Emart from './header'
import Menu from './MenuBar'
import Sliders from './Slider'
import Shipping from './Shipping'
import Collection from './Collection'
import Featured from './Featured'
import BigSale from './Bigsale'
import Navigation from './footer'


function FullHome(){
    return(
        <div>

        <Emart />

        <Menu />

        <Sliders />

        <Shipping />

        <Collection />

        <Featured />

        <BigSale />

        <Navigation />

        </div>
    )
}

export default FullHome