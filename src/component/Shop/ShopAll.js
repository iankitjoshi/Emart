import React from 'react'
// const img = require('../../IMG/jeans1.jpg')

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const img = require('../../IMG/Color/black.jpg')
const img1 = require('../../IMG/Color/red.png')
const img2 = require('../../IMG/Color/green.png')
const img3 = require('../../IMG/Color/white.jpg')
const img4 = require('../../IMG/Color/blue.png')

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
                color : 'White',
                size : 'Small',
                categories : 'Men',
                type : 'Cloth',
                img : img3
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
                img : img4
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
                img : img1
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
                img : img2
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
                img : img

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
                img : img4

            },
        ],
        // colors : [],
        // ranges : [],
        // values : 0,
        // sizes : [],
        // gender : [],
        // gender1 : "",
        // colors1 : ''
        }
    }

    // handleColorChange = (e) => {
    //     let  {name, value} = e.target;
    //     if(name === 'colors'){
    //         console.log("Render", value);
    //         this.setState({ ranges: [],gender: [], values: 0, sizes :[] ,});
    //     }
    //     this.setState({value})
    //     console.log(value,'value')
    //     let colors
    //     var item = this.state.items.map(item => item.color)
    //     console.log(item,'item')
    //     var items = item.find(it => it == value)
    //     console.log(items,'items')
    //     if(items == value){
    //         colors = this.state.items.filter(item => item.color == value)
    //         console.log(colors , 'colors')
    //     } else {
    //         colors = this.state.items
    //     }
    //     this.setState({colors})
    // }

    // handleRangeChange = (e) => {
    //     let  {name, value} = e.target;
    //     if(name === 'price'){
    //         console.log("Render", value);
    //         this.setState({ colors: [],gender: [], values: 0, sizes :[], });
    //     }
    //     const values = e.target.value
    //     this.setState({values})
    //     let ranges
    //     ranges = this.state.items.filter(item => item.price <= values)
    //     this.setState({ranges})
    //     console.log(ranges,'ranges in short')
        
    // }

    // handleSizeClick = (e) => {
    //     let  {name, value} = e.target;
    //     if(name === 'size'){
    //         console.log("Render", value);
    //         this.setState({ ranges: [],gender: [], values: 0, colors :[] ,});
    //     }
    //     this.setState({value})
    //     console.log(value,'value')
    //     let sizes
    //     var item = this.state.items.map(item => item.size)
    //     console.log(item,'item')
    //     var items = item.find(it => it == value)
    //     console.log(items,'items')
    //     if(items == value){
    //         sizes = this.state.items.filter(item => item.size == value)
    //         console.log(sizes , 'sizes')
    //     } else {
    //         sizes = this.state.items
    //     }
    //     this.setState({sizes})
    //     console.log(sizes,'sizes')
    // }

    // handleGenderClick = (e) => {
    //     let  {name, value} = e.target;
    //     if(name === 'gender'){
    //         console.log("Render", value);
    //         this.setState({ ranges: [],sizes: [], values: 0, colors :[] ,});
    //     }
    //     console.log(value,'value')
    //     let gender
    //     var item = this.state.items.map(item => item.categories)
    //     console.log(item,'item')
    //     var items = item.find(it => it == value)
    //     console.log(items,'items')
    //     if(items == value){
    //         gender = this.state.items.filter(item => item.categories == value)
    //         console.log(gender , 'gender')
    //     } else {
    //         gender = this.state.items
    //     }
    //     this.setState({gender})
    //     console.log(gender,'gender')
    // }

    render(){
        // let { gender1 , colors1 , values } = this.state;
        // console.log("Gender are", gender1);
        return(
            <div>
                <div name="abc">
                <div class="card-deck">
                    {
                        this.state.items.map(item => {
                            return(
                                <div className="row row-cols-3   row-div ">
                                    
                                        <div className="cards  card">
                                            <img src={item.img} className="shopAll-img" />  
                                            <div class="card-body">
                                                <h5 class="card-title">{item.name}</h5>
                                                <p class="card-text">{item.price}</p>
                                                <p class="card-text"><small class="text-muted">{item.color}</small></p>
                                            </div>
                                        </div>
                                    
                                </div>)
                        })
                    }
                    </div>
                </div>
                
                
                

                {/* <h3>Color</h3>

                <FormControl component="fieldset">
                    <RadioGroup   name="colors"  onChange={this.handleColorChange}>

                        <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
                        <FormControlLabel value="Black" control={<Radio />} label="Black" />
                        <FormControlLabel value="Red" control={<Radio />} label="Red" />
                        <FormControlLabel value="White" control={<Radio />} label="White" />
                        <FormControlLabel value="Green" control={<Radio />} label="Green" />
                        <FormControlLabel value="All" control={<Radio />} label="All"  />

                    </RadioGroup>
                </FormControl>


                {
                    this.state.colors.map(color => {
                        return <li>
                            {color.id}-
                            {color.name}-
                            {color.price}-
                            {color.color}-
                            <img src={color.img} className="shopAll-img" />
                        </li>
                    })
                }



                <h3> Price:-{this.state.values}</h3>
                <input className="range  custom-range" name="price" type="range" min="0" max="700" value={this.state.values} onChange={this.handleRangeChange}/>
                
                {
                    this.state.ranges.map(range => {
                        return <li>
                            {range.id}-
                            {range.name}-
                            {range.price}-
                            {range.color}-
                            <img src={range.img} className="shopAll-img" />
                        </li>
                    })
                }


                <h3>Size</h3>

                <FormControl component="fieldset">
                    <RadioGroup  name="size"  onChange={this.handleSizeClick}>

                        <FormControlLabel value="Small" control={<Radio />} label="Small" />
                        <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="Large" control={<Radio />} label="Large" />
                        <FormControlLabel value="All" control={<Radio />} label="All"  />

                    </RadioGroup>
                </FormControl>


                {
                    this.state.sizes.map(size => {
                        return <li>
                            {size.id}-
                            {size.name}-
                            {size.price}-
                            {size.color}-
                            {size.size}-
                            <img src={size.img} className="shopAll-img" />
                        </li>
                    })
                }

                <h3>Categories</h3>

                <div className="Categories-div">

                    <FormControl component="fieldset" >
                        <RadioGroup   name="gender"  onChange={this.handleGenderClick}>

                            <FormControlLabel value="Men" control={<Radio />} label="Men" />
                            <FormControlLabel value="Women" control={<Radio />} label="Women" />
                            <FormControlLabel value="Children" control={<Radio />} label="Children" />
                            <FormControlLabel value="All" control={<Radio />} label="All"  />

                        </RadioGroup>
                    </FormControl>

                </div>
                
                {
                    this.state.gender.map(gen => {
                        return <li>
                            {gen.id}-
                            {gen.name}-
                            {gen.price}-
                            {gen.color}-
                            {gen.size}-
                            <img src={gen.img} className="shopAll-img" />
                        </li>
                    })
                } */}

            </div>
        )
    }
}

export default ShopAll