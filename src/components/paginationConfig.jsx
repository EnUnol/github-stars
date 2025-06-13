import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const renderPagination = ({ page, totalPages, loading, handlePageClick }) => {
  const pages = []

  // Left chevron
  pages.push(
    <button
      key="chevron-left"
      disabled={loading || page === 1}
      onClick={() => handlePageClick(page - 1)}
      className="pagination-btn"
    >
      <FaChevronLeft />
    </button>
  )

  // Page 1 always
  pages.push(
    <button
      key={1}
      disabled={loading}
      onClick={() => handlePageClick(1)}
      className={`pagination-btn ${page === 1 ? 'active' : ''}`}
    >
      1
    </button>
  )

  // Ellipsis if gap after page 1
  if (page > 3) {
    pages.push(<span key="start-ellipsis">...</span>)
  }

  // Mid-range around current page
  for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
    pages.push(
      <button
        key={i}
        disabled={loading}
        onClick={() => handlePageClick(i)}
         className={`pagination-btn ${page === i ? 'active' : ''}`}
      >
        {i}
      </button>
    )
  }

  // Ellipsis before last page
  if (page < totalPages - 2) {
    pages.push(<span key="end-ellipsis">...</span>)
  }

  // Last page always
  if (totalPages > 1) {
    pages.push(
      <button
        key={totalPages}
        disabled={loading}
        onClick={() => handlePageClick(totalPages)} 
        className={`pagination-btn ${page === totalPages ? 'active' : ''}`}
      >
        {totalPages}
      </button>
    )
  }

  // Right chevron
  pages.push(
    <button
      key="chevron-right"
      disabled={loading || page === totalPages}
      onClick={() => handlePageClick(page + 1)}
      className="pagination-btn"
    >
      <FaChevronRight />
    </button>
  )

  return <>{pages}</>
}
