import React from 'react'
import axios from '../../config/axios.js'
import AddProductForm from './AddProductForm'

class ProductEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            products : {}
        }
    }

    handleSubmit = (formData) => {
        console.log(this.props.match.params.id,'this.props.match.params.id1')
        axios.put(`/products/${this.props.match.params.id}`,formData,{
            headers: {
                'Authorization' : localStorage.getItem('Authorization')
            },
        })
        .then(response => {
            const products = response.data
            console.log(products,'products')
            this.props.history.push(`/products/${products.id}`)
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log(this.props.match.params.id,'this.props.match.params.id2')
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
            <div>
                <h3>Edit Products</h3>
                {
                    Object.keys(this.state.products).length != 0 && <AddProductForm {...this.state.products} handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

export default ProductEdit

