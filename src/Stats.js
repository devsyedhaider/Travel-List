export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numItemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Everything is ready to go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed
        ${numItemPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
