import React, { PropsWithChildren, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import RenderInBackdrop from "./RenderInBackdrop";
import { IError } from "../../interfaces/Interfaces";

const ErrorModal = (props: IError) => {

  const handleDismiss = () => {
    props.setShow(false);
  }

  return (
    <>
      <RenderInBackdrop>
        <div className={  props.show ?
          "modal modal-open id='my-modal-2'" :
          'modal id="my-modal-2'
        } >
          <div className="modal-box">
            <h3 className="font-bold text-lg">{props.title}</h3>
            <p className="py-4">{props.message}!</p>
            <div className="modal-action">
              <a href="#" className="btn" onClick={handleDismiss}>
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
