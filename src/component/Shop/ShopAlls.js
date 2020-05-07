import React from 'react'
import RangeSlider from './Slider'
import ShopAllss from './shopAllss'
import ShopAll from './ShopAll'
import Featured from '../Home/Featured'
import Cards from './card'

class ShopAlls extends React.Component{
    constructor(){
    super()
    this.state = {

    }
    }
    render(){
        return(
            <div>
                <br /><br /><br />
                <div class="container">
                    <div class="row">
                        <div className="cate-col  col-4">
                            <div className="cate-div">
                                <h6 className="cate-name-h6">CATEGORIES</h6>
                                <p className="cate-name" >Men   <span className="cat-span1">(305)</span></p>
                                <p className="cate-name" >Women <span className="cat-span2">(416)</span></p>
                                <p className="cate-name" >Children <span className="cat-span3">(278)</span></p>
                            </div>

                            <div className="cate-div">
                                <h6 className="cate-name-h6">FILTER BY PRICE</h6>
                                    {/* <RangeSlider /> */}
                                <br />

                                <h6 className="cate-name-h6">SIZE</h6>
                                    <div class="form-check">
                                        <input className="checkbox  form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="checkbox-name  form-check-label" for="defaultCheck1" >
                                                Small (514)
                                            </label> <br/>

                                        <input className="checkbox  form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                            <label className="checkbox-name  form-check-label" for="defaultCheck2" >
                                                Medium (144)
                                        </label> <br/>

                                        <input className="checkbox  form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                            <label className="checkbox-name  form-check-label" for="defaultCheck3" >
                                                Large  (876)
                                        </label>
                                    </div>
                                        <br/>

                                    <h6 className="cate-name-h6">COLOR</h6>
                                        <p><span className="dot-red" /> Red (765) </p>
                                        <p><span className="dot-green" /> Green (456) </p>
                                        <p><span className="dot-blue" /> Blue (453) </p>
                                        <p><span className="dot-purple" /> Purple (478) </p>

                            </div>

                        </div>

                        <div class="col-8">

                            <ShopAllss />

                            {/* <ShopAll /> */}

                            {/* <Cards /> */}

                            {/* <Featured /> */}

                        </div>
                    
                    </div>
                </div>

                
            </div>
        )
    }
    

}

        

export default ShopAlls


