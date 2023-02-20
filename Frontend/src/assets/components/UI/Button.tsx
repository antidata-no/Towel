import React, { PropsWithChildren } from "react";

const Button = (props: any) => {
  return (
    <button className="btn btn-primary" type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default Button;
