import React from 'react'
import Nav from './Nav'
import Emart from '../Home/header'
import MenuBar from '../Home/MenuBar'
import HowStart from './HowWeStart'
import Team from './Team'
import Shipping from '../Home/Shipping'
import Navigation from '../Home/footer'

function About(){
    return(
        <div>
            <Emart />

            <MenuBar />

            <Nav />

            <HowStart />

            <Team />

            <Shipping />

            <Navigation />
        </div>
    )
}

export default About