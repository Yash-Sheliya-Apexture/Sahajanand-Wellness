import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ ordersPerPage, totalOrders, paginate, currentPage, noDataFound }) => {
  const pageNumbers = !noDataFound ? Array.from({ length: Math.ceil(totalOrders / ordersPerPage) }, (_, i) => i + 1) : [];

  const visiblePageNumbers = () => {
    const maxInitialPages = 5;

    if (pageNumbers.length <= maxInitialPages + 1) {
      return pageNumbers; // If total pages are few, display all
    }

    let pages = [];

    if (currentPage <= 3) {  // Modified condition
      // Display the first 5 pages, "...", and last page
      for (let i = 1; i <= Math.min(5, pageNumbers.length); i++) {
        pages.push(i);
      }
      if (pageNumbers.length > 5) {
        pages.push("...");
        pages.push(pageNumbers.length);
      }
    } else if (currentPage > pageNumbers.length - 2) { // Modified condition
      // Display the last 5 pages
      pages.push(1);
      pages.push("...");
      for (let i = pageNumbers.length - 4; i <= pageNumbers.length; i++) {
        pages.push(i);
      }
    } else {
      // Display 1, "...", current page +/- 1, "...", last page
      pages.push(1);
      pages.push("...");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("...");
      pages.push(pageNumbers.length);
    }

    return [...new Set(pages)].sort((a,b) => (typeof a === 'number' && typeof b === 'number') ? a - b : 0); //Remove duplicates and sort numerically
  };

  const handlePageClick = (page) => {
    //Remove the scrollToTopAndPaginate wrapper function to prevent scrolling to top of the page
    paginate(page);
  };


  // Conditionally render the entire pagination component, include only one page cases
  return (
    !noDataFound && pageNumbers.length > 1 && (
      <nav className="mt-4">
        <ul className="flex justify-center space-x-2 items-center">
          {currentPage !== 1 && (
            <li>
              <button
                onClick={() => handlePageClick(Math.max(1, currentPage - 1))}
                className={`py-2 px-4 rounded-md bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors duration-200 flex items-center gap-2`}
              >
                <FaChevronLeft size={12}/>
                Previous
              </button>
            </li>
          )}

          {visiblePageNumbers().map((page, index) => (
            <li key={index}>
              {page === "..." ? (
                <span className="py-2 px-4 text-gray-500">...</span>
              ) : (
                <button
                  onClick={() => handlePageClick(page)}
                  className={`py-2 px-4 rounded-md ${currentPage === page ? "bg-main-color text-white" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"} transition-colors duration-200`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          {currentPage !== pageNumbers.length && (
            <li>
              <button
                onClick={() => handlePageClick(Math.min(pageNumbers.length, currentPage + 1))}
                className={`py-2 px-4 rounded-md bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors duration-200 flex items-center gap-2`}
              >
                Next
                <FaChevronRight size={12}/>
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  );
};

export default Pagination;