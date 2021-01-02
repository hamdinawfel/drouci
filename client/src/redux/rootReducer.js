import { combineReducers } from 'redux';

import userReducer from '../feature/auth/reducer';
import coursesReducer from '../pages/catalog/reducer';
import courseReducer from '../pages/course/reducer';
import wishlistReducer from '../pages/dashboard/reducer';
import learnReducer from '../pages/learn/reducer';

const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    course: courseReducer,
    wishlist: wishlistReducer,
    learn: learnReducer,
  })
  
export default rootReducer;