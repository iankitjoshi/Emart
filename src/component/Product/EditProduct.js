import React from 'react'
import axios from '../../config/axios.js'
import AddProductForm from './AddProductForm'
import Emart from '../Home/header'
import Navigation from '../Home/footer.js'
import Menu from '../Home/MenuBar.js'
import Swal from 'sweetalert2'



class ProductEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            products : {}
        }
    }

    handleSubmit = (formData) => {
        // console.log(this.props.match.params.id,'this.props.match.params.id1')
        axios.patch(`/products/${this.props.match.params.id}`,formData,{
            headers: {
                'Authorization' : localStorage.getItem('Authorization')
            },
        })
        .then(response => {
            const products = response.data
            console.log(products,'products')
            Swal.fire({
                icon: 'success',
                title: 'Edit Product Successfully',
                showConfirmButton: false,
                timer: 2000
              })

            
            this.props.history.push(`/products`)
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id
        // console.log(this.props.match.params.id,'this.props.match.params.id2')
        axios.get(`/products/${id}`,{
            headers: {
                'Authorization' : localStorage.getItem('Authorization')
            },
        })
        .then(response => {
            const products = response.data
            this.setState({products})
        })
        .catch(err => {
            alert(err)
        })
    }

    render(){
        return(
            <div >

                <Emart />

                <Menu />
                <link href="https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap" rel="stylesheet" />

                <h3 className="h1-add-product">Edit Products</h3>
                {
                    Object.keys(this.state.products).length != 0 && <AddProductForm {...this.state.products} handleSubmit={this.handleSubmit} />
                }
                
                <hr />

                <Navigation />
            </div>
        )
    }
}

export default ProductEdit

