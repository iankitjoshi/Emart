import React from 'react'
import Emart from '../Home/header'
import axios from '../../config/axios'
import Swal from 'sweetalert2'
import Menu from '../Home/MenuBar'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

class UpdateDeleteProduct extends React.Component{
    constructor(){
        super()
        this.state = {
            products : []
        }
    }

    componentDidMount(){
        axios.get('/products')
            .then(response => {
               const products = response.data.values
               this.setState({products})
               console.log(products,'products')
            })
            .catch(err => {
                console.log(err,'err')
            })
    }

    handleDelete = (id) => {
        console.log(id,'id')
        axios.delete(`/products/${id}` , {
            headers: {
                'Authorization' : localStorage.getItem('Authorization')
            }
        })
        .then(response => {
            console.log(response,'response')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Deleted Successfully',
                showConfirmButton: false,
                timer: 3000
              })
              
            window.location.reload()
        })
        .catch(err => {
            console.log(err,'err')
        })
        
    }

    handleUpdate = () => {

    }

    render() {
        return (
            <div>
                <Emart />
                <Menu />

                <table style={{textAlign:'center' , marginBottom:'9%',marginTop:'6%'}} className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>

                    </thead>

                        {
                            this.state.products.map((product,i) => {
                                return(
                                    <tbody>
                                        <tr key={product.id}>
                                            <td  className="td-1-update">{i+1}</td>
                                            <td scope="row" className="td-0"><img src={product.asset.url} className="cart-img" /></td>
                                            <td className="td-1-update">{product.name}</td>
                                            <td className="td-1-update"><FontAwesomeIcon icon={faRupeeSign} className="rupee-icon-" /> {product.offerPrice} /-</td>
                                            <td className="td-1-update"><button className="update-btn  btn btn-info" onClick={this.handleUpdate}>UPDATE</button><button className="delete-btn  btn btn-danger" onClick={() => {this.handleDelete(product.id)}}>DELETE</button></td>
                                        </tr>

                                    </tbody>
                                )
                            })
                        }
                   
                </table>

            </div>
        )
    }
}

export default UpdateDeleteProduct