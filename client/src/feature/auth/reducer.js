import {
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    GET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    REDIRECT_USER_TO_AUTH
  } from './types';
  
  const initialState = {
    authenticated: false,
    loading: false,
    level:'',
    firstname:'',
    lastname:'',
    email:'',
    errors:{},
    path:'/dashboard'
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true,
          loading: true
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case GET_USER:
        return {
          authenticated: true,
          level:action.payload.level,
          firstname:action.payload.firstname,
          lastname:action.payload.lastname,
          email: action.payload.email,
          path:  '/dashboard',
          loading: false,

        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
        case SET_ERRORS:
        return {
          ...state,
          loading: false,
          errors: action.payload
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          errors: {}
        };
      case REDIRECT_USER_TO_AUTH:
        return {
          ...state,
          loading: false,
          path: action.payload
        };
      default:
        return state;
    }
  }