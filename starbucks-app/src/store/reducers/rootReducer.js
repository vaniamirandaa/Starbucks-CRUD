import { combineReducers } from 'redux'

import itemReducer from './itemReducer'
import categoryReducer from './categoryReducer'



const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoryReducer,
  
})

export default rootReducer