import React from 'react'

class Nav extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className="nav-div">
                
                <nav class="navbar navbar-light bg-light">
                    <h6 className="h6-about-nav"><span className="home-text">Home / </span> Shop</h6> 
                </nav>

            </div>
        )
    }
}

export default Nav