import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

const img = require('../../Public/Assets/IMG/shoes.jpg')

class Cards extends React.Component{ 
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount = () => {
        axios.get('/products')
        .then((responce) => {
            const products = responce.data.values
            this.setState({products})
            console.log('products',products)
        })
        .catch(err => {
            console.log(err,'err')
        })

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
                        this.state.products.map(product => {
                            return(

                                    <div className="col" key={product.id}>
                                        <div className="card-cards card">
                                            <img src={product.asset.url} className="card-img   card-img-top" alt="..." /> <hr/>
                                            <div className="card  card-body">
                                                <Link to={`/products/${product.id}`}> <h6 className="card-h5  card-title">{product.name}</h6></Link>
                                                {/* <p className="card-p  card-text">{product.description}</p> */}
                                                <p className="card-p1  card-text">{product.price} RS</p>
                                            </div>
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