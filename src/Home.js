import React, {Component} from 'react';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            price: props.price,
            bedrooms: props.bedrooms,
            sqft: props.sqft,
            isLoaded: false,
        };
    }

    render() {
        return (
            <div className="home">
                <div><img src={this.img} className="homeImg" alt="image of home"/></div>
                <div className="homeDetails">
                    <div className="homePrice">{this.price}</div>
                    <div className="homeBedrooms">{this.bedrooms}</div>
                    <div className="homeSqft">{this.sqft}</div>
                </div>
            </div>
        );
    }
}

export default Home;
