import { Actiontypes } from "../constants/action-types";


const initialState = {
    products: []
}

export const productReducer = (state=initialState,action) => {
    switch (action.type) {
        case Actiontypes.SET_PRODUCTS:
            return {...state, products: action.payload };
        default:
            return state;
    }
};

export const selectedProductReducer = (state={},action) => {
    switch (action.type) {
        case Actiontypes.SELECTED_PRODUCTS:
             return {...state,...action.payload};
        default:
            return state;
    }
}