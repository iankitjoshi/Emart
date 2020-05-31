import React from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { addCart , removeCart , quantityDecrease , quantityIncrease } from '../../action/cart'

function CartList(props){
    const handleRemoveChange = (id) => { 
        props.dispatch(removeCart(id))
    }

    const handleNegChange = (id) => {
        // console.log(id,'id');
        // let new_array = props.carts.map(item =>{
        //     if(item.id == id){
        //         return {...item, quantity: item.quantity - 1};
        //     }
        //     return item;;
        // })
        // console.log(new_array,'new array')

        // this.setState({products : new_array});
        props.dispatch(quantityDecrease(id))
    }

    const handlePosChange = (id) => {
        // console.log(id,'id');
        // let new_array = props.carts.map(item =>{
        //     if(item.id == id){
        //         return {...item, quantity: item.quantity + 1};
        //     }
        //     return item;;
        // })
        // console.log(new_array,'new array')

        // this.setState({products : new_array});
        props.dispatch(quantityIncrease(id))    }


    // render(){
    //     console.log('render')
    //     let { products } = props.carts     console.log('render pro' , products);
        return(
            <div>
            <link href="https://fonts.googleapis.com/css2?family=Jaldi:wght@700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet" />

                <br /><br /><br />
                
                <table style={{textAlign:'center' , marginBottom:'9%'}} className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    {
                        props.carts.map(product => {
                            return(
                                <tbody>
                                    <tr key={product.id}>
                                        <td scope="row" className="td-0"><img src={product.asset.url} className="cart-img" /></td>
                                        <td className="td-1">{product.name}</td>
                                        <td className="td-2">{product.price || 0}</td>
                                        <td className="td-3">
                                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                <div  class="btn-group mr-2" role="group" aria-label="First group">
                                                    <button type="button" style={{marginLeft:'20%'}} onClick={() => {handleNegChange(product.id)}}  disabled={product.quantity == 1 } className="quantity-btn1  btn btn-secondary">-</button>
                                                    <button type="button" className="quantity  btn btn-secondary"> {product.quantity || 1} </button>
                                                    <button type="button" onClick={() => {handlePosChange(product.id)}} disabled={product.quantity == 20 } className="quantity-btn1  btn btn-secondary">+</button>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td><button  onClick={() => {this.handleNegChange(product.id)}}  disabled={product.quantity == 1 }>-</button> {product.quantity} <button onClick={() => {this.handlePosChange(product.id)}} disabled={product.quantity == 20 }> + </button> </td> */}
                                        <td className="td-4">{product.price * (product.quantity || 1)} INR</td>
                                        <td className="td-5"><button onClick={() => {handleRemoveChange(product.id)}} className="remove-btn  btn btn-secondary" >X</button></td>
                                        
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                   
                    </table>

                    <div class="container">
                        <div class="row">

                                <div style={{marginLeft:"2%"}} class="col-5">

                                    <button className="update-btn" >UPDATE CART</button>
                                    <button className="continue-btn" >CONTINUE SHOPING</button>
                                    <h4  style={{marginBottom:"6%" , marginTop:'16.5%' , fontFamily: "'Roboto Mono', 'monospace'",fontSize:'1.7vw'}}>Coupon</h4>
                                    <span className="enter-coupon">Enter your coupon code if you have one</span><br />
                                    <div style={{marginTop:"2.5%"}} class="input-group mb-3">
                                            <input type="text" className="input  form-control" placeholder="Enter Your Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <div class="input-group-append">
                                                <button className="apply-btn   btn btn-outline-secondary" type="button" id="button-addon2">APPLY COUPON</button>
                                            </div>
                                    </div>



                                </div>

                                {/* <div class="col-3">

                                </div> */}

                                <div className="checkout  col-4">
                                    <h4 className="cart-total" >CART TOTALS</h4>
                                    <hr style={{marginRight:'25%'}} />
                                    <br />
                                    <p className="total">Subtotal  <span className="span1-price">{props.carts.reduce((a,b) => (a+b.price *( b.quantity || 1)),0 )}  INR </span>  </p>
                                    <p className="total"> Total  <span className="span-price" > {props.carts.reduce((a,b) => (a+b.price *( b.quantity || 1)),0 )}  INR </span> </p><br />
                                    <button className="checkout-btn" >PROCEED TO CHECKOUT</button>
                                </div>
                            
                        </div>
                    </div>
                <br />
                <hr />
                
            </div>
        )
    // }
}

const mapStateToProps = (state) => {
    return {
        carts : state.carts
    }
}

export default connect(mapStateToProps)(CartList)