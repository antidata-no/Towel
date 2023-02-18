import { PropsWithChildren, ReactNode } from "react";

const Frame = (props: PropsWithChildren) => {
  //if (!props) return;
  return <div className=" w-1/2 bg-white rounded border-solid border-2 border-black p-2 m-16">{props.children}</div>;
};

export default Frame;
