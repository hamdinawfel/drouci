import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, authenticated, loading, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        localStorage.jwtToken && !loading ? (
        <Component {...props} />
      ) : (
        // <Redirect to="/" />
        null
      )
    }
  />
);

const mapStateToProps = state => ({
    authenticated: state.user.authenticated,
    loading: state.user.loading
});
export default connect(mapStateToProps)(PrivateRoute);