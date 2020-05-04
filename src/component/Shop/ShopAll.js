import React from 'react'
// const img = require('../../IMG/jeans1.jpg')

class ShopAll extends React.Component{
    constructor(){
    super()
    this.state = {
        items : [
            {
                id : 1,
                name : 'Tank Top',
                descripton : 'Findding Perfect t-shirt',
                price : 200,
                color : 'white',
                size : 'Small',
                categories : 'Men',
                type : 'Cloth',
                img : '../../IMG/tshirt.jpg'
            },
            {
                id : 2,
                name : 'Addidas Shoes',
                descripton : 'Findding Perfect Shoes',
                price : 500,
                color : 'Blue',
                size : 'Medium',
                categories : 'Men',
                type : 'Foot-Wear',
                img : '../../IMG//shoes.jpg'
            },
            {
                id : 3,
                name : 'Shirt',
                descripton : 'Findding Perfect Shirt',
                price : 400,
                color : 'Red',
                size : 'Large',
                categories : 'Women',
                type : 'Cloth',
                img : '../../IMG/tshirt1.jpg'
            },
            {
                id : 4,
                name : 'Jeans',
                descripton : 'Findding Perfect Jeans',
                price : 350,
                color : 'Green',
                size : 'Small',
                categories : 'Children',
                type : 'Cloth',
                img : '../../IMG//jeans.jpg'
            },
            {
                id : 5,
                name : 'Addidas Shoes',
                descripton : 'Findding Perfect Shoes',
                price : 500,
                color : 'Black',
                size : 'Medium',
                categories : 'Women',
                type : 'Foot-Wear',
                img : '../../IMG/shoes11.jpg'

            },
            {
                id : 6,
                name : 'Addidas Cloth',
                descripton : 'Findding Perfect Payjama',
                price : 600,
                color : 'Blue',
                size : 'Large',
                categories : 'Men',
                type : 'Cloth',
                img : '../../IMG/jeans1.jpg'

            },
        ]

        }
    }
    render(){
        return(
            <div>
                <h3>Shop All</h3>
                {
                    this.state.items.map(item => {
                        return <li>
                            {item.id},
                            {item.name},
                            {item.price},
                            <img src={item.img} />
                        </li>
                    })
                }
            </div>
        )
    }
}

export default ShopAll