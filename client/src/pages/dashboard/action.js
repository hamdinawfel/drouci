import {
  LOADING_DATA,
  ADD_TO_WISHLIST,
  GET_WISHLIST,
  GET_ERROR
  } from './types';
  import axios from 'axios';

  export const addToWishlist = (wishlistData) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .post("/wishlist/", wishlistData)
      .then((res) => {
        dispatch({ type: ADD_TO_WISHLIST });
      })
      .catch((err) => {
        dispatch({ type: GET_ERROR});
      });
  };

  export const getWishlist = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get('/wishlist/')
      .then((res) => {
        dispatch({ 
          type: GET_WISHLIST,
          payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_ERROR});
      });
  };