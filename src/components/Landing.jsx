import React from "react";
import "./Landing.css";
import logo from '../rjp.svg';

export default function Landing() {
  return (
    <div className="landing">
      <div className="bg-box">
            <img src={logo} />
      </div>
    </div>
  );
}
