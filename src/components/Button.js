import PropTypes from "prop-types";
import React, { useState } from "react";

function Button(props) {
  const [count, setCount] = useState(0);
  return (
    <button
      className={`${props.btnColor} m-4 p-4 rounded-md ${props.textColor}`}
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      Click Here&nbsp;{count}
    </button>
  );
}

Button.propTypes = {
  btnColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
