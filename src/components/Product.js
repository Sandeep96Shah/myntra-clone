import React from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';


const Product = (props) => {
    const { name, price, description, image } = props.product;
    
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/productDetails", {state:{product:props.product}});
    }
    console.log("ppppppp", props);
    return (
        <div className="item_container">                 
            <div className="item_image">
                <img src={image} onClick={ () => handleClick() } />
            </div>
            <div className="item_details">
                <div className="item_name" ><p>{name}</p></div>
                <div className="item_desc"><p>{description}</p></div>
                <div className="item_price"><p> Rs. {price}</p></div>
                { props.state.isWishList && <div>Size:{props.product.size}</div> }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      state,
    };
}

export default connect(mapStateToProps)(Product);

