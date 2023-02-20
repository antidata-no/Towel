import { PropsWithChildren, ReactNode } from "react";

const Frame = (props: PropsWithChildren) => {
  //if (!props) return;
  return <div className="">{props.children}</div>;
};

export default Frame;
