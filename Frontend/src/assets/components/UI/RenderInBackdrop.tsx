import { PropsWithChildren } from "react";
import ReactDom from "react-dom";
import Card from "./Card";

const RenderInBackdrop = (props: PropsWithChildren) => {
	const backdrop = document.getElementById("backdrop-root")!;
	return ReactDom.createPortal(<>{props.children}</>, backdrop);
};

export default RenderInBackdrop;
