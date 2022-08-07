import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded ? (
          <input
            name="title"
            placeholder="Title"
            value={input.title}
            onChange={handleChange}
          />
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? '3' : '1'}
          value={input.content}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab
            type="submit"
            onClick={() => {
              props.onAdd(input);
              setInput({ title: '', content: '' });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
