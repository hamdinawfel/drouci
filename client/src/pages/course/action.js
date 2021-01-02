import {
  LOADING_DATA,
  SET_COURSE,
  } from './types';
  import axios from 'axios';

  // Get course
  export const getCourse = (courseId) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/courses/${courseId}`)
      .then((res) => {
        dispatch({
          type: SET_COURSE,
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err)
      });
  };