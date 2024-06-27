import React from 'react';

export function TodoFilter({ filter }) {
  const { selectedFilter, setSelectedFilter } = filter;
  return (
    <div>
      <label htmlFor="filter todo list">Show: </label>
      <select
        name="filter todo list"
        id="filter todo list"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="incomplete">incomplete</option>
      </select>
    </div>
  );
}
