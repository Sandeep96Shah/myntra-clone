import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movies } from '../action/index';
import { products } from '../db.json';
import  Product from './Product';
import Sort from './Sort';
import { lowToHigh, highToLow, viewSimilar, removeFromWishlist, removeFromBag } from '../action/index';
//checking with the filter
import Filter from './Filter';


class ProductItem extends Component {

    //dispatch an action to take data from the db.json and store it in the store
    // constructor(props){
    //     super(props);
    //     this.state={
    //         showFilter:true,
    //     }
    // }
    componentDidMount() {
        console.log("data", products);
        this.props.dispatch(movies(products));
        localStorage.setItem('bag', JSON.stringify({"bag":[]}));
    }
    
    handleSortLowToHigh = (products) => {
        this.props.dispatch(lowToHigh(products));
    }

    handleSortHighToLow = (products) => {
        this.props.dispatch(highToLow(products));
    }

    handleViewSimilar = (price) => {
        console.log("price", price);
        this.props.dispatch(viewSimilar(price));
    }

    handleRemoveFromWishlist = (id) => {
        this.props.dispatch(removeFromWishlist(id));
    }

    handleRemoveFromBag = (id) => {
        this.props.dispatch(removeFromBag(id));
    }

    render() {
        const { products, sorted_products, wishList, bag,  isSorted, isProducts, isWishList, isBag, isSearch, search, isViewSimilar, viewSimilar, isFilter, filter  } = this.props.state;
        console.log("products", products, isSorted);
        console.log("props", this.props.state);
        const displayProducts = isSorted ? sorted_products : isWishList ? wishList : isBag ? bag : isSearch ? search : isViewSimilar ? viewSimilar : isFilter ? filter: products;
        return (
            <div>
                <Sort handleSortLowToHigh={this.handleSortLowToHigh} products={products} handleSortHighToLow={this.handleSortHighToLow} />
                <div className="main_body">
                    <Filter />
                    
                    <div className="products_list">
                        {
                            displayProducts.map(prod => <Product product={prod} key={prod.id} handleViewSimilar={this.handleViewSimilar} handleRemoveFromWishlist={this.handleRemoveFromWishlist} handleRemoveFromBag={this.handleRemoveFromBag}  /> )
                        }
                    </div>
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
