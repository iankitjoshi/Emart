import React from 'react'
import { Button , Modal} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import '../../CSS/Emart.css'
const img = require('../../Public/Assets/IMG/logo.png')



class LModal extends React.Component{
    constructor(){
        super()
        this.state = {
            show: false,
            name: '',
            email : '',
            mobile : '',
            password : '',
            conpassword : ''
        }
    }

    handlSubmit = () => {
        const formData = {
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile,
            password : this.state.password,
            conpassword : this.state.conpassword
        }

        this.setState({formData})
    }


    handleModal = () => {
        this.setState({show:!this.state.show})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
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


                            <TextField type="text"   value={this.state.name} onChange={this.handleChange} id={this.state.name} name="name" label=" Name" /><br /><br />

                            <TextField type="text"   value={this.state.email} onChange={this.handleChange} id={this.state.email} name="email" label=" Email" /><br /><br />
                            
                            <TextField type="text"   value={this.state.mobile} onChange={this.handleChange} id={this.state.mobile} name="mobile" label=" Mobile" /><br /><br />
                            
                            <TextField type="text"   value={this.state.password} onChange={this.handleChange} id={this.state.password} name="password" label=" Password" /><br /><br />

                            <TextField type="text"   value={this.state.conpassword} onChange={this.handleChange} id={this.state.conpassword} name="conpassword" label="Confirm Password" /><br /><br />

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

export default LModal