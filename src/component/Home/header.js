import React from 'react'
import {Link } from 'react-router-dom'
import '../../CSS/Emart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faHeart , faShoppingCart ,faSearch } from '@fortawesome/free-solid-svg-icons'
import LModal from './LModal'
import RModal from './RModal'
import axios from '../../config/axios'


class Emart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : '',
            name : {}
        }
    }

    handleChange = (e) => {
        const search = e.target.value
        this.setState({
            search
        })
        console.log('search',search)
    }

    // componentDidMount() {
    //     axios.get()
    //     .then(response => {
    //         const name = response.data
    //         this.setState({name});
    //         console.log(name,'name')
          
    //     })
    //     .catch(err => {
    //         console.log(err,'err')
    //     })

    // }

    handleLogout = () => {
        localStorage.removeItem('Authorization')
        localStorage.removeItem('Name')

        window.location.href = '/'
    }

    render(){
        return(
            <div className="emart-div">
                <nav className="emart-navbar  navbar navbar-light bg-light">
                    <form class="form-inline">
                        <label htmlFor="search">
                        <FontAwesomeIcon icon={faSearch} className="search-btn"   />
                            <input type="text" className="search-control  form-control " placeholder="  Search"  id="search" onChange={this.handleChange}/>
                        </label>
                    </form>

                 <button type="button" href="/" className="emart  btn btn-outline-dark ">E-MART</button>
                    <div className="dropdown">
                       <FontAwesomeIcon  className="icon-user dropdown dropbtn" icon={faUser} /> 
                        <div className="dropdown-content">
                        {    
                            localStorage.getItem('Authorization') ? (
                                <div>
                                    <h6 className="name-header">{localStorage.getItem('Name')}</h6>
                                    <button type="button" className="drop-btn btn btn-outline-secondary"  onClick={this.handleLogout}>Logout</button>

                                </div>
                            ) : (
                                <div>
                                    <LModal/>
                                    <RModal/>
                                </div>
                            )
                        }
                        
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