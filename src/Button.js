import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>;
}

Button.prototype = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) + 
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

      if(count>1){
        return new Error(
            'only one if primary, secondary, success, warning, danger can be true'
        ); 
      }
  },
};

export default Button;
