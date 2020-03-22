import React from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Note from "./Note";

const NoteList = () => {
    const notes = [
        {id: 1, title: 'First', date: new Date().toLocaleDateString()},
        {id: 2, title: 'Second', date: new Date().toLocaleDateString()},
        {id: 3, title: 'Third', date: new Date().toLocaleDateString()},
    ];
    return (
        notes.map(note =>
            <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={800}
            >
                <li className="list-group-item note">
                    <Note
                        id={note.id}
                        title={note.title}
                        date={note.date}
                    />
                </li>
            </CSSTransition>
        )
    )
};

export default NoteList;
