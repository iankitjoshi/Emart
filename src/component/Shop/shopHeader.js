import React from 'react'
import Cards from './card'

class ShopHeader extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className="shopAllss-div">
                <div class="container">
                    <div class="row">

                        <h5 className="shopall-h5" >Shop All </h5>
                        <button className="latest-btn  btn btn-light">LATEST</button>
                        <button className="ref-btn  btn btn-light">REFERENCE</button>

                    </div>
                </div>
                <Cards />
                {/* <Cards />
                <Cards /> */}
                
            </div>
        )
    }
}

export default ShopHeader