import { FC } from "react";
import { InputPorps } from "./inputType";

const Input: FC<InputPorps> = ({
    type,
    name,
    placeholder,
    inputsValue,
    checkFunction,
    inputError,
}) => {
    return (
        <input
            style={{ border: inputError === name ? "1px solid red" : "none" }}
            className="form-container__text--inputs--input"
            type={type}
            name={name}
            placeholder={placeholder}
            required
            defaultValue={inputsValue[name as keyof typeof inputsValue]}
            onChange={checkFunction}
        />
    );
};

export default Input;
