// eslint-disable-next-line no-unused-vars
import React from 'react';
 
// eslint-disable-next-line react/prop-types
function ArchiveButton({ id, onArchive }) {
  return (
   <button className='note-item__archive-button' onClick={() => onArchive(id)}>Arsipkan</button>
  )
}
 
export default ArchiveButton;