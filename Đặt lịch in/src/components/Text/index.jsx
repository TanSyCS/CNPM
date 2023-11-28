import React from "react";

const sizeClasses = {
  txtEBGaramondRomanRegular18: "font-ebgaramond font-normal",
  txtEBGaramondRomanRegular18Blue900: "font-ebgaramond font-normal",
  txtEBGaramondRomanBold18Blue900: "font-bold font-ebgaramond",
  txtEBGaramondRomanBold48: "font-bold font-ebgaramond",
  txtEBGaramondRomanBold18Black900: "font-bold font-ebgaramond",
  txtEBGaramondRomanBold18: "font-bold font-ebgaramond",
  txtEBGaramondRomanRegular18Black9007f: "font-ebgaramond font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
