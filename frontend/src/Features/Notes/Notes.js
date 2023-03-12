//importing required react components
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import '../Notes/Notes.scss';

//creating function component for Notes 
const Notes = () => {
	//setting the state for notes with predefined notes
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		
	]);

	//state to search the note
	const [searchText, setSearchText] = useState('');

	// state to toogle the mode of notes
	const [darkMode, setDarkMode] = useState(false);
 	//const [lightMode, setLightMode] = useState(false);

	//saved notes can be viewd from local storage
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	//effects will be parsed into json and will be stored in local storage
	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	//function to create a new note
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	//function to delete a note
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className='Notes-body'>
		<div className={`${darkMode && 'dark-mode'}`}>
			{/* checks the toogle mode */}
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				{/* displaying list of notes */}
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	</div>
	);
};

export default Notes;