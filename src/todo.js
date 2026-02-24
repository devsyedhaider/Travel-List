import { useState } from "react";

export default function Todo() {
  return (
    <>
      <Form />
    </>
  );
}

function Form() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newItem = {
      id: Date.now(),
      task,
      description,
    };

    setItems([...items, newItem]);

    setTask("");
    setDescription("");
  }

  function handledel(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task.."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="text"
          placeholder="Add Some Description about tasks"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <>
            <li key={item.id}>{item.task}</li>
            <li>{item.description}</li>
            <button onClick={() => handledel(item.id)}>X</button>
          </>
        ))}
      </ul>
    </>
  );
}
