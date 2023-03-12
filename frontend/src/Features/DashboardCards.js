//adding react components and styles
import React from "react";
import '../features/Dashboard.scss';
import { Link } from 'react-router-dom';

//creating functional component for Dashboard cards
const DashboardCards = (props) => {
    //uses props to collect attributes
    return(
        <div className="cards-body">
            <div className="cards">
                {/* renders the elements through the props */}
                <img className="cards_image" src={props.image} />
                <h2 className="cards_title">{props.title}</h2>
                <p className="cards_description">{props.desc}</p>
                {/* linking it to different features/components */}
                <Link className="cards_btn" to={props.to}> {props.id} </Link> 
                {/* to => is the path where we will render the file */}
            </div>
        </div>
    );
}

//exporting the function DashboardCards
export default DashboardCards;