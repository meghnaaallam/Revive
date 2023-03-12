//importing required react modules and styles
import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import logo from '../../features/Notes/assets/petlogo.png';
import '../Quotes/Quotes.scss'

//exporting Quotable function to view the quotes
export default function Quotable() {
  // setting the state of data as null
  const [data, setData] = React.useState(null);
  const [show, setShow] = useState(false);

  //defining async function to update quotes on click
  async function updateQuote() {
    try {
      // using Api to fetch the quotes randomly
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      //if the quote is fetched properly , display message with staus code
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  // Run 'updateQuote' once when component mounts
  React.useEffect(() => {
    updateQuote();
  }, []);

   // Doesn't render until the first quote is loaded
  if (!data) return null;

  return (
    <div className="quote-body">
    <div className="botBody"> 
      <div className="showQuote" onClick={()=>{
            setShow(!show)}}><img className="petLogo" src={logo} alt="pet-emoji"/></div>
            <p className="Quote">Click Me!</p>
        {/* using card layout from bootstrap*/}
            {
            show?<Card className="card">
        <Card.Body className="card-style">
          <blockquote className="blockquote mb-0">
            <p>{data.content}</p>
            {data.author && (
              <footer className="blockquote-footer">
                <cite title="Source Title">{data.author}</cite>
              </footer>
              // displays the quote along with the author name
            )}
          </blockquote>
        </Card.Body>
        <Card.Footer className="card-footer">
          <button variant="primary" onClick={updateQuote}>
            👉🏽
          </button>
        </Card.Footer>
    </Card>:null }
    </div>
  </div>
  );
}