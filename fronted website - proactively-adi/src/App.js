import React from "react";
import './App.css';
import Header from './components/Header';
import SearchPage from "./components/SearchPage";
import HealthCard from "./components/HealthCards";

function AppointmentBooking() {
  return (<>
    <Header />
    <main className="mainContainer">

      <section className="contentSection">
      </section>
      
      <SearchPage/>
      <div className="dividertest"></div>
      <HealthCard/>
    </main>
  </>
  );
}

export default AppointmentBooking;