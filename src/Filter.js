import React, {Component} from 'react';
import myData from './data.json';


class Filter extends Component {
    filterBeds(event){

    }
    clearFilter(event){

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
                <input
                    type="button"
                    id="applyButton"
                    value="APPLY"
                    onClick={this.filterBeds.bind(this)}
                />
                <input
                    type="button"
                    id="clearButton"
                    value="X"
                    onClick={this.clearFilter.bind(this)}
                />
            </div>
        );
    }
}

export default Filter;
