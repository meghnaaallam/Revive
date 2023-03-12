//importing react components and styles
import React, {useState} from 'react'
import axios from 'axios'
import { toast} from 'react-toastify';
import Header from '../component/Header'
import Footer from '../component/Footer'
import './Styles/SignUp.scss'

//creating SignUp page as a functional component 
const SignUp = ({history}) => {

    //creating state for values and adding the credentials to it
    const [values, setValues] = useState({
        name: '',
        email: '',
        password:''
    });
    const {name, email, password} = values;

    //creating function to handle change
    const handleChange = name => (e) =>{
        // console.log(e.target.value);
        setValues({...values, [name]: e.target.value});
    }

    //creating function to handle submit
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/signup', {
                name,
                email,
                password
            });
            //using toasts to display success and error messages
            console.log(data);
            //if credentials matches in the database
            if  (data.success === true){
                setValues({name: '', email: '', password:''});
                toast.success("Sign up successfully, please Login!");
                //store the token into local storage & redirect user to sign in page
                localStorage.setItem("token", JSON.stringify(data))
                if (typeof window !== "undefined"){
                    setTimeout(()=>{
                        history.push('/signin');
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
            <div className="container-s  pt-5">
                <h2 className="signup_title text-center">SIGN UP</h2>
                <form className=" col-sm-6 offset-3 pt-5 signup_form">
                    {/* for name */}
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("name")}  type="text" id="form4Example1" className="form-control"  value={name} />
                        <label className="form-label" htmlFor="form4Example1">Name</label>
                    </div>
                    {/* for email-id */}
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("email")}   type="email" id="form4Example2" className="form-control"  value={email} />
                        <label className="form-label" htmlFor="form4Example2">Email </label>
                    </div>
                    {/* for password */}
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("password")}   type="password" id="form4Example3" className="form-control" value={password}  />
                        <label className="form-label" htmlFor="form4Example3">Password</label>
                    </div>
                    {/* submit button */}
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">Register</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

//exporting SignUp page
export default SignUp