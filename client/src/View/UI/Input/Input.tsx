import { FC } from "react";
import { InputPorps } from "./inputType";

const Input: FC<InputPorps> = ({ type, name, placeholder }) => {
    return (
        <div className="input-container">
            <input className="form-container__text--p--inputs--input"
            type={type}
            name={name}
            required
        />
        <label className="labelLine">{placeholder}</label>
            </div>
  
      
    );
};

export default Input;
