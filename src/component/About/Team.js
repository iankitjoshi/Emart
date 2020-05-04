import React from 'react'
import '../../CSS/Emart.css'

const img = require('../../IMG/team1.jpg')


class Team extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1 className="h1__team">___</h1>

                <h2 className="h2-team">The Team</h2>

                <div class="container">
                    <div class="row row-cols-4">
                    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&display=swap" rel="stylesheet" />


                        <div class="col">
                            <img src={img} className="team-img" />
                            <h5 className="h5-name">Ankit Joshi</h5>
                            <h6 className="h6-name">CEO, Founder</h6>
                            <p className="p-name">Ankit Joshi is very Hardworking Person. He is the bond of our Team he is the one the best thing in our Company.</p>
                        </div>

                        <div class="col">
                            <img src={img} className="team-img" />
                            <h5 className="h5-name">Ankit Joshi</h5>
                            <h6 className="h6-name">CEO, Founder</h6>
                            <p className="p-name">Ankit Joshi is very Hardworking Person. He is the bond of our Team he is the one the best thing in our Company.</p>
                        </div>

                        <div class="col">
                            <img src={img} className="team-img" />
                            <h5 className="h5-name">Ankit Joshi</h5>
                            <h6 className="h6-name">CEO, Founder</h6>
                            <p className="p-name">Ankit Joshi is very Hardworking Person. He is the bond of our Team he is the one the best thing in our Company.</p>
                        </div>

                        <div class="col">
                            <img src={img} className="team-img" />
                            <h5 className="h5-name">Ankit Joshi</h5>
                            <h6 className="h6-name">CEO, Founder</h6>
                            <p className="p-name">Ankit Joshi is very Hardworking Person. He is the bond of our Team he is the one the best thing in our Company.</p>
                        </div>
                    </div>
                </div> 
                <br /><hr/>

            </div>
        )
    }
}

export default Team