import React from 'react'
import '../../CSS/Emart.css'


const img = require('../../Public/Assets/IMG/men.jpg')
const img1 = require('../../Public/Assets/IMG/women1.jpg')
const img2 = require('../../Public/Assets/IMG/kids1.jpg')

class Collection extends React.Component{
    constructor(){
        super()
        this.state = {
            categories : [
                {
                    id: 1,
                    image : img,
                    name : 'Men',
                    collection : 'Collection'
                },
                {
                    id: 2,
                    image : img1,
                    name : 'Women',
                    collection : 'Collection'
                },
                {
                    id: 3,
                    image : img2,
                    name : 'Kids',
                    collection : 'Collection'
                },
            ]
        }
    }
    render(){
        return(
            <div>
            <br/><br/><br/>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@767&display=swap" rel="stylesheet" />

                <div className="row row-cols-3   row-div ">
                {
                    this.state.categories.map(category => {
                        return(
                            <div className="col  " >
                                <img src={category.image}  className="collectoin-img"  />
                                <h3 className="men">{category.name}</h3>
                                <h5 className="collection">{category.collection}</h5>
                            </div>  
                        )
                    })
                }

                    {/* <div className="col  " >
                        <img src={img}  className="collectoin-img"  />
                        <h3 className="men">Men</h3>
                        <h5 className="collection">Collection</h5>
                    </div>  

                    <div className="col  " >
                        <img src={img1} className="collectoin-img"  />
                        <h3 className="men">Women</h3>
                        <h5 className="collection">Collection</h5>
                    </div>  

                    <div className="col  " >
                        <img src={img2} className="collectoin-img"  />
                        <h3 className="men">Kids</h3>
                        <h5 className="collection">Collection</h5>
                    </div>   */}

                </div>
            </div>
        )
    }
}

export default Collection