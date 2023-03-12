//importing files 
import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss';

//creating react header functional component
const Header = ({history}) => {
    //history returns the user token
    return (
            <nav>
                <div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    </button>
                        <ul className="navbar">
                            {/* creating navigation link to the Home page */}
                            <li className="nav-home">     
                                <Link className="nav-link" to ="/" >Home </Link>
                            </li>
                            <div className='Signin-Signup'>
                                <li className="nav-SupIn">
                                    {/* creating navigation link to the SignUp page */}
                                    <Link className="nav-link" to ="/signup" >Sign Up </Link>
                                </li>
                                <li className="nav-SupIn">
                                    {/* creating navigation link to the SignIn page */}
                                    <Link className="nav-link" to ="/signin" >Sign In </Link>
                                </li>
                            </div>
                        </ul>
                </div>
            </nav>
    )
}

//exporting react function
export default Header
