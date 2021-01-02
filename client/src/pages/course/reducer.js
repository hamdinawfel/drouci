import {
  LOADING_DATA,
  SET_COURSE
  } from './types';
  
  const initialState = {
    loading: false,
    data: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true
        };
        case SET_COURSE:
          return {
            ...state,
            data: action.payload,
            loading: false
          };
      default:
        return state;
    }
  }