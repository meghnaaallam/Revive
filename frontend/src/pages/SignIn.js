//importing react components and styles
import React, {useState} from 'react'
import axios from 'axios'
import { toast} from 'react-toastify';
import Header from '../component/Header'
import Footer from '../component/Footer'
import './Styles/SignIn.scss'

//creating SignIn page as a functional component 
const SignIn = ({history}) => {

    //creating state for values and adding credentials to it
    const [values, setValues] = useState({});
    const { email, password} = values;

    //creating function to handle change
    const handleChange = name => (e) =>{
        // console.log(e.target.value);
        setValues({...values, [name]: e.target.value});
    }

    //creating async function to handle submit
    const handleSubmit = async (e) =>{
        //preventing default values
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/signin', {
                email,
                password
            });
            //using toasts to display success and error messages
            console.log(data);
            //if credentials matches in the database
            if  (data.success === true){
                setValues({ email: '', password:''});
                toast.success("Log In successfully");
                //store the token into local storage & redirect user to dashboard
                localStorage.setItem("token", JSON.stringify(data))
                if (typeof window !== "undefined"){
                    setTimeout(()=>{
                        history.push('/user/dashboard');
                    }, 2000);
                }
            }
        } catch(err){
            console.log(err.response.data.error);
            toast.error(err.response.data.error);
        }
    }
    return (
        <div className='sup-body'>
            <Header/>
            <div className="container-s ">
                <h2 className="signin_title text-center">SIGN IN</h2>
                <form className=" col-sm-6 offset-3 pt-5 signup_form">
                    {/* for email-id */}         
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("email")}  type="email" id="form4Example2" className="form-control"  value={email}/>
                        <label className="form-label" htmlFor="form4Example2">Email </label>
                    </div>
                    {/* for password */}
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("password")}   type="password" id="form4Example3" className="form-control" value={password}  />
                        <label className="form-label" htmlFor="form4Example3">Password</label>
                    </div>
                    {/* submit button */}
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">Log In</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default SignIn