import React from 'react';
import { usePagination, DOTS } from '../../../hooks/usePagination';

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
      <ul className="pagination-container">
        {currentPage > 1 && <button onClick={handlePrevClick}>prev</button>}
        {paginationRange.map((p) => {
          if (p === DOTS) {
            return (
              <li key={p} className="dots">
                &#8230;
              </li>
            );
          }
          return (
            <li key={p} id={p} onClick={() => paginate(p)} className={currentPage === p ? 'selected_page' : ''}>
              {p}
            </li>
          );
        })}
        {currentPage < lastPage && <button onClick={handleNextClick}>next</button>}
      </ul>
    </div>
  );
};
export default Pagination;
