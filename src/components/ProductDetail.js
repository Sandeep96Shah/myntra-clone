import React, { useState } from 'react';
import { FaArrowRight, FaHeart  } from 'react-icons/fa';
import {useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToWishlist } from '../action';

import '../Details.css';

const ProductDetail = (props) => {

        const [ value, setValue ] = useState(40);
        const [ selectSize, setSelectSize ] = useState(false);
        const location = useLocation();
        console.log("useLocation", location.state);
        const { name, description, price, id, image } = location.state.product;

        const handleWishlist = () => {
            props.dispatch(addToWishlist(location.state.product, value));
        }
        console.log("selected size value", value);
        return (
            <div className="detail_outer_container">
                <div className="detail_container">
                <div className="detail_image">
                    <img src={image} />
                </div>
                <div className="detail_description">
                    <div className="detail_div1">
                        <div><p className="name">{name}</p></div>
                        <div><p className="desc">{description}</p></div>
                        <div><p className="review">161 reviews</p></div>
                    </div>
                    <div className="detail_div2">
                        <div><p className="price">{price}</p></div>
                        <div><p className="tax">Inclusive of all taxes</p></div>
                        <div><p className="size">Select Size</p></div>
                        <div className="size_range">
                            <div onClick={ () => setValue(38) } >38</div>
                            <div onClick={ () => setValue(40) } >40</div>
                            <div onClick={ () => setValue(42) } >42</div>
                            <div onClick={ () => setValue(44) } >44</div>
                            <div onClick={ () => setValue(46) } >46</div>
                        </div>
                        <div className="choose">
                            <div><p className="bag">GO TO BAG <FaArrowRight /> </p></div>
                            <div><p className="wishlist"onClick={ () => handleWishlist() } ><FaHeart /> WISHLIST </p></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
}

function mapStateToProps(state) {
    return {
      state,
    };
}

export default connect(mapStateToProps)(ProductDetail);
