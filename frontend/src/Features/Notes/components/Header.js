//importing react component
import React from 'react';

//creating Header function to handle the toogle mode
const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Daily Check-In</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
					// will check previous mode of the Ui
                }
				className='save'>
				Toggle Mode
			</button>
		</div>
	);
};

//exporting the Header component
export default Header;
