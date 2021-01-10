import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import axios from 'axios';
//M-UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//UTILS
import Footer from './utils/Footer'
import Navbar from './utils/Navbar'
// import PrivateRoute from './utils/PrivateRoute'
//pages
import Home from './pages/home/index'
import Learn from './pages/learn/index'
import Course from './pages/course/index'
import Catalog from './pages/catalog/index'
import Dashboard from './pages/dashboard/index'
import Teacher from './pages/teacher/index'
//feature
import Login from './feature/auth/Login'
import Signup from './feature/auth/Signup'
//Redux setup
import store from './redux/store'
import { Provider } from 'react-redux';
import { SET_AUTHENTICATED } from './feature/auth/types';
import { logoutUser, getUserData } from './feature/auth/action';
// Authentication setup
import jwtDecode from 'jwt-decode';


const token = localStorage.getItem("jwtToken");
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser());
    window.location.href='/login';
    
  }else{
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

const theme = createMuiTheme({
  palette: {
     primary: {
      light: '#E5EFF5',
      main: '#017a9b',//#017a9b-#02B3E4//
      dark: '#001161',
      text: '#525c65',
      title: '#3c3b37',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
            <Router>
            <Navbar />
              <div > 
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/teacher" component={Teacher} />
                  <Route exact path="/courses/:courseId" component={Course} />
                  <Route  exact path="/catalog/:level" component={Catalog} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
                  <Route exact path="/learn/:wishlistId" component={Learn} />
                  {/* <PrivateRoute exact path="/learn/:wishlistId" component={Learn} /> */}
                </Switch>
              </div>
          <Footer />
          </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
