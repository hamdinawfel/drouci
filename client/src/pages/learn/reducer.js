import {
    LOADING_DATA,
    GET_MY_COURSE,
    } from './types';
    
    const initialState = {
      loading: false,
      course :{}, 
      completedSections : []
    };
    
    export default function(state = initialState, action) {
      switch (action.type) {
        case LOADING_DATA:
          return {
            ...state,
            loading: true
          };
          case GET_MY_COURSE:
            return {
              ...state,
              course: action.payload.courseId,
              completedSections: action.payload.completedSections,
              loading: false
            };
        default:
          return state;
      }
    }