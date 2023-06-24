// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteItem from './NoteItem';
 
// eslint-disable-next-line react/prop-types
function NoteList({ notes, onDelete, onArchive  }) {
return (
  <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
  </div>
);
}
 
export default NoteList;