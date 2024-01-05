import { FC } from "react";
import { InputPorps } from "./inputType";

const Input: FC<InputPorps> = ({ type, name, placeholder }) => {
    return (
        <input className="form-container__text--inputs--input"
            type={type}
            name={name}
            placeholder={placeholder}
            required
        />
    );
};

export default Input;
