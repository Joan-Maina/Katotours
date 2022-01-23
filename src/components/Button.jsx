import React from "react";

function Button({ text, style }) {
  return (
    <div>
      <button className="buttoning" style={style}>
        {text}
      </button>
    </div>
  );
}

export default Button;
