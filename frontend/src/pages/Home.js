//importing react components and styles
import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import './Styles/Home.scss'

//creating Home page as a functional component 
const Home = () => {
    return (
        <>
        <div className='main-body'>
        <Header className="Header"/>
            <div >
                <h2 className='title'>Revive</h2>   
            </div>
        <Footer className="landing-page"/>
        </div>
        </>
    )
}

export default Home
