import React from "react";
import NoteList from "../component/NoteList";
import Form from "../component/Form";

const Main = () =>  <div className="jumbotron">
    <div className="container">
        <h1 className="display-4">Note list</h1>
    </div>
    <Form/>
    <NoteList/>
</div>

export default Main;
