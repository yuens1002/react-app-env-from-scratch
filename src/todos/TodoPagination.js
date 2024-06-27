import React from 'react';
import { useState } from 'react';
import './TodoPagination.css';

export function TodoPagination({ pageInfo }) {
  const {
    totalPages,
    currentPage,
    setCurrentPage,
    selectedFilter,
    setSelectedFilter,
  } = pageInfo;

  function onFilterSelection(e) {}

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
