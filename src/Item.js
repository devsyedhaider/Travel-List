export default function Item({ item, onDeleteItem, onToogle }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => {
            onToogle(item.id);
          }}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          <span style={{ marginRight: ".7rem" }}>{item.quantity}</span>
          {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
}
