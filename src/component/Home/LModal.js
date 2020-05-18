import React from 'react'
import { Button , Modal} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import '../../CSS/Emart.css'
import RModal from './RModal'

const img = require('../../Public/Assets/IMG/logo.png');


class LModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false,
            email : '',
            password : ''
        }
    }

    handleSubmit = () => {
        const formData = {
            email : this.state.email,
            password : this.state.password
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

                            <TextField type="text"   value={this.state.password} onChange={this.handleChange} id={this.state.password} name="password" label=" Password" /><br /><br />

                            <input className="submit-button  btn btn-info" type="submit" />

                            {/* Don't Have Account !!
                            Register from Here
                            <RModal  /> */}

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