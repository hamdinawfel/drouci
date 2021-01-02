import {
    LOADING_DATA,
    GET_COURSES_BY_CATEGORIE,
    GET_COURSES,
    GET_All_COURSES
    } from './types';
    
    const initialState = {
      data: [],
      fitredData: [],
      loading: false
    };
    
    export default function(state = initialState, action) {
      switch (action.type) {
        case LOADING_DATA:
          return {
            ...state,
            loading: true
          };
          case GET_All_COURSES:
            return {
              ...state,
              data: action.payload,
              fitredData: action.payload,
              loading: false
            };
          case GET_COURSES:
            return {
              ...state,
              data: action.payload,
              fitredData: action.payload,
              loading: false
            };
          case GET_COURSES_BY_CATEGORIE:
            let filtred = state.data.filter(item => item.category === action.payload)
            return{
              ...state,
              fitredData: filtred,
              loading: false
            }
            
        default:
          return state;
      }
    }