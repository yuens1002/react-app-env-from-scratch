import './TodoPagination.css';

type TodoPaginationProps = {
  pageInfo: {
    totalTodos: number;
    currentPage: number;
    pageLimit: number;
    setPageLimit: React.Dispatch<React.SetStateAction<number>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  };
};

export default function TodoPagination({
  pageInfo,
}: TodoPaginationProps) {
  const {
    totalTodos,
    currentPage,
    setCurrentPage,
    pageLimit,
    setPageLimit,
  } = pageInfo;

  const totalPages = Math.ceil(totalTodos / pageLimit);

  function onSelectedPageLimit(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const selectedPageLimit = Number(e.target.value);
    setPageLimit(selectedPageLimit);
  }

  return (
    <div className="pagination-container">
      <div className="pagination-item">
        <label htmlFor="todos per page">Todos per page: </label>
        <select
          name="todos per page"
          id="todos per page"
          value={pageLimit}
          onChange={onSelectedPageLimit}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="pagination-item">
        <button
          disabled={currentPage === 1}
          className="pagination-button"
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
      </div>
      <div className="pagination-item">
        page {currentPage} of {totalPages}
      </div>
      <div className="pagination-item">
        <button
          disabled={currentPage === totalPages}
          className="pagination-button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
