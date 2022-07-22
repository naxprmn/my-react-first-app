import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            remainingChar: 50
        }
        this.onTitleChange = this.onTitleChange.bind(this.onTitleChange);
        this.onBodyChange = this.onBodyChange.bind(this.onBodyChange);
        this.onAddEvent = this.onAddEvent.bind(this.onAddEvent);
    }
    onTitleChange = (event) => {
        this.setState(() => {
            return {
                title: event.target.value,
                remainingChar: 50 - event.target.value.length
            }
        });
    }
    onBodyChange = (event) => {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    onAddEvent = (event) => {
        event.preventDefault();
        this.props.addEvent(this.state.title, this.state.body);
    }
    render() {
        return (
            <form className="note-input" onSubmit={this.onAddEvent}>
                <h3 className="note-input__title">Buat Catatan</h3>
                <p className="note-input__title__char-limit">sisa karakter : {this.state.remainingChar}</p>
                <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChange} maxLength="50" required/>
                <input className="note-input__body" type="text" placeholder="Deskripsi" value={this.state.body} onChange={this.onBodyChange} required/>
                <button onSubmit={this.onAddEvent}>Tambah</button>
            </form>
        )
    }
}

export default NoteInput;