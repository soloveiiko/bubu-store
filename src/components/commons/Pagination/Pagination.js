import React from 'react';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import { NextArrow, PrevArrow } from '../Arrows';

const Pagination = ({ totalItemsCount, pageSize, currentPage, paginate, prevPage, nextPage, siblingCount = 1 }) => {
  const paginationRange = usePagination({
    totalItemsCount,
    pageSize,
    currentPage,
    siblingCount,
  });
  const handlePrevClick = (e) => {
    prevPage(e);
  };
  const handleNextClick = (e) => {
    nextPage(e);
  };
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="pagination">
      {currentPage > 1 && <PrevArrow onClick={handlePrevClick} />}
      <ul className="pagination-list">
        {paginationRange.map((p) => {
          if (p === DOTS) {
            return (
              <li key={p} className="dots">
                &#8230;
              </li>
            );
          }
          return (
            <li
              key={p}
              id={p}
              onClick={() => paginate(p)}
              className={`pagination-item ${currentPage === p ? 'selected_page' : ''}`}
            >
              {p}
            </li>
          );
        })}
      </ul>
      {currentPage < lastPage && <NextArrow onClick={handleNextClick} />}
    </div>
  );
};
export default Pagination;
