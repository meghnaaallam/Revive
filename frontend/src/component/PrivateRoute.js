//importing files
import React from 'react';
import {Route, Link} from 'react-router-dom';

//creating react functional Component for private routing
const PrivateRoute = ({...rest}) => {
    //using json token to get items from local storage
    const auth = JSON.parse(localStorage.getItem('token'));
    if (auth){
        if (auth.token){
          return <Route {...rest}/>
        }
    }
    //if no token present, will redirect to Signin page
  return <Link to="/signin"/>
};

//exporting react function
export default PrivateRoute;
