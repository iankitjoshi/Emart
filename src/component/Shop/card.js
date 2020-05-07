import React from 'react'

const img = require('../../IMG/shoes.jpg')
const img1 = require('../../IMG/tshirt.jpg')
const img2 = require('../../IMG/tshirt1.jpg')


class Cards extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />

                <br />
                <div className="card-main  card-deck">
                    <div className="card-cards  card">
                        <img src={img} className="card-img  card-img-top" alt="..." /> <hr/>
                        <div className="card  card-body">
                        <h5 className="card-h5  card-title">Tank Top</h5>
                        <p className="card-p  card-text">Finding Perfect</p>
                        <p className="card-p1  card-text">250 RS</p>
                        </div>
                    </div>
                    <div className="card-cards  card">
                        <img src={img} className="card-img  card-img-top" alt="..." /><hr/>
                        <div className="card  card-body">
                        <h5 className="card-h5  card-title">Corater</h5>
                        <p className="card-p  card-text">Perfect Shoes</p>
                        <p className="card-p1  card-text">550 RS</p>
                        </div>
                    </div>
                    <div className="card-cards  card">
                        <img src={img} className="card-img  card-img-top" alt="..." /><hr/>
                        <div className="card  card-body">
                        <h5 className="card-h5  card-title">Polo Shirt</h5>
                        <p className="card-p  card-text">Fitting Shirt</p>
                        <p className="card-p1  card-text">350 RS</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Cards