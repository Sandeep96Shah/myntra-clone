import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showFilter } from '../action/index';

class Filter extends Component {

    constructor(props){
        super(props);
        this.state={
            cat:"",
            category:"",
            brand:[],
        }
    }

    handleBrand = (e) => {
        // console.log("Brand", e.target.value);
        // console.log("checked", e.target.checked);
        // console.log("Brand", e.target.value);
        if(e.target.checked){
            this.setState({
                brand:[...this.state.brand, e.target.value],
            })
        }else{
            const newBrand = this.state.brand.filter(elem => elem != e.target.value);
            this.setState({
                brand:newBrand,
            })
        }

    }

    handleCategory = (e) => {
        console.log("category",e.target.value);
        this.setState({
            category:e.target.value,
        })
    }

    handleCategory1 = (e) => {
        console.log("cat",e.target.value);
        this.setState({
            cat:e.target.value,
        })
    }

    handleShowFilter = () => {
        const { cat, category, brand } = this.state;
        console.log("handleShowFilter");
        console.log("xxxxxxxxxxx", cat, category, brand);
        this.props.dispatch(showFilter(cat,category,brand));
        this.setState({
            cat:"",
            category:"",
            brand:[],
        })
    }

    render() {
        console.log("brand Selection", this.state.brand);
        console.log("Cat", this.state.cat);
        console.log("category", this.state.category);
        return (
            <div className="filter_container">
                <p className="filter_title">Filter</p>
                <div className="category_container" onChange={ (e) => this.handleCategory1(e) }>
                    <input type="radio" name="cat" value="men" />
                    <label htmlFor="cat">Men</label><br />
                    <input type="radio" name="cat" value="women" />
                    <label htmlFor="cat">Women</label><br />
                    <input type="radio" name="cat" value="boys" />
                    <label htmlFor="cat">Boys</label><br />
                    <input type="radio" name="cat" value="girls" />
                    <label htmlFor="cat">Girls</label><br />
                </div>
                <div className="category_container" onChange={ (e) => this.handleCategory(e) }>
                    <p className="category_title">Category</p>
                    <input type="radio" name="category" value="fullSleeve" />
                    <label htmlFor="category">Fullsleeve</label><br />
                    <input type="radio" name="cat" value="halfSleeve" />
                    <label htmlFor="category">halfsleeve</label><br />
                </div>
                <div className="category_container">
                    <p className="category_title">Brand</p>
                    <input type="checkbox" name="brand" value="Parx Shirts" onChange={ (e) => this.handleBrand(e) }/>
                    <label htmlFor="brand">Parx Shirts</label><br />
                    <input type="checkbox" name="brand" value="Arrow Shirts" onChange={ (e) => this.handleBrand(e) } />
                    <label htmlFor="brand">Arrow Shirt</label><br />
                    <input type="checkbox" name="brand" value="Zodiac Shirts" onChange={ (e) => this.handleBrand(e) } />
                    <label htmlFor="brand">Zodiac Shirts</label><br />
                    <input type="checkbox" name="brand" value="Lee Shirts" onChange={ (e) => this.handleBrand(e) } />
                    <label htmlFor="brand">Lee Shirt</label><br />
                </div>
                <div className="filter_btn" onClick={ () => this.handleShowFilter() }>Filter</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      state,
    };
}

export default connect(mapStateToProps)(Filter);
