import React, {Component} from 'react';
import myData from './data.json';


class Filter extends Component {
    filterBeds(event){

    }
    render() {
        return (
            <div className="userInputDiv">
                <label>Bedrooms</label>
                <input
                    type="tel"
                    id="bedroomsMin"
                />
                to
                <input
                    type="tel"
                    id="bedroomsMax"
                />
                <label>Sqft</label>
                <input
                    type="tel"
                    id="sqftMin"
                />
                to
                <input
                    type="tel"
                    id="Max"
                />
                <label>Price</label>
                <input
                    type="tel"
                    id="priceMin"
                />
                to
                <input
                    type="tel"
                    id="priceMax"
                />
            </div>
        );
    }
}

export default Filter;
