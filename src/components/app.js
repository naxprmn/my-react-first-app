import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index.js"
import Header from "./header";
import NoteBody from "./note-app_body.js";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getInitialData().map((obj) => {
                const date = showFormattedDate(obj.createdAt)
                return { ...obj, createdAt: date }
            }),
            searchData: [],
            globalKeyword: 0
        }
        this.deleteEvent = this.deleteEvent.bind(this.deleteEvent);
        this.archiveEvent = this.archiveEvent.bind(this.archiveEvent);
        this.addEvent = this.addEvent.bind(this.addEvent);
        this.searchEvent = this.searchEvent.bind(this.searchEvent);
        this.displaydata = this.displaydata.bind(this.displaydata);
    }
    addEvent = (title, body) => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    id: +new Date(),
                    title: title,
                    body: body,
                    createdAt: showFormattedDate(Date()),
                    archived: false

                }
            ],
            searchData: [],
            globalKeyword:0
        })
    }
    deleteEvent = (id) => {
        const deleted = this.state.data.filter((item) =>item.id !== id)
        const deletedSearch = this.state.searchData.filter((item) =>item.id !== id)
        this.setState({ data: deleted, searchData: deletedSearch});
    }
    archiveEvent = (id) => {
        const newdata = this.state.data.map((obj) => {
            if (obj.id === id) {
                obj.archived = !obj.archived;
            }
            return obj;
        })
        this.setState({ newdata });
    }
    searchEvent = (keyword) => {
        const temp = [...this.state.data];
        const search = temp.filter((item) => {
            if (item.title.toLowerCase().includes(keyword.toLowerCase())) {
                return item;
            } return null;
        })
        this.setState({searchData:search, globalKeyword: keyword.length})
    }
    displaydata = ()=>{
        if (this.state.searchData.length===0&&this.state.globalKeyword===0) {
            return this.state.data;
        } return this.state.searchData;
    }
    render() {
        return (
            <div className="Note App">
                <Header searchEvent={this.searchEvent} />
                <NoteBody data={this.displaydata()} archiveEvent={this.archiveEvent} deleteEvent={this.deleteEvent} addEvent={this.addEvent} />
            </div>
        )
    }


}

export default NoteApp;