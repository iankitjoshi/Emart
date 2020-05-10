import React from 'react'
import {Link } from 'react-router-dom'
import '../../CSS/Emart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faHeart , faShoppingCart ,faSearch } from '@fortawesome/free-solid-svg-icons'
import LModal from './LModal'
import RModal from './RModal'


class Emart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : ''
        }
    }

    handleChange = (e) => {
        const search = e.target.value
        this.setState({
            search
        })
        console.log('search',search)
    }

    render(){
        return(
            <div className="emart-div">
            <nav className="emart-navbar  navbar navbar-light bg-light">
                <form class="form-inline">
                    <label htmlFor="search">
                    <FontAwesomeIcon icon={faSearch} className="search-btn"   />
                        <input type="text" className="search-control" placeholder="  Search"  id="search" onChange={this.handleChange}/>
                    </label>
                </form>
                 <button type="button" href="/" className="emart  btn btn-outline-dark ">E-MART</button>
                    <div className="dropdown">
                       <FontAwesomeIcon  className="icon-user dropdown dropbtn" icon={faUser} /> 
                        <div className="dropdown-content">
                        <LModal/>
                        <RModal/>
                            
                        </div>
                    </div>
                    <FontAwesomeIcon  icon={faHeart} />
                    
                    <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                    

            </nav>
            <br />
            <hr />
        </div>
        )
    }
}


export default Emart