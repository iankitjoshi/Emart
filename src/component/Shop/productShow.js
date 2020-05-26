import React from 'react'
import axios from '../../config/axios'
import Emart from '../Home/header'
import Menu from '../Home/MenuBar'


class ProductShow extends React.Component{
    constructor(){
        super()
        this.state = {
            product : {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/product/${id}`)
        .then(response => {
            const product = response.data
            this.setState({product})
        })

    }
   

    render(){
        return(
            <div>
                <Emart />
                
                <Menu />
                Product Show
            </div>
        )
    }
}

export default ProductShow