import React from "react";
import "./Pagination.css";

const Pagination = ({ sitesPerPage, totalSites, paginate, currentPage }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalSites / sitesPerPage); i++) {
    pageNums.push(i);
  }

  return (
    //<nav>
    <ul className="pagination">
      <a
        onClick={() => paginate((prev) => (prev === 1 ? prev : prev - 1))}
        href="!#"
        className="page-link"
      >
        Prev
      </a>
      {pageNums.map((number) => (
        <li key={number} className="page-link">
          <a
            onClick={() => paginate(number)}
            href="!#"
            className={number === currentPage ? "active-page" : " "}
          >
            {number}
          </a>
        </li>
      ))}

      <a
        onClick={() =>
          paginate((next) => (next === pageNums.length ? next : next + 1))
        }
        href="!#"
        className="page-link"
      >
        Next
      </a>
    </ul>
    //</nav>
  );
};

export default Pagination;
