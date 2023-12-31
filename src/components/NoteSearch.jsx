import React from 'react';
function NoteSearch(props) {
  const { onSearchingHandler } = props;
  return (
    <div>
      <form>
        <div className="note__search">
          <input
            className="input-area"
            type="text"
            placeholder="search"
            onChange={(e) => onSearchingHandler(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default NoteSearch;
