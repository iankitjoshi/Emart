import React from 'react'
import axios from '../../config/axios'
import Swal from 'sweetalert2'
import AddProductForm from './AddProductForm'


class ProductNew extends React.Component{
    handleSubmit = (formData) => {
        axios.post('/products',formData,{
            headers: {
                'Authorization' : localStorage.getItem('Authorization')
            },
            onUploadProgress : ProgressEvent => {
                console.log('Upload File', (ProgressEvent.loaded / ProgressEvent.total * 100 ),'%')
            }
        })
        .then((response) => {
            console.log(response,'response')
            Swal.fire({
                icon: 'success',
                title: 'Add Product Successfully',
                showConfirmButton: false,
                timer: 2000
              })
              this.props.history.push('/products')
            })
        
        .catch((err) => {
            alert(err)
        })
    }
    render() {
        return (
            <div>
                <h2>Add Products</h2>

                <AddProductForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default ProductNew