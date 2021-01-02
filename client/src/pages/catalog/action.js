import {
    LOADING_DATA,
    GET_All_COURSES,
    GET_COURSES,
    GET_COURSES_BY_CATEGORIE,
    SET_ERRORS
    } from './types';
    import axios from 'axios';
  
      // Get all courses by level
      export const getCoursesByLevel = (level) => (dispatch) => {
        dispatch({ type: LOADING_DATA });
        axios
        .get(`/catalog/${level}`)
          .then((res) => {
            dispatch({
              type: GET_COURSES,
              payload: res.data
            });
          })
          .catch((err) => {
            dispatch({
              type: SET_ERRORS,
              payload: []
            });
          });
      };
  
      //filtering courses by category
      export const getCoursesByCategory = (category) => (dispatch) => {
        dispatch({ type: LOADING_DATA });
        dispatch({ 
            type: GET_COURSES_BY_CATEGORIE,
            payload: category 
        });
      };
    // Get all courses by level
    export const getAllCourses = () => (dispatch) => {
      dispatch({ type: LOADING_DATA });
      axios
      .get('/courses/')
        .then((res) => {
          dispatch({
            type: GET_All_COURSES,
            payload: res.data
          });
        })
        .catch((err) => {
          dispatch({
            type: SET_ERRORS,
            payload: []
          });
        });
    };