import React from "react";
import './SearchForm.css';
import SearchForm from "./SearchForm";
import {
  slidingimage1,
  slidingimage2,
  slidingimage3,
  slidingimage4,
  slidingimage5,
  slidingimage6,
  slidingimage7,
  slidingimage8,
  blureffect,
} from "../assets/imports";





function SearchPage() {
  return (
    <div className="searchPage">
      <img src={blureffect} alt="Blur Effect" className="blurEffect" />
      <div className="contentWrapper">
        <div className="imageContainer">
          <div className="column">
            <img src={slidingimage1} alt="1" />
            <img src={slidingimage2} alt="2" />
            <img src={slidingimage3} alt="3" />
            <img src={slidingimage4} alt="4" />
          </div>
          <div className="column">
            <img src={slidingimage5} alt="5" />
            <img src={slidingimage6} alt="6" />
            <img src={slidingimage7} alt="7" />
            <img src={slidingimage8} alt="8" />
          </div>
        </div>
        <div className="textContainer">
          <div className="divider">
          <h1 className="title">Book an appointment with <span className="highlight">lifestyle medicine</span> experts</h1>
          <p className="subtitle">Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
          <SearchForm className="searchForm" />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
