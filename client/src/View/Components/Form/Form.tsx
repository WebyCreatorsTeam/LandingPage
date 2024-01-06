import { FC, useEffect, useState } from "react";
import { inputs, options } from "./inputsList";
import Input from "../../UI/Input/Input";
import { Form } from "react-router-dom";
import axios from "axios";
import { validateValues } from "./fornValidation";

export interface User {
    userName: string;
    userEmail: string;
    userPhone: string;
    userHelp: string;
}

const UserForm: FC = () => {
    const [message, setMessage] = useState<string>("");
    const [green, setGreen] = useState<boolean>();
    const [submitting, setSubmitting] = useState<boolean>();
    const [inputError, setInputError] = useState<string>();
    const [inputsError, setInputsError] = useState<User>({ userName: "none", userEmail: "none", userPhone: "none", userHelp: "none" });
    const [inputFields, setInputFields] = useState<User>({ userName: "", userEmail: "", userPhone: "", userHelp: "" });

    const handleChangeInput = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement;

        const { message, input, continueWork } = validateValues({ [target.name]: target.value });

        setMessage(message);
        setInputError(input);
        setGreen(continueWork);
        setInputsError({ ...inputsError, [target.name]: message });

        return setInputFields({ ...inputFields, [target.name]: target.value });
    };

    useEffect(() => {
        (() => {
            return setSubmitting(Object.values(inputsError).some((a) => a !== ""));
        })()
    }, [inputFields, inputsError]);


    const sendUserDetails = async () => {
        const { data: { continueWork, message } } = await axios.post("/users/user-send-details/", { inputFields });
        setGreen(continueWork);
        return setMessage(message);
        // return setInputFields({
        //     userName: "", userEmail: "", userPhone: "", userHelp: "",
        // });
    };

    return (
        <Form
            className="form-container"
            onSubmit={sendUserDetails}
        >
            <p className="form-container__text">
                השאירו פרטים ונחזור אליכם הכי מהר שאפשר
            </p>
            <p style={{ color: green ? "green" : "red" }}>
                {message.length > 0 ? message : null}
            </p>
            <div className="form-container__text--inputs">
                {inputs.map((int, index) => (
                    <Input
                        key={index}
                        {...int}
                        inputsValue={inputFields}
                        checkFunction={handleChangeInput}
                        inputError={inputError}
                    />
                ))}
                <select
                    className="form-container__text--inputs--select"
                    name="userHelp"
                    defaultValue={inputFields.userHelp}
                    onChange={handleChangeInput}
                >
                    {options.map((opt, index) => (
                        <option
                            key={index}
                            defaultValue={opt.value}
                            disabled={opt.value === "" ? true : false}
                        >
                            {opt.text}
                        </option>
                    ))}
                </select>
                <button
                    className="form-container__text--inputs--button"
                    type="submit"
                    disabled={submitting}
                >
                    שלח
                </button>
            </div>
        </Form>
    );
};

export default UserForm;
