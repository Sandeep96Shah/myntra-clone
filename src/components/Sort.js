import React, { Component } from 'react';

class Sort extends Component {

    render() {
        const { handleSortLowToHigh, products, handleSortHighToLow } =this.props;
        return (
            <div className="sort_container">
                <div className="filter"><p>Filter</p></div>
                <div className="sort">
                    <div className="sort_btn"><p onClick={ () => handleSortLowToHigh(products) } >Low-High</p></div>
                    <div className="sort_btn"><p onClick={ () => handleSortHighToLow(products) } >High-Low</p></div>
                </div>
            </div>
        )
    }
}

export default Sort;
