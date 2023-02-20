import React, { PropsWithChildren } from "react";
import Card from "./Card";
import Button from "./Button";
import RenderInBackdrop from "./RenderInBackdrop";
import { IError } from "../../interfaces/Interfaces";

const ErrorModal = (props: IError) => {
  return (
    <>
      <RenderInBackdrop>
        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{props.title}</h3>
            <p className="py-4">{props.message}!</p>
            <div className="modal-action">
              <a href="#" className="btn" onClick={props.onConfirm}>
                Dismiss
              </a>
            </div>
          </div>
        </div>
      </RenderInBackdrop>
    </>
  );
};

export default ErrorModal;
