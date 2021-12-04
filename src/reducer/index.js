import { PRODUCTS, LOW_HIGH, HIGH_LOW, NORMAL, ADD_TO_WISHLIST, SHOW_WISHLIST, SEARCH } from "../action";

const initialState={
    products:[],
    isProducts:true,
    isSorted:false,
    sorted_products:[],
    wishList:[],
    isWishList:false,
    bag:[],
    isBag:false,
    search:[],
    isSearch:false,
}
//return based on action type
export default function products(state=initialState, action){
    switch(action.type){
        case PRODUCTS:
            return{
                ...state,
                products:action.products,
            }
        case NORMAL:
            return{
                ...state,
                isSorted:false,
                isProducts:true,
                isWishList:false,
                isBag:false,
                isSearch:false,
            }
        case LOW_HIGH:
            let sortedProducts;
            if(state.isWishList){
                sortedProducts=[...state.wishList];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }else if(state.isBag){
                sortedProducts=[...state.bag];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }else if(state.isSearch){
                sortedProducts=[...state.search];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }else{
                sortedProducts=[...state.products];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }
            
            console.log("sortedProducts", sortedProducts);
            
            return {
                ...state,
                isSorted:true,
                sorted_products:sortedProducts,
            }
        case HIGH_LOW:
            let sortedProductsHL;
            if(state.isWishList){
                sortedProductsHL=[...state.wishList];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }else if(state.isBag){
                sortedProductsHL=[...state.bag];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }else if(state.isSearch){
                sortedProductsHL=[...state.search];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }else{
                sortedProductsHL=[...state.products];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }
            return {
                ...state,
                isSorted:true,
                sorted_products:sortedProductsHL,
                // isBag:false,
                // isProducts:false,
                // isWishList:false,
                // isSearch:false,
            }
        case ADD_TO_WISHLIST:
            //try to add the size later
            console.log("product added to the wishlist", action.product);
            state.wishList.push(action.product); 
            return{
                ...state,
            }
        case SHOW_WISHLIST:
            return {
                ...state,
                isWishList:true,
                isBag:false,
                isProducts:false,
                isSorted:false,
                isSearch:false,
            }
        case SEARCH:
            state.search=state.products.filter(prod => prod.name == action.name);
            console.log("searched products", state.search);
            return {
                ...state,
                isWishList:false,
                isBag:false,
                isProducts:false,
                isSorted:false,
                isSearch:true,
            }
    }
    return state;
}