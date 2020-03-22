import React, {useState, useContext} from 'react';

const Form = () => {
    const [value, setValue] = useState("");

    const submitHandler = event => {
        event.preventDefault();

        if (value.trim()) {
          setValue('')
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
};

export default Form;
