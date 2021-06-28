import { Actiontypes } from "../constants/action-types"


export const setProducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (products) => {
    return {
        type: Actiontypes.SELECTED_PRODUCTS,
        payload: products,
    };
};