import React from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Card from "@material-ui/core/Table";
import CardContent from "@material-ui/core/Table";
import "./Stepper.css";

const StepperDesign = ({ scanData }) => {
  console.log(scanData);
  return (
    <div className="stepper">
      <svg
        id="Group_13"
        data-name="Group 13"
        xmlns="http://www.w3.org/2000/svg"
        width="21.537"
        height="28.592"
        viewBox="0 0 21.537 28.592"
        className='svg1'
      >
        <path
          id="Path_21"
          data-name="Path 21"
          d="M1424.068,641.873a.9.9,0,0,1-.9-.9v-26.8a.9.9,0,0,1,1.24-.829l19.743,8.164a.9.9,0,0,1,.019,1.649l-17.405,7.682a.9.9,0,0,1-.724-1.64h0l15.486-6.834-16.565-6.848v25.462A.9.9,0,0,1,1424.068,641.873Z"
          transform="translate(-1423.172 -613.281)"
          fill="#030504"
        />
      </svg>
      <Stepper orientation="vertical">
        {scanData.map((scan) => (
          <Step>
            <StepLabel>
              <div
                style={{
                  backgroundColor: "lightgray",
                  padding: "15px",
                  borderRadius: "8px",
                }}
              >
                <span>
                  {scan["status_detail"]}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span>{scan.time}</span>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.467"
        className='svg2'
        height="26.849"
        viewBox="0 0 22.467 26.849"
      >
        <g id="warehouse" transform="translate(412.14 -420.613)">
          <path
            id="Path_209"
            data-name="Path 209"
            d="M21.942,14.789a.524.524,0,0,0,.524-.524V6.329a.524.524,0,0,0-.274-.461L11.483.063a.525.525,0,0,0-.5,0L.274,5.868A.524.524,0,0,0,0,6.329v20a.524.524,0,0,0,.524.524H21.942a.524.524,0,0,0,.524-.524V18.982a.524.524,0,0,0-1.049,0V25.8h-4.43V19.573a1.683,1.683,0,0,0-.4-1.088,1.43,1.43,0,0,0,.4-.99V11.4a1.436,1.436,0,0,0-1.435-1.435H6.914A1.436,1.436,0,0,0,5.479,11.4v6.1a1.43,1.43,0,0,0,.4.99,1.684,1.684,0,0,0-.4,1.087V25.8H1.049V6.641l10.185-5.52,10.185,5.52v7.624a.524.524,0,0,0,.524.524ZM10.049,11.011h2.369v3.274l-.939-.5a.525.525,0,0,0-.492,0l-.938.5ZM6.528,11.4a.386.386,0,0,1,.386-.386H9v4.146a.524.524,0,0,0,.77.463l1.463-.777,1.463.777a.524.524,0,0,0,.77-.463V11.011h2.086a.386.386,0,0,1,.386.386v6.1a.387.387,0,0,1-.386.386H6.914a.387.387,0,0,1-.386-.386Zm5.89,7.533V22.2l-.939-.5a.524.524,0,0,0-.492,0l-.939.5V18.93Zm-5.89.642a.643.643,0,0,1,.642-.642H9v4.146a.524.524,0,0,0,.77.463l1.463-.777,1.463.777a.524.524,0,0,0,.77-.463V18.93H15.3a.643.643,0,0,1,.642.642V25.8H6.528Zm0,0"
            transform="translate(-412.14 420.613)"
          />
          <path
            id="Path_210"
            data-name="Path 210"
            d="M57.747,51.214a.523.523,0,0,1-.25-.064l-8.361-4.532L40.774,51.15a.524.524,0,0,1-.5-.922l8.611-4.668a.524.524,0,0,1,.5,0L58,50.228a.524.524,0,0,1-.25.986Zm0,0"
            transform="translate(-450.042 377.502)"
          />
          <path
            id="Path_211"
            data-name="Path 211"
            d="M408.961,307.887a.524.524,0,1,1,.514-.422A.529.529,0,0,1,408.961,307.887Zm0,0"
            transform="translate(-799.158 129.865)"
          />
        </g>
      </svg>
    </div>
  );
};

export default StepperDesign;
