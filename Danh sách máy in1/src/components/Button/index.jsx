import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none" };
const variants = { fill: { blue_A100: "bg-blue-A100 text-white-A700" } };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "",
  variant = "fill",
  color = "blue_A100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),

  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_A100"]),
};

export { Button };
