import React from "react";
import './SearchForm.css';
import { buttonlogo } from "../assets/imports";

function SearchForm() {
  return (
    <form className="searchForm">
      <div className="inputGroup3">
        <input
          type="text"
          className="searchInput"
          placeholder="Condition, procedure, speciality..."
          aria-label="Search for condition, procedure, or speciality"
        />
      </div>
      <div className="inputGroup2">
        <input
          type="text"
          className="searchInput"
          placeholder="City, state, or zipcode"
          aria-label="Enter city, state, or zipcode"
        />
      </div>
      <div className="inputGroup1">
        <input
          type="text"
          className="searchInput"
          placeholder="Insurance carrier"
          aria-label="Enter insurance carrier"
        />
      </div>
      <button type="submit" className="submitButton">
<img src={buttonlogo} alt="Search" className="buttonlogo" />
        Find now
      </button>
    </form>
  );
}

export default SearchForm;
