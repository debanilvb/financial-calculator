import React, { useEffect, useState } from "react";
import "./Retirement.css";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";

const Retirement = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [radio3, setRadio3] = useState("");
  const [value4, setValue4] = useState(800);
  const handleChange4 = (event, newValue) => {
    setValue4(newValue);
  };
  return (
    <div className="debanil-lawri">
      {/* <div>hello</div> */}
      <h1 className="hedarf">Retirement Calculator</h1>
      <div className="retirement">
       
        <div className="retirementinput">
          <div className="retirementheading">
            Systematic Investment Plan (SIP) allows you to make small investment at regular
            intervals to help you achieve your dreams.
          </div>
          <div className="input11">
            <div className="retirementinfo-title-text">
              <h1>How old are you ?</h1>
            </div>
            <input type="number" value={value1} defaultValue="25" />
          </div>
          <div className="input2">
            <div className="retirementinfo-title-text">
              <h1>How much do you spend in a month ?</h1>
            </div>
            <input type="number" value={value2} defaultValue="3000" />
          </div>
          <div className="radiobuttons">
            <div className="retirementinfo-title-text">
              <h1>Which type of retirement do you want?</h1>
            </div>

            <div className="retirementradiobutton">
              {" "}
             <div>
             <input type="radio" name="retirementtype" value="Like a King" />
              <label  htmlFor="html">Like a King</label>
             </div>
              <br></br>
              <div>
              <input type="radio" name="retirementtype" value="I am happy the way I am" />
              <label htmlFor="html">I am happy the way I am</label>
              </div>
              <br></br>
             <div>
             <input type="radio" name="retirementtype" value="Like a monk" />
              <label htmlFor="html">Like a monk</label>
             </div>
              <br></br>
            </div>
          </div>
          <div className="retirementslider">
            <div className="retirementinfo-title-text">
              <h1>Time Period</h1>
              
              <div className="retirementinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setValue4(e.target.value)} value={value4} />
               <span>  Y </span>
              </div>
            </div>

            <Box >
              <Slider
                aria-label="Volume"
                value={value4}
                onChange={handleChange4}
             
                max={4000}
              />
            </Box>
          </div>
        </div>
        <div className="retirementinfos">
          <div className="retirementinfo">
            <div className="retirementinfo-title">
              <h1>Targeted Goal Amount</h1>
              <h2> &#8377; 600000000000000</h2>
            </div>
            <div className="retirementinfo-title">
              <h1>Monthly Investment</h1>
              <h2> &#8377; 6000000000000000</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retirement;
