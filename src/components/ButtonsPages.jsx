import React from 'react';
export function ButtonsPages({
  pagesNumber,
  handlePreviousPage,
  currentPage,
  handleNextPage,
}) {
  return (
    <div id="buttons">
      {pagesNumber > 1 && (
        <>
          <div onClick={handlePreviousPage} id="previous-page">
            {currentPage !== 1 && (
              <div className="row-wrapper">
                <p>{currentPage - 1}</p>
                <i className="bi bi-arrow-left"></i>
              </div>
            )}
          </div>
          <h3>pages</h3>
          <div onClick={handleNextPage} id="next-page">
            {currentPage !== pagesNumber && (
              <div className="row-wrapper">
                <i className="bi bi-arrow-right"></i>
                <p>{currentPage + 1}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
