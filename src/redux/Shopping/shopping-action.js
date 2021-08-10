import * as actionTypes from "./shopping-type";

export const addToCart = (itemID) => {
    return {
      type: actionTypes.ADD_TO_CART,
      payload: {
        key: itemID,
      },
    };
  };
  
  export const removeFromCart = (itemID) => {
    return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: {
        key: itemID,
      },
    };
  };
  export const removeOne = (itemID) => {
    return {
      type: actionTypes.REMOVE_ONE,
      payload: {
        key: itemID,
      },
    };
  };
  
  export const adjustItemQty = (itemID, qty) => {
    return {
      type: actionTypes.ADJUST_ITEM_QTY,
      payload: {
        key: itemID,
        qty,
      },
    };
  };
  
  export const loadCurrentItem = (item) => {
    return {
      type: actionTypes.LOAD_CURRENT_ITEM,
      payload: item,
    };
  };