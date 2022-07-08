import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import Box from "@material-ui/core/Box";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./EmergencyFund.css";
import { format } from "indian-number-format";

const EmergencyFund = () => {

  const [livingExpenses, setLivingExpenses] = useState(10000);
  const [emergencyFundTime, setEmergencyFundTime] = useState(12);
  const [retrievalTime, setRetrievalTime] = useState(5);
  const [returnRate, setReturnRate] = useState(5);


  const handleChange1 = (event, newValue) => {
    setLivingExpenses(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setEmergencyFundTime(newValue);
  };
  const handleChange3 = (event, newValue) => {
    setRetrievalTime(newValue);
  };
  const handleChange4 = (event, newValue) => {
    setReturnRate(newValue);
  };

  const [neededEmergencyFund, setNeededEmergencyFund] = useState(0);

  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  useEffect(() => {
    //the function and the calculation of the values comes here
    let neededFund, neededMonthly;
    neededFund = livingExpenses * emergencyFundTime;
    let r = returnRate;
    r = r / 1200;
    neededMonthly = neededFund / (((Math.pow(1 + r, retrievalTime) - 1) / r) * (r + 1));
    setNeededEmergencyFund(parseInt(neededFund, 10));
    setMonthlyInvestment(parseInt(neededMonthly, 10));
  }, [livingExpenses, emergencyFundTime, retrievalTime, returnRate]);

  const pieState = {
    labels: ["Invested Amount", "Targeted Goal Amount"],
    datasets: [
      {
        backgroundColor: ["#F76300", "#FFFFFF"],
        borderColor: ["#F76300", "#FFFFFF"],
        data: [10, 20]
      }
    ]
  };

  const options = {
    plugins: {
      title: {
        display: true,
        padding: {
          top: 30,
          bottom: 30
        },
        animation: {
          animateScale: true
        }
      },
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="debanil-lawri">
      <h1 className="hedarf">Emergency Fund Calculator</h1>
      <div className="emergencyfund">
        <div className="chart">
          <div className="chartinfo">
            <div className="chartinfo-title">
              <h1>Emergency Fund you need</h1>
              <h1> &#8377;&nbsp;{format(neededEmergencyFund)}</h1>
            </div>
            <div className="chartinfo-title">
              <h1>Monthly Investment Required</h1>
              <h1> &#8377;&nbsp;{format(monthlyInvestment)}</h1>
            </div>
          </div>
        </div>
        <div className="sliders">
          <div className="sliderheading">
            Systematic Investment Plan (SIP) allows you to make small investment at regular
            intervals to help you achieve your dreams.
          </div>
          <div className="slider1">
            <div className="chartinfo-title-text">
              <h1>Living Expenses (p.m.)</h1>
              <div className="chartinfo-title-text-sub">
                <span>&#8377;&nbsp;</span>
              <input type="number" placeholder="0" onChange={(e) => setLivingExpenses(e.target.value)} value={livingExpenses} />
              </div>
            </div>
            <Box>
              <Slider
                aria-label="Volume"
                value={livingExpenses}
                onChange={handleChange1}
                valueLabelDisplay="off"
                max={200000}
              />
            </Box>
          </div>
          <div className="slider2">
            <div className="chartinfo-title-text">
              <h1>Emergency Rate for (months)</h1>
              <div className="chartinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setEmergencyFundTime(e.target.value)} value={emergencyFundTime} />
               <span>&nbsp;M</span>
              </div>
            </div>

            <Box>
              <Slider
                aria-label="Volume"
                value={emergencyFundTime}
                onChange={handleChange2}
                valueLabelDisplay="off"
                max={500}
              />
            </Box>
          </div>
          <div className="slider3">
            <div className="chartinfo-title-text">
              <h1>Emergency Fund to be accumulated in (months)</h1>

              
              <div className="chartinfo-title-text-sub">
                <input
                  type="number" placeholder="0"
                  onChange={(e) =>
                    setRetrievalTime(
                      e.target.value 
                    )
                  }
                  value={retrievalTime}
                />
                  <span>&nbsp;M</span>
              </div>
            </div>

            <Box>
              <Slider
                aria-label="Volume"
                value={retrievalTime}
                onChange={handleChange3}
                valueLabelDisplay="off"
                max={500}
              />
            </Box>
          </div>
          <div className="slider4">
            <div className="chartinfo-title-text">
              <h1>Investment Return (p.a.)</h1>
              <div className="chartinfo-title-text-sub">
              <input type="number" placeholder="0" onChange={(e) => setReturnRate(e.target.value)} value={returnRate} />
              <span>%</span>
              </div>
            </div>
            <Box>
              <Slider
                aria-label="Volume"
                value={returnRate}
                onChange={handleChange4}
                valueLabelDisplay="off"
                max={100}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyFund;
