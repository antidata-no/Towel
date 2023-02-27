import React, { PropsWithChildren } from "react";
import Button from "./Button";

const Card = (props: any) => {
	return (
		<div className="flex justify-center">
			<div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
				<h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
					{props.title}
				</h5>
				<p className="text-gray-700 text-base mb-4">{props.content}</p>
				{props.button ? <Button>{props.button}</Button> : null}
			</div>
		</div>
	);
};
export default Card;

/*





 


</div>
  



*/
