import { PropsWithChildren, ReactNode } from "react";

const Frame = (props: PropsWithChildren) => {
	//if (!props) return;
	return <div className="m-10">{props.children}</div>;
};

export default Frame;
