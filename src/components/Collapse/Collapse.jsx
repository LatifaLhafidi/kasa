import React, { useState, useRef, useEffect } from "react";

function Collapse({ title, text }) {
  
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <img />
      </div>
      <div>
        <ul>{text}</ul>
      </div>
    </div>
  );
}

export default Collapse;
