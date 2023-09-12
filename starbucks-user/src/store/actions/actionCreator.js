import { 
  FETCH_DETAIL_FAILED,
    FETCH_DETAIL_SUCCESS, 
    FETCH_ITEM_FAILED, 
    FETCH_ITEM_REQUEST, 
    FETCH_ITEM_SUCCESS, 
} 
    from "./actionTypes"


export const fetchItemSuccess = (payload) => {
    return {
        type: FETCH_ITEM_SUCCESS,
        payload
    }
}
export const fetchItemFailed = (payload) => {
    return {
        type: FETCH_ITEM_FAILED,
        payload
    }
}
export const fetchItemRequest = (payload) => {
    return {
        type: FETCH_ITEM_REQUEST,
        payload
    }
}
  
export const fetchItemDetailSuccess = (payload) => ({
    type: FETCH_DETAIL_SUCCESS,
    payload
})

export const fetchItemDetailFailed = (payload) => {
  return {
      type: FETCH_DETAIL_FAILED,
      payload
  }
}


export const fetchItemAsync = () => {
  return(dispatch) => {
      dispatch(fetchItemRequest());
      fetch("http://localhost:3000/u/items", { 
      })
      .then((res) => res.json())
      .then((data) =>{
          const action = fetchItemSuccess(data)
          dispatch(action)
      })
      .catch((error) => fetchItemFailed(error))
  }
}

export const fetchItemDetail = (id) => {
    return (dispatch) => {
      dispatch(fetchItemRequest());
      fetch(`http://localhost:3000/u/items/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchItemDetailSuccess(data));

        })
        .catch((error) => {
          dispatch(fetchItemDetailFailed(error.message));
        });
    };
};


  