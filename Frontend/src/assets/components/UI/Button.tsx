import React, { PropsWithChildren } from 'react';

const Button = (props: any) => {
  return (
    <div className="flex space-x-2 justify-center">
    <button
      className="btn btn-primary" 
      type={props.type || 'button'}
    >
      {props.children}
    </button>
    </div>
  );
};

export default Button;
