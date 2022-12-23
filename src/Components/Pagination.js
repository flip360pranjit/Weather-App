import React from "react";
import "./css/Pagination.css";

function Pagination(props){

    // An array containing the page numbers to be displayed
    const pageNumbers = [];

    // Calculating the number of pages that would be required and storing them in the array
    for(let i=1 ; i <= Math.ceil(props.totalCities / props.citiesPerPage) ; i++){
        pageNumbers.push(i);
    }

    
    return(
        <div className="pagination-div">
            <h5 className="page-txt">Page: </h5>
            <nav>
                <ul className="pagination">

                    {pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <button className="page-link"
                             onClick={() => props.paginate(number)}>{number}</button>
                        </li>
                    ))}
                    
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;