type SortTodoDropdownProps = {
  sorter: {
    sortOrder: string;
    setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  };
};

export default function SortTodoDropdown({
  sorter,
}: SortTodoDropdownProps) {
  const { sortOrder, setSortOrder } = sorter;
  return (
    <div>
      <label htmlFor="sort">Sort: </label>
      <select
        name="sort todo list"
        id="sort todo list"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
    </div>
  );
}
