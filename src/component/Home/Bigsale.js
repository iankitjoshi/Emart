import React from 'react'
import '../../CSS/Emart.css'

const img = require('../../IMG/shopping.jpg')

class BigSale extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                .
                <h4 className="h4-div">Big Sale!</h4>
                <br/>
                        <div class="row row-cols-2">
                            <div class="col">
                                <img src={img} className="bigsale-img" />
                            </div>
                            <div class="col  col-less">
                                <h3 className="h3-less-in">50% Less in all items</h3>
                                <p>By <span className="car-smith">Car Smith</span> . September 2019</p>
                                <p>This is the Best for you to sopping in this occasion do shopping with any worry and get the attractrive discount. Do Shopping more get the Discount more.</p>
                                <button type="button" class="shop-now  btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                    <hr/>
            </div>
        )
    }
} 

export default BigSale