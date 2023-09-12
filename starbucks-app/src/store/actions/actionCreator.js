import { 
    ADD_CATEGORY_FAILED,
    ADD_CATEGORY_SUCCESS,
    ADD_ITEM_FAILED,
    ADD_ITEM_SUCCESS,
    ADD_USER_FAILED,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    DELETE_CATEGORY_FAILED,
    DELETE_CATEGORY_SUCCESS,
    DELETE_ITEM_FAILED,
    DELETE_ITEM_SUCCESS,
    EDIT_ITEM_FAILED,
    EDIT_ITEM_SUCCESS,
    FETCH_CATEGORY_FAILED,
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS, 
    FETCH_DETAIL_FAILED, 
    FETCH_DETAIL_SUCCESS, 
    FETCH_ITEM_FAILED, 
    FETCH_ITEM_REQUEST, 
    FETCH_ITEM_SUCCESS, 
    FETCH_USER_FAILED, 
    FETCH_USER_SUCCESS,
    
} 
    from "./actionTypes"

import Swal from 'sweetalert2';


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
export const fetchCategorySuccess = (payload) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload
    }
}
export const fetchCategoryRequest = (payload) => {
    return {
        type: FETCH_CATEGORY_REQUEST,
        payload
    }
}
export const fetchCategoryFailed = (payload) => {
    return {
        type: FETCH_CATEGORY_FAILED,
        payload
    }
}
export const addCategorySuccess = (payload) => {
    return {
        type: ADD_CATEGORY_SUCCESS,
        payload
    }
}

export const addCategoryFailed = (payload) => {
    return {
        type: ADD_CATEGORY_FAILED,
        payload
    }
};

export const deleteCategorySuccess = (payload) => {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        payload
    }
}

export const deleteCategoryFailed = (payload) => {
    return {
        type: DELETE_CATEGORY_FAILED,
        payload
    }
}
export const deleteItemSuccess = (payload) => {
    return {
        type: DELETE_ITEM_SUCCESS,
        payload
    }
}

export const deleteItemFailed = (payload) => {
    return {
        type: DELETE_ITEM_FAILED,
        payload
    }
}
export const addUserRequest = (payload) => {
    return {
      type: ADD_USER_REQUEST,
      payload
    };
};
export const addUserSuccess = (payload) => {
    return {
        type: ADD_USER_SUCCESS,
        payload
    };
};
export const addUserFailed = (payload) => {
    return {
        type: ADD_USER_FAILED,
        payload
    };
};
export const editItemSuccess = (payload) => {
    return{    
        type: EDIT_ITEM_SUCCESS,
        payload
    }
};

export const editItemFailed = (payload) => {
    return{    
        type: EDIT_ITEM_FAILED,
        payload
    }
  };
export const addItemSuccess = (payload) => {
    return {    
        type: ADD_ITEM_SUCCESS,
        payload
    }
};
export const addItemFailed = (error) => {
    return {
        type: ADD_ITEM_FAILED,
        payload: error,

    }
};
export const fetchUserSuccess = (user, token) => {
    return{    
        type: FETCH_USER_SUCCESS,
        payload: user, token,
    }
};
export const fetchUserFailed = (error) => {
    return {   
        type: FETCH_USER_FAILED,
        payload: error,
    }
};
  
export const fetchItemDetailSuccess = (payload) => {
    return{    
        type: FETCH_DETAIL_SUCCESS,
        payload
    }
}
export const fetchItemDetailFailed = (payload) => {
    return {
        type: FETCH_DETAIL_FAILED,
        payload
    }
  }




  export const fetchUserAsync = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 
                  'Content-Type': 'application/json',
                 },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            const { access_token, user } = data;
            localStorage.setItem('access_token', access_token);

            dispatch(fetchUserSuccess(user, access_token));

            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You have successfully logged in!',
            });
        } catch (error) {
            dispatch(fetchUserFailed(error.message));
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Wrong email/password!.',
            });
        }
    };
};

export const registerUser = (userData) => {
    return (dispatch) => {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem("access_token"),
            },
            body: JSON.stringify(userData)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            return response.json();
        })
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Register Success',
                text: 'Success added new admin.',
            });
            dispatch(addUserSuccess(userData));
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Register Failed',
                text: 'Failed to add new user!',
            });
            dispatch(addUserFailed(error.message));
            console.log(error);
        });
    };
};

export const fetchItemAsync = () => {
  return(dispatch) => {
      dispatch(fetchItemRequest());
      fetch("http://localhost:3000/items", { 
          headers: {
              'access_token': localStorage.getItem("access_token"),
          }
      })
      .then((res) => res.json())
      .then((data) =>{
          const action = fetchItemSuccess(data)
          dispatch(action)
      })
      .catch((error) => fetchItemFailed(error))
  }
}

export const fetchCategoryAsync = () => {
  return(dispatch) => {
      fetch("http://localhost:3000/categories", {
          headers: {
              'access_token': localStorage.getItem("access_token"),
          }
      })
      .then((res) => res.json())
      .then((data) =>{
          const action = fetchCategorySuccess(data)
          dispatch(action)
      })
      .catch((error) => fetchCategoryFailed(error))
  }
}

export const addCategoryAsync = (categoryData) => {
  return (dispatch) => {
      fetch('http://localhost:3000/categories', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'access_token': localStorage.getItem("access_token"),
          },
          body: JSON.stringify(categoryData)
      })
      .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Category added',
            text: 'New category has been successfully added.',
        });
          dispatch(addCategorySuccess(categoryData));
          dispatch(fetchCategoryAsync())

      })
      .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Failed to add category. Please try again.',
        });
          dispatch(addCategoryFailed(error));  
      });
  };
};

export const deleteCategoryAsync = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Confirm Deletion',
            text: 'Are you sure you want to delete this category?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/categories/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'access_token': localStorage.getItem("access_token"),
                    },
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Failed to delete category: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(() => {
                    dispatch(deleteCategorySuccess(id));
                    Swal.fire({
                        icon: 'success',
                        title: 'Category Deleted',
                        text: 'The category has been successfully deleted.',
                    });
                })
                .catch((error) => {
                    dispatch(deleteCategoryFailed(error.message));
                    Swal.fire({
                        icon: 'error',
                        title: 'Delete Failed',
                        text: 'Failed to delete the category. Please try again.',
                    });
                });
            }
        });
    };
};


export const editItemAsync = (id, updatedItem) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem("access_token"),
        },
        body: JSON.stringify(updatedItem),
      })
      .then((response) => {
        if (!response.ok) {
            throw new Error(`${response.statusText}`);
        }
        return response.json();
        })        
        .then((data) => {
            Swal.fire({
                icon: 'success',
                title: 'Item changed',
                text: 'The item has been successfully edited.',
            });
           dispatch(editItemSuccess(data));
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Edit Failed',
                text: 'Failed to edit the item. Please try again.',
            });
            dispatch(editItemFailed(error.message));
        });
    };
  };
  
  export const addItemAsync = (newItem) => {
    return (dispatch) => {
      fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem("access_token"),
      },
        body: JSON.stringify(newItem),
      })
        .then((response) => response.json())
        .then((data) => {
            Swal.fire({
                icon: 'success',
                title: 'New item added',
                text: 'The item has been successfully added.',
            });
           dispatch(addItemSuccess(data));
           dispatch(fetchItemAsync())
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Add failed',
                text: 'Failed to add item. Please try again.',
            });
            dispatch(addItemFailed(error.message));
        });
    };
  };

  export const deleteItemAsync = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#006241',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/items/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'access_token': localStorage.getItem("access_token"),
                    },
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`${response.statusText}`);
                    }
                    return response.json();
                })
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Item Deleted',
                        text: 'The item has been successfully deleted.',
                    });
                    dispatch(fetchItemAsync());
                    // dispatch(fetchItemSuccess());
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Delete Failed',
                        text: 'Failed to delete the item. Please try again.',
                    });
                    dispatch(deleteItemFailed(error.message));
                });
            }
        });
    };
};

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


  