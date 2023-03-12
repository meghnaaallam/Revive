//importing files
import React from 'react'
import './Footer.scss'

//creating react footer functional component
const Footer = () => {
    return (
            <div className="footer">
                © 2022 Copyright: 
                    <a className="text-reset fw-bold" 
                        target="_blank" rel="noreferrer" >
                REVIVE
                    </a>    
            </div>
    )
}

//exporting react function 
export default Footer
