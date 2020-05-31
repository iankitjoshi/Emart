import React from 'react'
import { Button , Modal} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import '../../CSS/Emart.css'
import axios from '../../config/axios.js'
import EmailValidator from 'email-validator';
import Swal from 'sweetalert2'


const img = require('../../Public/Assets/IMG/logo.png');



class RModal extends React.Component{
    constructor(){
        super()
        this.state = {
            show: false,
            firstName: '',
            lastName:'',
            email : '',
            phone : '',
            password : '',
            // conpassword : ''
        }
    }

    handlSubmit = (e) => {
        e.preventDefault()
        const formData = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            phone : this.state.phone,
            password : this.state.password,
            // conpassword : this.state.conpassword
        }

        this.setState({formData})
        console.log('formData',formData)


        if(EmailValidator.validate(this.state.email) == true){
            axios.post('/users/signup',formData)
            .then((response) => {
                console.log(response,'response')
                Swal.fire({
                    icon: 'success',
                    title: 'Register Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            window.location.reload()
            .catch((err) => {
                alert(err)
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Please Enter Valid Email-Id'
                })
        }


    }


    handleModal = () => {
        this.setState({show:!this.state.show})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value,'e.target.value')
    }
    render(){
        return(
            <div>
            <button type="button" className="drop-btn btn btn-outline-secondary"  onClick={this.handleModal}>Register</button>
                <Modal 
                show={this.state.show} 
                onHide={()=> this.handleModal()}
                centered
                
                >
                    <Modal.Header className="header" closeButton>REGISTER TO E-MART</Modal.Header>

                    <Modal.Body >

                    <div className="row row-cols-2">

                        <div className="col  div1">
                            <img className="logo-img-r" src={img} />
                        </div>
                     
                        <form className="col" onSubmit={this.handlSubmit}>


                            <TextField type="text"   value={this.state.firstName} onChange={this.handleChange} id={this.state.firstName} name="firstName" label=" First Name" /><br /><br />

                            <TextField type="text"   value={this.state.lastName} onChange={this.handleChange} id={this.state.lastName} name="lastName" label=" Last Name" /><br /><br />

                            <TextField type="text"   value={this.state.email} onChange={this.handleChange} id={this.state.email} name="email" label=" Email" /><br /><br />
                            
                            <TextField type="text"   value={this.state.phone} onChange={this.handleChange} id={this.state.phone} name="phone" label=" Mobile" /><br /><br />
                            
                            <TextField type="text"   value={this.state.password} onChange={this.handleChange} id={this.state.password} name="password" label=" Password" /><br /><br />

                            {/* <TextField type="text"   value={this.state.conpassword} onChange={this.handleChange} id={this.state.conpassword} name="conpassword" label="Confirm Password" /><br /><br /> */}

                            <input className="submit-button  btn btn-info" type="submit" />

                        
                        </form>
                        <br/>
                        <br/>
                    </div>

                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={this.handleModal}>
                            Close
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        )
    }
}

export default RModal