import React from 'react'
const img = require('../../Public/Assets/IMG/tshirt1.jpg')
const img1 = require('../../Public/Assets/IMG/shoes.jpg')
const img2 = require('../../Public/Assets/IMG/shoes.jpg')

class Featured extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            

            <div className="feature-div">
                <br />
                <div className="feature-div2">
                <h4 className="h4-div">Featured Products..</h4>
                <br/>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap" rel="stylesheet" />
                <div class="card-deck1 card-deck">
                    
                    <div className="cards-cards  card1  card">
                        <img src={img1} className="card-img  card-img-top" alt="..." /><hr/>
                        <div class="card-body">
                            <h5 className="card-title">T-Shirt</h5>
                            <p className="card-text">Well Fit T-Shirt.</p>
                            <p className="card-text1">200 Rs</p>
                        </div>
                    </div>

                    <div className="cards-cards1 card1 card">
                        <img src={img1} className="card-img  card-img-top" alt="..." /><hr/>
                        <div class="card-body">
                            <h5 className="card-title">T-Shirt</h5>
                            <p className="card-text">Well Fit T-Shirt.</p>
                            <p className="card-text1">200 Rs</p>
                        </div>
                    </div>
                    
                    <div className="cards-cards2 card1 card">
                        <img src={img2} className="card-img  card-img-top" alt="..." /><hr/>
                        <div class="card-body">
                            <h5 className="card-title">T-Shirt</h5>
                            <p className="card-text">Well Fit T-Shirt.</p>
                            <p className="card-text1">200 Rs</p>
                        </div>
                    </div>

                </div>
                </div>
                <br />
            </div>
           
        )
    }
}

export default Featured