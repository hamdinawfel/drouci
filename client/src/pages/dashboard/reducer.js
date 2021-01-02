import {
  LOADING_DATA,
  ADD_TO_WISHLIST,
  GET_WISHLIST,
  GET_ERROR
  } from './types';
  
  const initialState = {
    loading: false,
    isExist:false,
    data: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true
        };
        case ADD_TO_WISHLIST:
          return {
            ...state,
            courses: action.payload,
            loading: false
          };
        case GET_ERROR:
          return {
            ...state,
            loading: false,
            isExist: true,
          };
        case GET_WISHLIST:
          return {
            ...state,
            loading: false,
            data:action.payload
          };
      default:
        return state;
    }
  }