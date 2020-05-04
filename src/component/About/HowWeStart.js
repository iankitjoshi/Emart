import React from 'react'
import '../../CSS/Emart.css'

const img = require('../../IMG/shopping.jpg')

class HowStart extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className="howstart-div">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet" />

            <h1 className="h1__-">___</h1>
                <br/>
                        <div class="row row-cols-2">
                            <div class="col">
                                <img src={img} className="how-we-img" />
                            </div>
                            
                            <div class="col  col-less">
                            
                                <h3 className="h3-we-start">How We Started..</h3>
                                <p className="p-we-start">Over the next few years, Google caught the attention of not only the academic community, but Silicon Valley investors as well. In August 1998, Sun co-founder Andy Bechtolsheim wrote Larry and Sergey a check for $100,000, ae the upgrade from the dorms to their first office.</p>
                                <p className="p-we-start">Over the next few years, Google caught the attentindy Bechtolsheim wrote Larry and Sergey a  a garage in suburban Menlo Park, California, Clunky desktop computers, a ping pong table and bright blue carpet set the scene for those early days and late nights.</p>
                                {/* <button type="button" class="shop-now  btn btn-primary">Shop Now</button> */}
                            </div>
                        </div>
                        <br/><br/><br/>
                    <hr/>
            </div>
        )
    }
} 

export default HowStart