import React, { Component } from 'react';
import Homes from './data.json';
import Home from './Home.js';

class HomeList extends Component {

    render() {
        return (
            <div id="HomeList">
                {Homes.map((home, index) => {
                    return <Home img={home.image} price={home.price} bedrooms={home.bedrooms} sqft={home.sqft} />
                })}
            </div>
        );
    }
}

export default HomeList;
