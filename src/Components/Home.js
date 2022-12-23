import React,{useState} from "react";
import Pagination from "./Pagination";
import WeatherMap from "./WeatherMap";
import cities from "../api/cities";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home(){
    
    const [currentPage, setCurrentPage] = useState(1); // Current Page
    const citiesPerPage = 10; // Number of items or cities per page

    // Change the current Page
    function paginate(pageNumber){
        setCurrentPage(pageNumber);
    }

    return (
        <div>
            {/* Renders the Navbar Component */}
            <Navbar />
            <div style={{padding: "30px"}}>
                {/* Renders the Pagination */}
                <Pagination citiesPerPage={citiesPerPage} totalCities={cities.length} paginate={paginate} />
                {/* Renders the Weather Map */}
                <WeatherMap cities={cities} currentPage={currentPage} citiesPerPage={citiesPerPage} />
            </div>
            {/* Renders the Footer */}
            <Footer />
        </div>
    )
}

export default Home;