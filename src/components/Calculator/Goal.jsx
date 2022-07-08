import React, { useEffect, useState } from "react";
import "./Goal.css";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";
import {format} from "indian-number-format";

const Goal = () => {
  //the input values
  const [currentValue, setCurrentValue] = useState(100000);
  const [inflation, setInflation] = useState(1);
  const [yearsRequired, setYearsRequired] = useState(1);
  const [returnRate, setReturnRate] = useState(1);
  
  //the output values
  const [futureCost, setFutureCost] = useState(0);
  const [monthlyInvestment, setMonthlyInvestments] = useState(0);

  const handleChange1 = (event, newValue) => {
    setCurrentValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setInflation(newValue);
  };
  const handleChange3 = (event, newValue) => {
    setYearsRequired(newValue);
  };
  const handleChange4 = (event, newValue) => {
    setReturnRate(newValue);
  };

  useEffect(()=>{
    //the calculation to be performed here
    let f_cost, m_invest;
    f_cost = currentValue*Math.pow(1+inflation/100, yearsRequired)
    let r = returnRate;
    r = r/1200;
    m_invest = f_cost/(((Math.pow(1+r, yearsRequired*12)-1)/r)*(r+1));
    setFutureCost(parseInt(f_cost));
    setMonthlyInvestments(parseInt(m_invest))
  },
  [currentValue, inflation, yearsRequired, returnRate])

  return (
    <div className="debanil-lawri">
     <h1 className="hedarf">Goal Calculator</h1>
      <div className="goal">
        <div className="goalinput">
          <div className="goalheading">
            Systematic Investment Plan (SIP) allows you to make small investment at regular
            intervals to help you achieve your dreams.
          </div>

          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>Amount required to fulfill your goal (Todays Value)</h1>
              <div className="goalinfo-title-text-sub">
                <span> &#8377;</span>
                <input type="number" placeholder="0" onChange={(e) => setCurrentValue(e.target.value)} value={currentValue}/>
               </div>
            </div>

            <Box >
              <Slider
                aria-label="Volume"
                value={currentValue}
                onChange={handleChange1}
                
                max={2000000}
              />
            </Box>
          </div>
          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>Expected inflation rate</h1>
              <div className="goalinfo-title-text-sub">
                <input type="number" placeholder="0" onChange={(e) => setInflation(e.target.value)} value={inflation} />
                <span>%</span>
              </div>
            </div>

            <Box >
              <Slider
                aria-label="Volume"
                value={inflation}
                onChange={handleChange2}
                valueLabelDisplay="off"
                max={50}
              />
            </Box>
          </div>
          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>In how many years will you require the money ?</h1>
              <div className="goalinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setYearsRequired(e.target.value)} value={yearsRequired} />
              <span> Y</span>
              </div>
            </div>

            <Box >
              <Slider
                aria-label="Volume"
                value={yearsRequired}
                valueLabelDisplay="off"
                onChange={handleChange3}
                max={100}
              />
            </Box>
          </div>
          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>Expected rate of return</h1>
              <div className="goalinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setReturnRate(e.target.value)} value={returnRate} />
              <span>%</span>
              </div>
            </div>

            <Box>
              <Slider
                aria-label="Volume"
                value={returnRate}
                valueLabelDisplay="off"
                onChange={handleChange4}
                max={100}
              />
            </Box>
          </div>
        </div>
        <div className="goalinfos">
          <div className="goalinfo">
            <div className="goalinfo-title">
              <h1>Future Cost of the goal</h1>
              <h2>&#8377; {format(futureCost)}</h2>
            </div>
            <div className="goalinfo-title">
              <h1>Monthly Investments Required</h1>
              <h2>&#8377; {format(monthlyInvestment)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
