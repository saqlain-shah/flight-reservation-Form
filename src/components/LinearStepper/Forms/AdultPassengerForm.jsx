import { green } from "@material-ui/core/colors";
import { fontFamily } from "@mui/system";
import React from "react";
import AdultPassengerAccordion from "../../UI_FormComponents/Accordions/AdultPassengerAccordion";

function AdultPassengerForm({ register, number_of_adults }) {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "lightgrey"
 }}>
      {Array.from({ length: number_of_adults }).map((_, index) => (
        <AdultPassengerAccordion
          key={index}
          title={`Adult ${index + 1}`}
          subtitle={`Enter the details of the passenger.`}
          index={index}
          register={register}
        />
      ))}</div>
    </React.Fragment>
  );
}

export default AdultPassengerForm;
