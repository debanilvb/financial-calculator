import React, { useEffect, useState } from "react";
import "./WealthSip.css";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";
import {format} from "indian-number-format"


const WealthSip = () => {
  const [value1, setValue1] = useState(5000);
  const [value2, setValue2] = useState(12);
  const [value3, setValue3] = useState(1);

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
    setValue3(newValue);
  };
  return (
    <div className="debanil-lawri">
      <h1 className="hedarf">SIP  Calculator</h1>
      <div className="wealthsip">
        
        <div className="wealthsipinput">
          <div className="wealthsipheading">
            Systematic Investment Plan (SIP) allows you to make small investment at regular
            intervals to help you achieve your dreams.
          </div>

          <div className="wealthsipslider">
            <div className="wealthsipinfo-title-text">
              <h1>Monthly Investment</h1>
              <div className="wealthsipinfo-title-text-sub"> 
              <span>&#8377;</span>
              <input type="number" placeholder="0" onChange={(e) => setValue1(e.target.value)} value={value1} />
               </div>
            </div>

            <Box >
              <Slider
                aria-label="Volume"
                value={value1}
                onChange={handleChange1}
               
                max={50000}
                defaultValue={25000}
              />
            </Box>
          </div>
          <div className="wealthsipslider">
            <div className="wealthsipinfo-title-text">
              <h1>Expected return rate</h1>
              <div className="wealthsipinfo-title-text-sub">
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
          <div className="wealthsipslider">
            <div className="wealthsipinfo-title-text">
              <h1>Time period </h1>
              <div className="wealthsipinfo-title-text-sub">
              <input placeholder="0" type="number" onChange={(e) => setValue3(e.target.value)} value={value3} />
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
        <div className="wealthsipinfos">
        <div className="wealthsipinfomain">
       
       <h1>Estimated Returns :</h1>
       <h2> &#8377;  {format(totalamount - value3 * 12 * value1)}</h2>
       <button >Get A Call Back</button>
    
 </div>
          <div className="wealthsipinfo">
            <div className="wealthsipinfo-title">
              <h1>Invested Amount :</h1>
              <h2> &#8377;  {format(value3 * 12 * value1)}</h2>
            </div>
            
            <div className="wealthsipinfo-title">
              <h1>Total Value :</h1>
              <h2> &#8377;  {format(totalamount)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WealthSip;
