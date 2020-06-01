import React from 'react'
import axios from '../../config/axios'
import Emart from '../Home/header'
import Menu from '../Home/MenuBar'
import Navigation from '../Home/footer'
import Swal from 'sweetalert2'

import { addCart  } from '../../action/cart'
import { connect } from 'react-redux'



class ProductShow extends React.Component{
    constructor(){
        super()
        this.state = {
            product : {},
            img : {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/products/${id}`,{
            headers: {
                'Authorization' : localStorage.getItem('Authorization')
            }
        })
        .then(response => {
            const product = response.data
            const img =  response.data.asset.url
            this.setState({product});
            this.setState({img})
            console.log(product,'product')
            console.log('Im From Product Show')
            console.log(product.asset.url,'URL')

        })
        .catch(err => {
            console.log(err,'err')
        })
        
     

    }

    handleAddCart = () => {
        const id = this.props.match.params.id
        axios.get(`/products/${id}`,{
            headers: {
                'Authorization' : localStorage.getItem('Authorization')
            }
        })
        .then(response => {
            const product = response.data
            const img =  response.data.asset.url
            this.setState({product});
            this.setState({img})
            console.log(product,'product')
            console.log('Im From Product Show')
            console.log(product.asset.url,'URL')
            this.props.dispatch(addCart(response.data))
        })
        .catch(err => {
            console.log(err,'err')
        })
        Swal.fire({
            icon: 'success',
            title: 'Add Successfully',
            showConfirmButton: false,
            timer: 1500
          })

        
    }
   

    render(){
        return(
            <div>
            

                <Emart />
                
                <Menu />
                <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
                <div className="container-div  container">
                    <div className="row">
                        <div className="col">
                            <img src={this.state.img} className="image" /> <br />
                        </div>

                        <div className="col">
                        <br/>
                            <h2 className="name"> {this.state.product.name} </h2>
                            {/* Offer Price : {this.state.product.offerPrice} FREE Delivery. Details Inclusive of all taxes<br /> */}
                             <h6 style={{fontSize:'1.3vw',marginTop:'3.5%'}} >Offer Price :<span className="price"> {this.state.product.offerPrice} /- </span> Inclusive of all taxes. </h6>
                             <h6 style={{fontSize:'1.2vw',marginTop:'3.5%'}}>Price: <s className="price">  {this.state.product.price} </s><span className="price"> /- </span> Inclusive of all taxes. </h6>
                             
                            <h6 className="description">{this.state.product.description}.</h6> 
                            <h6 className="rating">Rating : {this.state.product.rating}</h6> <br /> <br/>

                            <button type="button" class="btn-add2cart btn btn-warning" onClick={this.handleAddCart }>Add to Cart</button>
                            <button type="button" class="btn-buynow btn btn-warning" onClick={this.handleBuyNow}>Buy Now</button>


                        </div>

                    </div>

                </div>
                
               
                <br />
                <hr />
                <Navigation />
            </div>
        )
    }
}

export default connect(addCart)(ProductShow)