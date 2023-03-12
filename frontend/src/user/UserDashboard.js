//importing required react components
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

//importing required components & styles
import DashboardCards from '../features/DashboardCards';
import  '../user/UserDashboard.scss';
import Card from '../features/Quotes/Card';
import Footer from '../component/Footer';

//creating UserDashboard page as a functional component 
 const UserDashboard = (history) => {

    //creating state for profile details and adding credentials to it
    const [profile, setProfile] = useState("");
    const {name, email} = profile;

    //using effects to fetch the user credentials
    useEffect(()=>{
        fetch('/api/getme')
        .then(res =>{
            return res.json()
        })
        .then(result =>{
            //console.log(result)
            setProfile(result.user)
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    //creating logout function to come back to landing page
    const logOut = () =>{
        axios.get('https://localhost:3000')
        .then(result =>{
            console.log(result.data)
            toast.success('Log out successfully');
            localStorage.removeItem('token');
        })
        .catch(error =>{
            console.log(error);
        })
    }


  return (
    <>
     {/* <Header/>  */}
     {/* Dashboard body */}
    <div className='DashboardBg'>
        <div className="Dashboard-header">
            <b className='welcome'>Welcome User!</b> 
            <span className="logout-div">
            {/* linking the logout function */}
            <Link className='logout' to ="/" onClick={logOut} style={{float : "right"}}>Log out </Link>                                                               
        </span>  
        <Card/>
        </div> 

         {/* Dashboard cards, data is passed as props to app.js*/}
     <div className='cards_body'>
            
         {/* creating dashboard cards  & linking it to different components */}
            <DashboardCards 
        image="https://miro.medium.com/max/1400/1*14NgZjywc9Ip0B2UVc01Aw.jpeg" 
        alt="meditation" 
        id="Journal" 
        title="Journal" 
        desc="Write your thoughts here" 
        btn="Open" 
        to="/user/card"/>
         
            <DashboardCards 
        image="https://img.freepik.com/premium-vector/black-boy-meditating-lotus-pose-gymnastic-yoga-meditation-children_254685-1058.jpg" 
        alt="meditation" 
        title="Relax" 
        desc="Take a moment to relax and do nothing" 
        btn="Open" 
        id="Relax" 
        to ="/user/relax"/>

            <DashboardCards 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M6SzMy82SMHPAcWvpDIZoTiPKYXvhxnswA&usqp=CAU" 
        alt="meditation" 
        title="Daily Check-in" 
        desc="Track your day" 
        id="Notes"
        btn="Open"
        to="/user/notes"/>
        
            <DashboardCards 
        image="https://us.123rf.com/450wm/noneshco/noneshco2003/noneshco200300008/noneshco200300008.jpg?ver=6" 
        alt="meditation" 
        title="Activity" 
        desc="Resources to help you" 
        btn="Open"
        id="Activities"
        to="/user/activities"/>

        </div> 
                
    </div>
  
   <Footer/>
                
    </>
  );
}

//exporting user documents
export default UserDashboard;
