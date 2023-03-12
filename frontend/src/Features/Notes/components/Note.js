//importing react icon to delete
import { MdDeleteForever } from 'react-icons/md';

//creating Note as a functional component  which can handle the delete feature
const Note = ({ id, text, date, handleDeleteNote }) => {
	//id,text and date is fetched to delete a particular note
	return (
		<div className='note'>
			{/* to view the note */}
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				{/* using handleDeleteNote to delete a note */}
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

//exporting note component
export default Note