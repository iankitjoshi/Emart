import React from 'react'

const img = require('../../Public/Assets/IMG/shoes.jpg')

class Cards extends React.Component{ 
    constructor(){
        super()
        this.state = {
            details : [
                {
                    id : 1 ,
                    image : img,
                    name : 'Tank-Top',
                    description : 'Finding Perfect',
                    price : 250 
                },
                {
                    id : 2 ,
                    image : img,
                    name : 'Tank-Top1',
                    description : 'Finding Perfect1',
                    price : 250
                },
                {
                    id : 3 ,
                    image : img,
                    name : 'Tank-Top2',
                    description : 'Finding Perfect2',
                    price : 250 
                },
                // {
                //     id : 4 ,
                //     image : img,
                //     name : 'Tank-Top3',
                //     description : 'Finding Perfect3',
                //     price : 250 
                // },
                // {
                //     id : 5,
                //     image : img,
                //     name : 'Tank-Top4',
                //     description : 'Finding Perfect4',
                //     price : 250 
                // },
                // {
                //     id : 6 ,
                //     image : img,
                //     name : 'Tank-Top5',
                //     description : 'Finding Perfect5',
                //     price : 250 
                // },
            ]
        }
    }
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />

                <br />
                <div className="card-main  card-deck">
                    <div class="container">
                        <div class="row row-cols-3">
                    {
                        this.state.details.map(detail => {
                            return(
                                
                                        <div className="card-cards  card">
                                            <img src={detail.image} className="card-img  card-img-top" alt="..." /> <hr/>
                                            <div className="card  card-body">
                                                <h5 className="card-h5  card-title">{detail.name}</h5>
                                                <p className="card-p  card-text">{detail.description}</p>
                                                <p className="card-p1  card-text">{detail.price} RS</p>
                                            </div>
                                        </div>

                            )
                        })
                    }

                    </div>
                     </div>
                    
                    {/* <div className="card-cards  card">
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
                    </div> */}
                </div>
                
            </div>
        )
    }
}

export default Cards