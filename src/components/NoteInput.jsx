import React from 'react';
 
class NoteInput extends React.Component {
  constructor(props) {
    super(props);
  
    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    }
  
    this.handleLimitTitle = this.handleLimitTitle.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  // onTitleChangeEventHandler(event) {
  //   this.setState(() => {
  //     return {
  //       title: event.target.value,
  //     }
  //   });
  // }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.addNote(this.state);
  }

  handleLimitTitle(event) {
    const inputTitle = event.target.value;
    let title = '';

    if (inputTitle.length > 50) {
      title = inputTitle.substring(0, 50);
    } else {
      title = inputTitle;
    }

    this.setState(() => {
      return {
        title: title,
      };
    });
  }


render() {
  return (
    <div className='note-input'>
    <h2>Buat catatan</h2>
    <form onSubmit={this.onSubmitEventHandler}>
    <p className="note-input__title__char-limit">Sisa Karacter {this.state.title.length}/50</p>
        <input type="text" className='note-input__title' placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.handleLimitTitle} />
        <textarea type="text" className='note-input__body' placeholder="Tulisakan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Buat</button>
    </form>
    </div>
  )
}
}
 
export default NoteInput;