import React from "react";

const Note = ({title, date, id, onRemove}) => <React.Fragment>
    <div>
        <strong>{title}</strong>
        <small>{date}</small>
    </div>

    <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => onRemove(id)}
    >
        &times;
    </button>
</React.Fragment>;

export default Note;
