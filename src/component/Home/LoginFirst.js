import React from 'react'
import Emart from './header'
import Menu from './MenuBar'
import Navigation from './footer'
import LModal from './LModal'
import RModal from './RModal'
import { Link } from 'react-router-dom'



class LoginFirst extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Emart />

                <Menu />
                

                    <div className="login-first-container  container">
                    <link href="https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap" rel="stylesheet" />

                        <br /><br />
                        <h2 className="h2-font">You Need to Login First...!!</h2>
                        <h4 className="h4-font">You Need to Login to Access this Page.</h4>
                        <br/>
                        <div class="row">
                            <div class="col">
                            <LModal />
                            </div>

                            <div class="col">
                            <RModal />
                            </div>

                        </div>
                        
                        <br />
                        

                        <Link to="/shop" className="link"> Back to Shop </Link>
                    </div>
                    <hr />
                    
                <Navigation />
            </div>
        )
    }
}

export default LoginFirst