//import required files 
import Note from './Note';
import AddNote from './AddNote';

//creating NotesList functional component
// this component is used to read, add and delete the note in the list
const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	// handleaddnote is to add new note and handledeletenotes is for delete note
}) => {
	return (
		<div className='notes-list'>
			{/* mapping to a particular note */}
			{notes.map((note) => (
				<Note
					id={note.id}
                    // title={note.text}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList