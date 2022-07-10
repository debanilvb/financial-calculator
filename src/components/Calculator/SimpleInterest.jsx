import React, { useEffect, useState } from "react";
import "./simple.css";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";
import { format } from "indian-number-format";


const SimpleInterest = () => {
    const [value1, setValue1] = useState(100000);
    const [value2, setValue2] = useState(6);
    const [value3, setValue3] = useState(5);
  
    let p=value1; 
    let r=value2/100;
    let t=value3;
    let si=p*r*t;
    si=Math.round(si);
    let totalamount = p*(1+r*t);
    totalamount = Math.round(totalamount);
  



    const handleChange1 = (event, newValue) => {
      setValue1(newValue);
    };
    const handleChange2 = (event, newValue) => {
      setValue2(newValue);
    };
    const handleChange3 = (event, newValue) => {
        console.log(newValue);
      setValue3(newValue);
    };
   
    return (
      <div className="debanil-lawri">
        <h1 className="hedarf"> Simple Interest  Calculator</h1>
        <div className="siptopup">
         
          <div className="siptopupinput">
            <div className="siptopupheading">
              Systematic Investment Plan (SIP) allows you to make small investment at regular
              intervals to help you achieve your dreams.
            </div>
  
            <div className="siptopupslider">
              <div className="siptopupinfo-title-text">
                <h1>Principal Amount</h1>
                <div className="siptopupinfo-title-text-sub"> 
                <span>&#8377; </span>
                <input type="number" placeholder="0" onChange={(e) => setValue1(e.target.value)} value={value1} />
                </div>
              </div>
  
              <Box >
                <Slider
                  aria-label="Volume"
                  value={value1}
                  onChange={handleChange1}
                 
                  max={10000000}
                  defaultValue={25000}
                />
              </Box>
            </div>
            <div className="siptopupslider">
              <div className="siptopupinfo-title-text">
                <h1>Rate of interest (p.a)</h1>
                <div className="siptopupinfo-title-text-sub"> 
                <input type="number" placeholder="0" onChange={(e) => setValue2(e.target.value)} value={value2} />
                <span>&nbsp;%</span>
                 </div>
              </div>
  
              <Box >
                <Slider
                  aria-label="Volume"
                  value={value2}
                  onChange={handleChange2}
                 
                  max={30}
                  step={0.1}
                  defaultValue={12}
                />
              </Box>
            </div>
            <div className="siptopupslider">
              <div className="siptopupinfo-title-text">
                <h1>Time period </h1>
                <div className="siptopupinfo-title-text-sub">
                <input type="number" placeholder="0" onChange={(e) => setValue3(e.target.value)} value={value3} />
                <span>&nbsp;Y</span>
                </div>
              </div>
  
              <Box >
                <Slider
                  aria-label="Volume"
                  value={value3}
                  onChange={handleChange3}
                 
                  max={70}
                  defaultValue={10}
                />
              </Box>
            </div>
          
          </div>
          <div className="siptopupinfos">
          <div className="siptopupinfomain">
         
         <h1>Total  Amount :</h1>
         <h2> &#8377; &nbsp; {format(totalamount)}</h2>
    
      
   </div>
            <div className="siptopupinfo">
              <div className="siptopupinfo-title">
                <h1>Principal Amount  :</h1>
                <h2> &#8377;  {format(value1)}</h2>
              </div>
              
              <div className="siptopupinfo-title">
                <h1>Total Interest :</h1>
                <h2> &#8377;  {format(si)}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

// si = p t r /100;
// r

export default SimpleInterest;