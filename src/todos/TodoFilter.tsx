import type { Completed } from '../lib/types';

type TodoFilterProps = {
  filter: {
    selectedFilter: Completed;
    setSelectedFilter: React.Dispatch<
      React.SetStateAction<Completed>
    >;
  };
};

export default function TodoFilter({ filter }: TodoFilterProps) {
  const { selectedFilter, setSelectedFilter } = filter;

  function onSelected(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as Completed;
    setSelectedFilter(value);
  }

  return (
    <div>
      <label htmlFor="filter todo list">Show: </label>
      <select
        name="filter todo list"
        id="filter todo list"
        value={selectedFilter}
        onChange={onSelected}
      >
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="incomplete">incomplete</option>
      </select>
    </div>
  );
}
