import fakeData from "../../Components/fakeData";
import * as actionTypes from "../Shopping/shopping-type";

const INITIAL_STATE = {
    products: fakeData,
    cart: [],
    currentItem: null,
  };
  
  const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        // Great Item data from products array
        const item = state.products.find(
          (product) => product.key === action.payload.key
        );
        // Check if Item is in cart already
        const inCart = state.cart.find((item) =>
          item.key === action.payload.key ? true : false
        );
  
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.key === action.payload.key
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.key !== action.payload.key),
        };

        case actionTypes.REMOVE_ONE:
          const exist = state.cart.find((x) => x.key === action.payload.key);
          if (exist.qty === 1) {
            return {
              ...state,
              cart: state.cart.filter((item) => item.key !== action.payload.key),
            };
           }
       
        else {
          let count= exist.qty-1;      
           return{
             ...state,
           cart: state.cart.map((x) =>
            x.key === action.payload.key ? { ...exist, qty: count } : x
          )
           };
          
         }
       
      case actionTypes.ADJUST_ITEM_QTY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default shopReducer;