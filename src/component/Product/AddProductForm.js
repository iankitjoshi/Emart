import React from 'react'
import TextField from '@material-ui/core/TextField';
import '../../CSS/Emart.css'

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
        this.props.handleSubmit(formData)
        console.log(formData,'formData in Add')
    }



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
            <div style={{marginBottom:'-9%'}}>
    
            
                        <div className="addform-container  container">

                        <link href="https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap" rel="stylesheet" />

                        <form className="add-form" onSubmit={this.handlSubmit}>


                            <TextField type="text" className="product-form"  value={this.state.name} onChange={this.handleChange} id={this.state.name} name="name" label=" Name" /><br /><br />

                            <TextField type="text" className="product-form"  value={this.state.price} onChange={this.handleChange} id={this.state.price} name="price" label=" Price" /><br /><br />

                            <TextField type="text" className="product-form"  value={this.state.offerPrice} onChange={this.handleChange} id={this.state.offerPrice} name="offerPrice" label=" Offer Price" /><br /><br />
                            
                            <label htmlFor="Image">Image:- </label>> <br />
                            <input type="file" className="product-form"   onChange={this.fileUpload} id={this.state.asset}  /><br />
                            
                            <TextField type="text" className="product-form"  value={this.state.description} onChange={this.handleChange} id={this.state.description} name="description" label=" description" /><br /><br />

                            <TextField type="text" className="product-form"  value={this.state.rating} onChange={this.handleChange} id={this.state.rating} name="rating" label="Rating" /><br /><br />

                            <TextField type="text" className="product-form"  value={this.state.review} onChange={this.handleChange} id={this.state.review} name="review" label="Review" /><br /><br />


                            <input className="submit-button  btn btn-info" type="submit" />

                        
                        </form>
                        </div>
                        <br/>
                        <br/>

                    
            </div>
        )
    }
}

export default AddProductForm