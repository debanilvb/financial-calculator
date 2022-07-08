import React, { useEffect, useState } from "react";
import "./EMI.css";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";

const EMI = () => {
  const [value1, setValue1] = useState(1000000);
  const [value2, setValue2] = useState(6.5);
  const [value3, setValue3] = useState(5);
let n=value3*12;
let r=value2/1200;
let totalamount=value1*r*(Math.pow(1+r,n))/(Math.pow(1+r,n)-1);

totalamount=Math.round(totalamount);
console.log(r,n,totalamount);
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
  };
  return (
    <>
      {/* <div>hello</div> */}
      <h1 className="hedarf">EMI Calculator</h1>
      <div className="emi">
     
        <div className="emiinput">
          <div className="emiheading">
            Systematic Investment Plan (SIP) allows you to make small investment at regular
            intervals to help you achieve your dreams.
          </div>

          <div className="emislider">
            <div className="emiinfo-title-text">
              <h1>Loan Amount</h1>
              <div className="emiinfo-title-text-sub"> 
              <span>&#8377; </span>
              <input type="number" placeholder="0" onChange={(e) => setValue1(e.target.value)} value={value1} />
               </div>
            </div>

            <Box 
             // sx={{ width: 700 }}
             className="emi-slider"
            >
              <Slider
                aria-label="Volume"
                value={value1}
                onChange={handleChange1}
              
                max={10000000}
              />
            </Box>
          </div>
          <div className="emislider">
            <div className="emiinfo-title-text">
              <h1>Rate of Interest ( p.a. )</h1>
              <div className="emiinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setValue2(e.target.value)} value={value2} />
               <span> &nbsp;%</span>
               </div>
            </div>

            <Box  // sx={{ width: 700 }}
            className="emi-slider">
              <Slider
                aria-label="Volume"
                value={value2}
                onChange={handleChange2}
              
                max={30}
                step={0.1}
              />
            </Box>
          </div>
          <div className="emislider">
            <div className="emiinfo-title-text">
              <h1>Loan Tenure</h1>
              <div className="emiinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setValue3(e.target.value)} value={value3} />
               <span> &nbsp;Y</span>
              </div>
            </div>

            <Box 
            // sx={{ width: 700 }}
            className="emi-slider"
            >
              <Slider
                aria-label="Volume"
                value={value3}
                onChange={handleChange3}
              
                max={40}
                min={1}
              />
            </Box>
          </div>
        </div>
        <div className="emiinfos">
        <div className="emiinfomain">
       
              <h1>Equated Monthly Investments ( EMI ) :</h1>
              <h2> &#8377;&nbsp;{totalamount}</h2>
              <button >Start SIP</button>
           
        </div>
          <div className="emiinfo">
            
            <div className="emiinfo-title">
              <h1>Principal Amount :</h1>
              <h1>&#8377;&nbsp;{value1}</h1>
            </div>
            <div className="emiinfo-title">
              <h1>Total Interest :</h1>
              <h1> &#8377;&nbsp;{totalamount*n-value1}</h1>
            </div>
            <div className="emiinfo-title">
              <h1>Total Amount :</h1>
              <h1> &#8377;&nbsp;{totalamount*n} </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EMI;
