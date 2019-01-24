import React, {Component} from 'react';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: this.props.img,
            price: this.props.price,
            bedrooms: this.props.bedrooms,
            sqft: this.props.sqft,
            isLoaded: false,
        };
    }

    render() {
        return (
            <div className="home">
                <div><img src={this.state.img} className="homeImg" alt="image of home"/></div>
                <div className="homeDetails">
                    <div className="homePrice">{this.state.price}</div>
                    <div className="homeBedrooms">{this.state.bedrooms}</div>
                    <div className="homeSqft">{this.state.sqft}</div>
                </div>
            </div>
        );
    }
}

export default Home;
