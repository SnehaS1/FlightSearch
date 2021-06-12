import React from "react";
import FlightForm from "../FlightForm";

const AddFlights = () => {
  const handleOnSubmit = (book) => {
    console.log(book);
  };

  return (
    <React.Fragment>
      <FlightForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddFlights;
