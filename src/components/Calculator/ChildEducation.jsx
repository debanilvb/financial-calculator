import React, {useState, useEffect}  from "react";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";
import {format} from "indian-number-format"

const ChildEducation = () => {
  //input variables
  const [currentCost, setCurrentCost ] = useState(10000)
  const [inflation, setInflation] = useState(1);
  const [currentAge, setCurrentAge] = useState(0);
  const [requiredAge, setRequiredAge] = useState(1);
  const [returnRate, setReturnRate] = useState(1);
  
  //output variables
  const [futureCost, setFutureCost] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);

  const handleChange1=(e, value) => {
    setCurrentCost(value)
  }
  const handleChange2=(e, value) => {
    setInflation(value)
  }
  const handleChange3  = (e, value) => {
    setCurrentAge(value)
    if(requiredAge < value){
      setRequiredAge(value)
    }
  }
  const handleChange4 = (e, value) => {
    setRequiredAge(value);
    if(value < currentAge){
      setCurrentAge(value)
    }
  }
  const handleChange5 = (event, value) => {
    setReturnRate(value);
  };

  useEffect(()=>{
    //the calculation occurs here
    let f_cost, m_invest;
    f_cost = currentCost*Math.pow(1+inflation/100, requiredAge-currentAge)
    let r = returnRate;
    r = r/1200;
    m_invest = f_cost/(((Math.pow(1+r, (requiredAge-currentAge)*12)-1)/r)*(r+1));
    setFutureCost(parseInt(f_cost));
    setMonthlyInvestment(parseInt(m_invest))
  },
  [currentAge, currentCost, inflation, requiredAge, returnRate])

  return (
    <>
      <h1 className="hedarf">Child Education Calculator</h1>
      <div className="marriage">
        <div className="marriageinput">
          <div className="marriageheading">
            Systematic Investment Plan (SIP) allows you to make small investment at regular
            intervals to help you achieve your dreams.
          </div>
          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>Current cost of the desired education</h1>
              <div className="goalinfo-title-text-sub">
               <span> &#8377;</span> 
               <input type="number" placeholder="0" onChange={(e) => setCurrentCost(e.target.value)} value={currentCost} />
               </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={currentCost}
                onChange={handleChange1}
                max={2000000}
              />
            </Box>
          </div>
          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>Inflation Rate</h1>
              <div className="goalinfo-title-text-sub">  
              <input type="number" placeholder="0" onChange={(e) => setInflation(e.target.value)} value={inflation} />
              
              <span>&nbsp;%</span>
              </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={inflation}
                onChange={handleChange2}
                max={50}
              />
            </Box>
          </div>
          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>Current Age of Child</h1>
              <div className="goalinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setCurrentAge(e.target.value)} value={currentAge} />
              <span>&nbsp;Y</span>
               </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={currentAge}
                onChange={handleChange3}
                max={100}
              />
            </Box>
          </div>
          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>Age of child when corpus is required</h1>
              <div className="goalinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setRequiredAge(e.target.value)} value={requiredAge} />
              <span>&nbsp;Y</span>
              </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={requiredAge}
                onChange={handleChange4}
                max={100}
              />
            </Box>
          </div>
          <div className="goalslider">
            <div className="goalinfo-title-text">
              <h1>Expected Investment Returns</h1>
              <div className="goalinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setReturnRate(e.target.value)} value={returnRate} />
               <span>&nbsp;%</span>
               </div>
            </div>
            <Box >
              <Slider
                aria-label="Volume"
                value={returnRate}
                onChange={handleChange5}
                max={50}
              />
            </Box>
          </div>

          </div>
        <div className="marriageinfos">
          <div className="marriageinfo">
            <div className="marriageinfo-title">
              <h1 >
                Future cost of your child education
              </h1>
              <h2>&#8377;  {format(futureCost)} </h2>
            </div>
            <div className="marriageinfo-title">
              <h1 >
                Monthly Investments required
              </h1>
              <h2>&#8377;  {format(monthlyInvestment)} </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildEducation;
