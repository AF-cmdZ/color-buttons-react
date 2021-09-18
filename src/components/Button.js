import PropTypes from "prop-types";
import React, { useState } from "react";

function Button(props) {
  const [count, setCount] = useState(0);
  const styles = `${props.btnColor} m-4 p-4 rounded-md ${props.textColor}`;
  return (
    <button
      className={`${count > 3} ? ${styles} text-xl : ${styles}`}
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
