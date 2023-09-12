import { ADD_CATEGORY_FAILED, ADD_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILED, DELETE_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILED, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS } from "../actions/actionTypes"

const initialState = {
    categories: [],
    loading: false,
    error: null
}
export default function categoryReducer(state = initialState, action){
    switch(action.type){
        case FETCH_CATEGORY_REQUEST:
            return { ...state, loading: true };
        case FETCH_CATEGORY_SUCCESS:
            return { ...state, loading: false, categories: action.payload };
        case FETCH_CATEGORY_FAILED:
            return { ...state, loading: false, error: action.payload };
        case ADD_CATEGORY_SUCCESS:
            return { ...state, categories: [...state.categories, action.payload] }
        case ADD_CATEGORY_FAILED:
            return { ...state, error: action.payload };
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload)
            };
        case DELETE_CATEGORY_FAILED:
                return { ...state, loading: false, error: action.payload };
              
              
        default:
            return state
    }
}