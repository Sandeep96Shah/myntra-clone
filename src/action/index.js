export const PRODUCTS="PRODUCTS";
export const LOW_HIGH="LOW_HIGH";
export const HIGH_LOW="HIGH_LOW";
export const NORMAL="NORMAL";
export const ADD_TO_WISHLIST="ADD_TO_WISHLIST";
export const SHOW_WISHLIST="SHOW_WISHLIST";
export const SEARCH="SEARCH";



export function movies(products){
    return {
        type:PRODUCTS,
        products,
    }
}

export function lowToHigh(products){
    return{
        type:LOW_HIGH,
        products,
    }
}

export function highToLow(products){
    return{
        type:HIGH_LOW,
        products,
    }
}

export function normalDisplay(){
    return{
        type:NORMAL,
    }
}

export function addToWishlist(product, size){
    product.size=size;
    return{
        type:ADD_TO_WISHLIST,
        product,
    }
}

export function showWishlist(){
    return{
        type:SHOW_WISHLIST,
    }
}

export function search(name){
    return{
        type:SEARCH,
        name,
    }
}
