//importing react, react components and styles
import React from 'react'
import './App.scss';
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import UserDashboard from './user/UserDashboard'
import {BrowserRouter, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './component/PrivateRoute';
// import Card from './features/Quotes/Card';
import Relax from './features/Relax/Relax';
import Notes from './features/Notes/Notes';
import Resources from './features/Resources/Resources';
// import Drafts from './features/Drafts/Draft';
// import { Provider } from 'react-redux';
// import store from './features/Drafts/store'


//creating App functional component
const App = () => {
  return (
    <>
         {/* toast container is used to display toast messages */}
      <ToastContainer/>
      {/* creating routes to different components */}
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          {/* private routes are used to keep the user data private */}
          <PrivateRoute exact path="/user/dashboard" component={UserDashboard}/>
          {/* <PrivateRoute exact path="/user/add" component={<Provider store={store}><Drafts /></Provider>}/> */}
          <PrivateRoute exact path='/user/relax' component={Relax}/>
          <PrivateRoute exact path='/user/notes' component={Notes}/>
          <PrivateRoute exact path='/user/activities' component={Resources}/>
      </BrowserRouter>
    </>

  )
}

export default App;
