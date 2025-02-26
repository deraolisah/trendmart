// import React from 'react';
// import "./Pagination.scss";

// import { GrFormNext } from "react-icons/gr";
// import { GrFormPrevious } from "react-icons/gr";

// const Pagination = () => {
//   return (
//     <div className='pagination'>
//       <span className='page-title'> Page 1 of 30 </span>
//       <div>
//         <span className='page-no prev-btn'>
//           <GrFormPrevious />
//         </span>
//         <span className='page-no active'>
//           1
//         </span>
//         <span className='page-no'>
//           2
//         </span>
//         <span className='page-no hide'>
//           3
//         </span>
//         <span className='page-no'>
//           <b>...</b>
//         </span>
//         <span className='page-no hide'>
//           28
//         </span>
//         <span className='page-no hide'>
//           29
//         </span>
//         <span className='page-no'>
//           30
//         </span>
//         <span className='page-no next-btn'>
//           <GrFormNext />
//         </span>
//       </div>
//     </div>
//   )
// }

// export default Pagination;



import React, { useState, useEffect } from 'react';
import './Pagination.scss';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  }, [totalPages]);

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;