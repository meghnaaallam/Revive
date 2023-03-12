//importing react components and icon
import React from 'react';
import { MdSearch } from 'react-icons/md';

//creating a functional component to search a note
const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			{/* icon id fetched from react-icons */}
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				// handleSearchNote is used to search a note
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

// exporting search
export default Search;
