import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movies } from '../action/index';
import { products } from '../db.json';
import  Product from './Product';
import Sort from './Sort';
import { lowToHigh, highToLow } from '../action/index';


class ProductItem extends Component {

    //dispatch an action to take data from the db.json and store it in the store
    componentDidMount() {
        console.log("data", products);
        this.props.dispatch(movies(products));
    }
    
    handleSortLowToHigh = (products) => {
        this.props.dispatch(lowToHigh(products));
    }

    handleSortHighToLow = (products) => {
        this.props.dispatch(highToLow(products));
    }

    render() {
        const { products, sorted_products, wishList, bag,  isSorted, isProducts, isWishList, isBag, isSearch, search } = this.props.state;
        console.log("products", products, isSorted);
        console.log("props", this.props.state);
        const displayProducts = isSorted ? sorted_products : isWishList ? wishList : isBag ? bag : isSearch ? search : products;
        return (
            <div>
                <Sort handleSortLowToHigh={this.handleSortLowToHigh} products={products} handleSortHighToLow={this.handleSortHighToLow} />
                <div className="products_list">
                    {
                        displayProducts.map(prod => <Product product={prod} key={prod.id} /> )
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      state,
    };
}
  

export default connect(mapStateToProps)(ProductItem);
