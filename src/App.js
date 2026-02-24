import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAdd(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToogle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClear() {
    const confirmed = window.confirm("Are you sure want to delete all items");

    if (confirmed) setItems([]);
  }

  return (
    <div className="apps">
      <Logo />
      <Form onAddItem={handleAdd} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToogle={handleToogle}
        onClearList={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
