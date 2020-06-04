import React from 'react'
import { Button , Modal} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import '../../CSS/Emart.css'
import axios from '../../config/axios.js'
import EmailValidator from 'email-validator';
import Swal from 'sweetalert2'


const img = require('../../Public/Assets/IMG/logo.png');



class AddProductForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.name ? props.name : '' ,
            price: props.price ? props.price : '' ,
            offerPrice : props.offerPrice ? props.offerPrice : '' ,
            asset : undefined,
            description : props.description ? props.description : '' ,
            rating : props.rating ? props.rating : '' ,
            review : props.review ? props.review : ''
        }
    }

    handlSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            price : this.state.price,
            offerPrice : this.state.offerPrice,
            asset : this.state.asset,
            description : this.state.description,
            rating : this.state.rating,
            review : this.state.review
        }

        this.props.handlSubmit(formData)
        // formData.append('image',this.state.asset,this.state.asset.name)
        // this.setState({formData})
        // console.log('formData',formData)


        // axios.post('/products',formData,{
        //     headers: {
        //         'Authorization' : localStorage.getItem('Authorization')
        //     },
        //     onUploadProgress : ProgressEvent => {
        //         console.log('Upload File', (ProgressEvent.loaded / ProgressEvent.total * 100 ),'%')
        //     }
        // })
        // .then((response) => {
        //     console.log(response,'response')
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Add Product Successfully',
        //         showConfirmButton: false,
        //         timer: 2000
        //       })
        //     window.location.reload()
        // })
        
        // .catch((err) => {
        //     alert(err)
        // })
    }


    // handleModal = () => {
    //     this.setState({show:!this.state.show})
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value,'e.target.value')
    }

    fileUpload = (e) => {
        e.preventDefault()
        this.setState({
            asset: e.target.files[0]
        })
        console.log(e.target.files[0],'e.target.files[0]')
    }

    render(){
        return(
            <div>
                    
            
        
                        <form className="" onSubmit={this.handlSubmit}>


                            <TextField type="text" className="product-form"  value={this.state.name} onChange={this.handleChange} id={this.state.name} name="name" label=" Name" /><br /><br />

                            <TextField type="text" className="product-form"  value={this.state.price} onChange={this.handleChange} id={this.state.price} name="price" label=" Price" /><br /><br />

                            <TextField type="text" className="product-form"  value={this.state.offerPrice} onChange={this.handleChange} id={this.state.offerPrice} name="offerPrice" label=" Offer Price" /><br /><br />
                            
                            <label htmlFor="Image">Image:- </label>
                            <input type="file" className="product-form"   onChange={this.fileUpload} id={this.state.asset}  /><br />
                            
                            <TextField type="text" className="product-form"  value={this.state.description} onChange={this.handleChange} id={this.state.description} name="description" label=" description" /><br /><br />

                            <TextField type="text" className="product-form"  value={this.state.rating} onChange={this.handleChange} id={this.state.rating} name="rating" label="Rating" /><br /><br />

                            <TextField type="text" className="product-form"  value={this.state.review} onChange={this.handleChange} id={this.state.review} name="review" label="Review" /><br /><br />


                            <input className="submit-button  btn btn-info" type="submit" />

                        
                        </form>
                        <br/>
                        <br/>

                    
            </div>
        )
    }
}

export default AddProductForm