import './TodoPagination.css';

type TodoPaginationProps = {
  pageInfo: {
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  };
};

export default function TodoPagination({
  pageInfo,
}: TodoPaginationProps) {
  const { totalPages, currentPage, setCurrentPage } = pageInfo;

  return (
    <div className="pagination-container">
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
