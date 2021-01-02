import {
    LOADING_DATA,
    GET_MY_COURSE,
    MARK_ITEM_AS_COMPLETED,
    GET_ERROR
    } from './types';
    import axios from 'axios';
  
    // Get My Course FROM WISHLIST
    export const getMyCourse = (wishlistId) => (dispatch) => {
      dispatch({ type: LOADING_DATA });
      axios
        .get(`/wishlist/${wishlistId}`)
        .then((res) => {
          dispatch({
            type: GET_MY_COURSE,
            payload: res.data
          });
        })
        .catch((err) => {
          console.log(err)
        });
    };
    // ADD COMPLETED section to WISHLIST
    export const markItemCompleted = (completeData) => (dispatch) => {
        axios
        .post(`/wishlist/${completeData.wishlistId}/complete`, completeData)
        .then((res) => {
          dispatch({ type: MARK_ITEM_AS_COMPLETED });
          dispatch(getMyCourse(completeData.wishlistId));
        })
        .catch((err) => {
          dispatch({ type: GET_ERROR});
        });
    };