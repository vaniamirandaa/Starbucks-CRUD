import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILED, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from "../actions/actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
  isAuthenticated: false,
    user: null,
    token: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_USER_SUCCESS:
      return { ...state, loading: false, users: [...state.users, action.payload], error: null };
    case ADD_USER_FAILED:
      return { ...state, loading: false, error: action.payload };
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token, };
    case FETCH_USERS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
