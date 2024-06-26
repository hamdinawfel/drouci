import {
    LOADING_USER,
    GET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    REDIRECT_USER_TO_AUTH,
    ADD_USER_DETAILS
  } from './types';
  import axios from 'axios';
  import jwtDecode from 'jwt-decode';
  
  export const loginUser = (userData, history) => (dispatch) => {
    axios
      .post("/users/login", userData)
      .then(res => { 
        console.log(res.data.success)
        dispatch({ type: SET_AUTHENTICATED });
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
      })
      .catch(err =>
        // console.log(err.response.data)
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        })
      );
  };
  
  export const signupUser = (userData) => dispatch => {
    axios
      .post("/users/signup", userData)
      .then(res => { 
        dispatch({ type: SET_AUTHENTICATED });
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
      })
      .catch(err =>
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data

        })
      );
  };

  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('jwtToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
  };

  export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
   const  token = localStorage.getItem("jwtToken");
    const decodedToken = jwtDecode(token);
    axios
      .get(`/users/${decodedToken._id}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  const setAuthorizationHeader = (token) => {
    const jwtToken = `bearer ${token}`;
    localStorage.setItem('jwtToken', jwtToken);
    axios.defaults.headers.common['Authorization'] = jwtToken;
  };

  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  }

  export const redirecteUserToAuth = (path) => (dispatch) => {
    dispatch({ type : REDIRECT_USER_TO_AUTH,
              payload: path });
  }
  export const addUserDetail = (userData) => (dispatch) => {
    dispatch({ type: ADD_USER_DETAILS });
    axios
    .put('/users/', userData)
    .then(res => { 
      dispatch(getUserData());
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
  }

  
  