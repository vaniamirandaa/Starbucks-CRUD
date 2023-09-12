/* eslint-disable no-case-declarations */
import { ADD_ITEM_FAILED, ADD_ITEM_SUCCESS, DELETE_ITEM_SUCCESS, EDIT_ITEM_FAILED, EDIT_ITEM_SUCCESS, FETCH_DETAIL_FAILED, FETCH_DETAIL_SUCCESS, FETCH_ITEM_FAILED, FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS } from "../actions/actionTypes"

const initialState = {
    items: [],
    item: null,
    loading: false,
    error: null,
    
}
export default function itemReducer(state = initialState, action){
    switch(action.type){
        case FETCH_ITEM_SUCCESS:
            return { ...state, loading: false, items: action.payload }
        case FETCH_ITEM_REQUEST:
            return { ...state, loading: true }
        case FETCH_ITEM_FAILED:
            return { ...state, loading: false, error: action.payload }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM_SUCCESS:
            return { ...state, items: [...state.items, action.payload] };
        case ADD_ITEM_FAILED:
            return { ...state, error: action.payload };
        case EDIT_ITEM_SUCCESS:
            const editItem = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const updatedItems = [...state.items];
            updatedItems[editItem] = action.payload;
            return { ...state, items: updatedItems };
        case EDIT_ITEM_FAILED:
            return { ...state, loading: false, error: action.payload }

        case FETCH_DETAIL_SUCCESS:
            return { ...state, loading: false, item: action.payload }

        case FETCH_DETAIL_FAILED:
            return { ...state, loading: false, error: action.payload }
            default:
            return state
    }
}