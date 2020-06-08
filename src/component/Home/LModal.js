import React from 'react'
import { Button , Modal} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import '../../CSS/Emart.css'
import axios from '../../config/axios.js'
import EmailValidator from 'email-validator';
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'


const img = require('../../Public/Assets/IMG/logo.png');


class LModal extends React.Component{
    constructor(){
        super()
        this.state = {
            show: false,
            email : '',
            password : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : this.state.email,
            password : this.state.password
        }
        this.setState({formData})
        console.log(formData,'Login-formData')

        if(EmailValidator.validate(this.state.email) == true){
            axios.post('/users/login',formData)
            .then((response) => {
                console.log(response,'response')
                console.log(response.data,'response-data')
                if(response.data.hasOwnProperty('error')){
                    alert(response.data.error)
                } else {
                    const token = response.data.token
                    const name = response.data.name
                    localStorage.setItem('Authorization',`Brarer ${token}`)
                    localStorage.setItem('Name',name)

                    // this.props.history.push('/')
                    window.location.reload()
                }
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Login Successfully',
                //     showConfirmButton: false,
                //     timer: 1500
                //   })
                //   window.location.href = '/'

                //   this.props.history.push('/')
                //   window.location.reload()
            })
            .catch((err) => {
                alert(err)
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Please Enter Valid Email-Id Or Password'
              })
        }
        
    }

    handlePasswordClick = (e) => {
        e.preventDefault()
        const passwordData = {
            email : this.state.email
        }
        this.setState({passwordData})
        console.log(passwordData,'passwordData')

        if(EmailValidator.validate(this.state.email) == true){
            axios.post('/users/forgot-password',passwordData)
            .then((response) => {
                console.log(response,'response')
                Swal.fire({
                    icon:'success',
                    title: response.data.message
                  })
            })
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
        console.log('e.target.value',e.target.value)
    }


    render(){
        return(
            <div>
            
            <button type="button" className="drop-btn btn btn-outline-secondary"  onClick={this.handleModal}>Login</button>

                
                <Modal
                show={this.state.show}
                onHide={()=> this.handleModal()}
                centered
                >
                    <Modal.Header className="header" closeButton>LOGIN TO E-MART</Modal.Header>

                    <Modal.Body >

                    <div className="row row-cols-2">

                        <div className="col  div1">
                            <img className="logo-img" src={img} />
                        </div>

                        <form className="col" onSubmit={this.handleSubmit}>
                            <TextField type="text"   value={this.state.email} onChange={this.handleChange} id={this.state.email} name="email" label=" Email" /><br /><br />

                            <TextField type="password"   value={this.state.password} onChange={this.handleChange} id={this.state.password} name="password" label=" Password" /><br /><br />
                            <button type="button" className="drop-btn-forgot btn btn-outline-secondary" onClick={this.handlePasswordClick}>Forgot Password ?</button>

                            <input className="submit-button  btn btn-info" type="submit" />

                        </form>
                        <br/>
                        <br/>
                    </div>

                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default LModal