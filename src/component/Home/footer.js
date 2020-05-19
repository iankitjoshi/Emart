import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarkerAlt , faPhoneAlt , faEnvelope} from '@fortawesome/free-solid-svg-icons'

const img = require('../../Public/Assets/IMG/shoes11.jpg')

class Navigation extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <div class="container">
                    <div class="row row-cols-5">
                        <div class="col">
                            <h5 className=" navigation-h5">Navigation</h5>
                            <p className="nav-p  p-1-nav">Sell Online</p>
                            <p className="nav-p"  >Features</p>
                            <p className="nav-p" >Shopping Cart</p>
                            <p className="nav-p" >Store Builder</p>
                        </div>
                        <div class="col">
                            <p className="nav-p  p-2-nav" >Mobile Commerce</p>
                            <p className="nav-p" >DropShipping</p>
                            <p className="nav-p" >Website Development</p>
                        </div>
                        <div class="col">
                            <p className="nav-p   p-2-nav">Point of Sale</p>
                            <p className="nav-p" >Hardware</p>
                            <p className="nav-p" >Software</p>
                        </div>
                        <div class="col">
                            <h5 className="navigation-h5">Promo</h5>
                            <img src={img} className="promo-shoes" />
                            <p className="p-promo" >Finding Your Perfect Shoes</p>
                            <p className="p1-promo">Promo From Janurary 15 - 25,2020</p>
                        </div>
                        <div class="col">
                            <h5 className="navigation-h5">Contact Info</h5>
                           <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> <p className="contact-info">203 Fake St. Mountain View, Sen Francisco California, USA.</p>
                            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" /> <p className="contact-info">+2 392 3929 210</p>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> <p className="contact-info">emailadress@domain.com</p>
                            <h6>Subscribe</h6>
                            <input>
                            </input><button type="button" class="send  btn btn-primary">Send</button>

                        </div>
                    </div>
                </div>
                <hr/>
                <p className="copyright">Copyright @2020 All reserved | This template is made for E-Mart.</p>
            </div>
        )
    }
}

export default Navigation