// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteList from './NoteList';
import { getInitialData, showFormattedDate } from '../utils/index';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';


class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: getInitialData(),
      notes: getInitialData(),
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }
 
  onAddNoteHandler({ title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(+new Date()),
            archived: false,
          }
        ]
      }
    });
  }

  onResetData() {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: this.state.initialData,
      };
    });
  }

  onSearchingHandler(keyword) {
    this.onResetData();

    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((notes) =>
          notes.title.toLowerCase().includes(keyword.toLowerCase())
        ),
      };
    });
  }

  render() {
    return (
      <>
      <div className="note-app__header">
        <h1>Notes</h1>
        <NoteSearch onSearchingHandler={this.onSearchingHandler}/>
      </div>
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <h2>Arsip</h2>
      </div>
      </>
    );
  }
}
 
export default NoteApp;