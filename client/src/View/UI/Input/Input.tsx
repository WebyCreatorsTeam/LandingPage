import { FC } from "react";
import { InputPorps } from "./inputType";

const Input: FC<InputPorps> = ({
    type, name, placeholder, inputsValue, checkFunction, inputsError
}) => {
    return (
        <div className="input-container">
            <input className="form-container__text--p--inputs--input"
                style={{
                    border: inputsError[name as keyof typeof inputsError] === 'none' ? "none"
                        :
                        inputsError[name as keyof typeof inputsError].length === 0 ? "none" : "1px solid red"
                }}
                type={type}
                name={name}
                required
                defaultValue={inputsValue[name as keyof typeof inputsValue]}
                onChange={checkFunction}
            />
            <label className="labelLine">{placeholder}</label>
        </div>


    );
};

export default Input;
