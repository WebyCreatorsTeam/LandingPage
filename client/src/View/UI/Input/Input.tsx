import { FC } from "react";
import { InputPorps } from "./inputType";

const Input: FC<InputPorps> = ({
    type,
    name,
    placeholder,
    inputsValue,
    checkFunction,
    inputsError,
}) => {
    return (
        <input
            style={{
                border: inputsError[name as keyof typeof inputsError] === 'none' ? "none"
                    :
                    inputsError[name as keyof typeof inputsError].length === 0 ? "none" : "1px solid red"
            }}
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
