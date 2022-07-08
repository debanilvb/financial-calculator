import { styled } from "@mui/material";
import React, { useState } from "react";
import "./calculator.css";
// import "../Mutual_Funds/mf.css";
import ChildMarriage from "./ChildMarriage";
import ChildEducation from "./ChildEducation.jsx";
import Retirement from "./Retirement";
import WealthSip from "./WealthSip.jsx";
import SipTopUp from "./SipTopUp.jsx";
import Goal from "./Goal";
import EMI from "./EMI.jsx";
import EmergencyFund from "./EmergencyFund";
import { Link } from "react-router-dom";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    marginTop: "15px"
  },
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
  background: "#F6F6F6",
  borderRadius: "8px",
  marginleft: "20px",
  marginright: "20px"
}));

// const Cards = styled("div")(({ theme }) => ({
//   [theme.breakpoints.down("md")]: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "center",
//     margin: "20px"
//   },
//   width: "100vw",
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-around",
//   alignItems: "center",
//   margin: "50px"
// }));

// const Card = styled("div")(() => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   alignItems: "center",
//   background: "#EDEDED",

//   borderRadius: "12px",
//   height: "300px",
//   width: "450px",
//   padding: "20px",
//   paddingBottom: "50px",
//   objectFit: "cover"
// }));

function Calculator() {
  const [calculator, setCalculator] = useState("Emergency Fund");

  const showcalculator = () => {
    if (calculator === "Emergency Fund") {
      return <EmergencyFund />;
    } else if (calculator === "Retirement") {
      return <Retirement />;
    } else if (calculator === "Goal") {
      return <Goal />;
    } else if (calculator === "ChildMarriage") {
      return <ChildMarriage />;
    } else if (calculator === "ChildEducation") {
      return <ChildEducation />;
    } else if (calculator === "WealthSip") {
      return <WealthSip />;
    } else if (calculator === "EMI") {
      return <EMI />;
    }
    else if (calculator === "SipTopUp") {
      return <SipTopUp />;
    }
  };
  return (
    <div className="calculator-parent">
      <div className="calculator-heading1">
        Plan your Investment
      </div>
      <div className="pill-nav">
        <Link to="/emergencyfund-calculator"
          className="active-pill"
          >
          <h3>Emergency Fund Calculator</h3>
        </Link>
        <Link
           to="/retirement-calculator"
        >
          <h3>Retirement Calculator</h3>
        </Link>
        <Link to="/goal-calculator">
          <h3>Goal <br /> Calculator</h3>
        </Link>
        <Link to="/childmarriage-calculator">
         <h3> Child Marriage Calculator</h3>
        </Link>
        <Link to="/childeducation-calculator">
          <h3>Child Education Calculator</h3>
        </Link>
        <Link to="/sip-calculator">
          <h3>SIP <br /> Calculator</h3>
        </Link>
        <Link to="/emi-calculator">
         <h3> EMI <br /> Calculator</h3>
        </Link>
        <Link to="/siptopup-calculator">
         <h3> SIP Top Up Calculator</h3>
        </Link>

        <Link to="/siptopup-calculator">
         <h3> FD <br /> Calculator</h3>
        </Link>

        <Link to="/siptopup-calculator">
         <h3> Simple Interest  <br /> Calculator</h3>
        </Link>

      </div>

     
    </div>
  );
}

export default Calculator;
