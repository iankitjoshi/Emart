import React from 'react'

import '../../CSS/Emart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTruck , faUndoAlt , faQuestionCircle} from '@fortawesome/free-solid-svg-icons'


function Shipping(){
    return(
        <div className="shipping-div">
            <br/><br/>
            <div className="row row-cols-3   row-div ">

                <div className="col  card" >
                    <FontAwesomeIcon className="truck-icon" icon={faTruck} />
                    <h6 className="h6-tag">FREE SHIPPING</h6>
                    <p className="ptag">Easy Free Shipping of your product. With out any Extra charges just shopping hastle free.</p>
                </div>

                <div className="col  card" >
                    <FontAwesomeIcon className="truck-icon" icon={faUndoAlt} />
                    <h6 className="h6-tag">FREE RETURN</h6>
                    <p className="ptag">Easy Free Return your product. With out any Extra charges just shopping hastle free.</p>
                </div>

                <div className="col  card" >
                    <FontAwesomeIcon className="support-icon" icon={faQuestionCircle} />
                    <h6 className="h6-tag">CUSTOMER SUPPORT</h6>
                    <p className="ptag">Easy cusstomer support for your product. you get solution of your problem With out any worry.</p>
                </div>

            </div>

            <hr style={{marginTop:'-5%'}} />
            
        </div>
    )
}

export default Shipping