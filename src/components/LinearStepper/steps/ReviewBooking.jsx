import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useFieldArray, useFormContext } from "react-hook-form";


const ReviewBooking = () => {

  const { control } = useFormContext();
  const adultFields = useFieldArray(
    {
      control,
      name: "adults",
    }
  ).fields;
  const childrenFields = useFieldArray(
    {
      control,
      name: "children",
    }
  ).fields;
  const infantFields = useFieldArray(
    {
      control,
      name: "infants",
    }
  ).fields;

  const {
    oneWayTrip,
    roundWay,
    origin,
    destination,
    journeyDate,
    returnDate,
    number_of_adults,
    number_of_children,
    number_of_infants,
    airline,
    cabin,
    basicFare,
    taxes,
    sc,
    discount,
    gender,
    firstName,
    surName,
    date_of_birth,
    email,
    phone,
    pnr,
    ticket,
    issueBy,
    ledger,
    adultFare,
    childFare,
    infantFare,
    grandTotal,
    code,
  } = control._formValues;

  const [totalAdultFare, setTotalAdultFare] = useState(
    number_of_adults * adultFare
  );
  const [totalChildrenFare, setTotalChildrenFare] = useState(
    number_of_children * childFare
  );
  const [totalInfantFare, setTotalInfantFare] = useState(
    number_of_infants * infantFare
  );
  const [totalAmount, setTotalAmount] = useState(
    totalAdultFare + totalInfantFare + totalChildrenFare
  );

  useEffect(() => {
    setTotalAdultFare(number_of_adults * adultFare);
    setTotalChildrenFare(number_of_children * childFare);
    setTotalInfantFare(number_of_infants * infantFare);
    setTotalAmount(totalAdultFare + totalInfantFare + totalChildrenFare);
  }, [adultFare, childFare, control, infantFare, number_of_adults, number_of_children, number_of_infants, totalAdultFare, totalChildrenFare, totalInfantFare]);

  return (
    <>
      <React.Fragment>
     
        <Box className="box.root">
            <Typography variant="h6" align="center" gutterBottom>
              1 Booking Information Details
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>  {origin}  ---- ✈︎ ---  {destination} </p>
              <p>Departure Date 📅:  {journeyDate} Return Date 📅: {returnDate}</p>
              <p></p>
              <p>Number Of Adults 🧍: {number_of_adults}  |   Number Of Children 🧒 :{number_of_children}  | Number Of Infants👶 : {number_of_infants}</p>

            </div>
    </Box>
       


        <div >
          <Typography variant="h6" align="center" gutterBottom>
            2 Flight Information Details
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>{airline}</p>
            <p>{code}</p>
            <p>{cabin}</p>
            <p>{totalAdultFare}</p>
            <p>{totalChildrenFare}</p>
            <p>{totalInfantFare}</p>
            <p>{sc}</p>
            <p>{taxes}</p>
            <p>{discount}</p>
          </div>

        </div>


        <div>
          <Typography variant="h6" align="center" gutterBottom>
            3 Passenger Details
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {adultFields.map((field, index) => (
              <div className="" key={index}>
                <p>{field.date_of_birth}</p>
                <p>{field.firstName}</p>
                <p>{field.email}</p>
                <p>{field.phoneNumber}</p>
                <p>{field.surName}</p>
              </div>
            ))}
            {childrenFields.map((field, index) => (
              <div className="" key={index}>
                <p>{field.date_of_birth}</p>
                <p>{field.firstName}</p>
                <p>{field.email}</p>
                <p>{field.phoneNumber}</p>
                <p>{field.surName}</p>
              </div>
            ))}
            {infantFields.map((field, index) => (
              <div className="" key={index}>
                <p>{field.date_of_birth}</p>
                <p>{field.firstName}</p>
                <p>{field.surName}</p>
              </div>
            ))}
          </div>

        </div>


        <div>
          <Typography variant="h6" align="center" gutterBottom>
            4 Fares Details
          </Typography>

          <p>Total Adult Fare: {isNaN(totalAdultFare) ? "" : totalAdultFare}</p>
          <p>
            Total Children Fare:{" "}
            {isNaN(totalChildrenFare) ? "" : totalChildrenFare}
          </p>
          <p>
            Total Infant Fare: {isNaN(totalInfantFare) ? "" : totalInfantFare}
          </p>
          <p>Grand Total:{isNaN(totalAmount) ? "" : totalAmount}</p>

        </div>
      </React.Fragment>
    </>
  );
};

export default ReviewBooking;
