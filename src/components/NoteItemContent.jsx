import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItemContent({ title, createdAt, body }) {
  const formattedDate = showFormattedDate(createdAt);

  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{formattedDate}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;
