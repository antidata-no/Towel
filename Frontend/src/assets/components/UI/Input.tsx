import { IInputandButton } from "../../interfaces/Interfaces";
import Button from "./Button";

const Input = (props: IInputandButton) => {
  return (
    <>
      <form onSubmit={props.onSubmitHandler}>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor={props.labelid}>
            <span className="label-text">{props.labelText}</span>
          </label>
          <input
            type="text"
            placeholder={props.placeholder}
            className="input input-bordered w-full max-w-xs"
            id={props.labelid}
            onChange={props.onChangeHandler}
          />
          <Button type="submit">{props.buttonText}</Button>
        </div>
      </form>
    </>
  );
};

export default Input;
