import React, { useEffect, useState } from "react";
import "./SipTopUp.css";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";
import { format } from "indian-number-format";


const SipTopUp = () => {
    const [value1, setValue1] = useState(1000);
    const [value2, setValue2] = useState(12);
    const [value3, setValue3] = useState(1);
    const [value4, setValue4] = useState(1);
   
    let n=value3*12;
    let i=value2/1200;
    let totalamount=value1*(Math.pow((1+i),n)-1)*(1+i)/i;
    totalamount=Math.round(totalamount);
  
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
    const handleChange4 = (event, newValue) => {
       console.log(newValue);
      setValue4(newValue);
    };  
    return (
      <>
        {/* <div>hello</div> */}
        <h1 className="hedarf"> SIP Top Calculator</h1>
        <div className="siptopup">
         
          <div className="siptopupinput">
            <div className="siptopupheading">
              Systematic Investment Plan (SIP) allows you to make small investment at regular
              intervals to help you achieve your dreams.
            </div>
  
            <div className="siptopupslider">
              <div className="siptopupinfo-title-text">
                <h1>Your Financial Goal</h1>
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
                 
                  max={500000}
                  defaultValue={25000}
                />
              </Box>
            </div>
            <div className="siptopupslider">
              <div className="siptopupinfo-title-text">
                <h1>Expected return rate</h1>
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
            <div className="siptopupslider">
              <div className="siptopupinfo-title-text">
                <h1>Sip Top Up </h1>
                <div className="siptopupinfo-title-text-sub">
                <input type="number" placeholder="0" onChange={(e) => setValue4(e.target.value)} value={value4} />
                <span>&nbsp;Y</span>
                </div>
              </div>
  
              <Box >
                <Slider
                  aria-label="Volume"
                  value={value4}
                  onChange={handleChange4}
                 
                  max={1000}
                  defaultValue={20}
                  min={10}
                  step={5}
                />
              </Box>
            </div>
          
          </div>
          <div className="siptopupinfos">
          <div className="siptopupinfomain">
         
         <h1>Monthly Sip Amount ( For the First Year) :</h1>
         <h2> &#8377; &nbsp; {format(totalamount - value3 * 12 * value1)}</h2>
         <button >Get A Call Back</button>
      
   </div>
            <div className="siptopupinfo">
              <div className="siptopupinfo-title">
                <h1>Total Invested Amount (Sum of all your monthly installments with annual Top-Up) :</h1>
                <h2> &#8377;  {format(value3*12*value1)}</h2>
              </div>
              
              <div className="siptopupinfo-title">
                <h1>Years To Achieve Your Goal without Sip Top-Up :</h1>
                <h2> &#8377;  {format(totalamount)}</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SipTopUp