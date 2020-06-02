import React from 'react'
import {Link} from 'react-router-dom'
import Emart from '../Home/header'
import Menu from '../Home/MenuBar'
import UpdateDeleteProduct from './UpdateProduct'

function Product(){
    return(
        <div>

            <Emart />

            <Menu />

            <UpdateDeleteProduct />

            <button> <Link to="add">Add Product</Link></button> <br />

        </div>
    )
}

export default Product