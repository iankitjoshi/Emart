import React from 'react'
import '../../CSS/Emart.css'


const img = require('../../IMG/men.jpg')
const img1 = require('../../IMG/women1.jpg')
const img2 = require('../../IMG/kids1.jpg')

class Collection extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
            <br/><br/><br/>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@767&display=swap" rel="stylesheet" />

                <div className="row row-cols-3   row-div ">

                    <div className="col  " >
                        <img src={img}  className="collectoin-img"  />
                        <h3 className="men">Men</h3>
                        <h5 className="collection">Collection</h5>
                    </div>  

                    <div className="col  " >
                        <img src={img1} className="collectoin-img"  />
                        <h3 className="men">Women</h3>
                        <h5 className="collection">Collection</h5>
                    </div>  

                    <div className="col  " >
                        <img src={img2} className="collectoin-img"  />
                        <h3 className="men">Kids</h3>
                        <h5 className="collection">Collection</h5>
                    </div>  

                </div>
            </div>
        )
    }
}

export default Collection