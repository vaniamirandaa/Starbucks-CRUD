/* eslint-disable no-case-declarations */
import { FETCH_DETAIL_FAILED, FETCH_DETAIL_SUCCESS, FETCH_ITEM_FAILED, FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS } from "../actions/actionTypes"

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
        case FETCH_DETAIL_SUCCESS:
            return { ...state, loading: false, item: action.payload }
        case FETCH_DETAIL_FAILED:
            return { ...state, loading: false, error: action.payload }
            default:
            return state
    }
}