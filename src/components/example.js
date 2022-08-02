import React, { useEffect, useState } from "react";
import { getInitialData, showFormattedDate } from "../utils/data.js"
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

function NoteAppFunction() {
    const [state, newState] = useState({
        data: [
            {
                data: getInitialData().map((obj) => {
                    const date = showFormattedDate(obj.createdAt)
                    return { ...obj, createdAt: date }
                }),
                searchData: [],
                globalKeyword: 0
            }
        ],
        searchData: [],
        globalKeyword:0
    })

    console.log(state)
    useEffect()

    const addEvent = (title, body) => {
        const data = {
            data: [
                ...state.data,
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
        }
        newState(state=>(data))
        console.log(state)
    }
    const deleteEvent = (id) => {
        const deleted = state.data.filter((item) =>item.id !== id)
        const deletedSearch = state.searchData.filter((item) =>item.id !== id)
        newState({ data: deleted, searchData: deletedSearch});
    }
    const archiveEvent = (id) => {
        const newdata = state.data.map((obj) => {
            if (obj.id === id) {
                obj.archived = !obj.archived;
            }
            return obj;
        })
        newState({ newdata });
    }
    const searchEvent = (keyword) => {
        const temp = [...state.data];
        const search = temp.filter((item) => {
            if (item.title.toLowerCase().includes(keyword.toLowerCase())) {
                return item;
            } return null;
        })
        newState({searchData:search, globalKeyword: keyword.length})
    }
    const displaydata = ()=>{
        if (state.searchData.length===0&&state.globalKeyword===0) {
            return state.data;
        } return state.searchData;
    }

    return (
   <div className="Note App">
                <Header searchEvent={searchEvent} />
                <NoteBody data={displaydata()} archiveEvent={archiveEvent} deleteEvent={deleteEvent} addEvent={addEvent} />
            </div>
    )
}

export default NoteAppFunction;