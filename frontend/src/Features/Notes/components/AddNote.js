//importing useState of react component
import { useState } from 'react';

//creating addNote function which can handle notes 
const AddNote = ({ handleAddNote }) => {

	//creating noteText as a state and limiting the character length as 50
	const [noteText, setNoteText] = useState('');
	const characterLimit = 50;

    //creating function to handle change
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

    //creating function to handle save click
	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
            <p>How could I have made today better?</p>
			{/* creating text area to add notes */}
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to answer...'
				value={noteText}
				onChange={handleChange} />
			<div className='note-footer'>
				<small>
					{/* displaying the remaining character length */}
					{characterLimit - noteText.length} Remaining
				</small>
				{/* to save the notes */}
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;