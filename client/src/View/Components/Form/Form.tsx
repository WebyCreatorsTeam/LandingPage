import { FC, useEffect, useState } from "react";
import axios from "axios";
import { User } from "./types";
import { inputs, options } from "./inputsList";
import Input from "../../UI/Input/Input";
import { validateValues } from "./fornValidation";

const UserForm: FC = () => {
    const [message, setMessage] = useState<string>("");
    const [green, setGreen] = useState<boolean>();
    const [submitting, setSubmitting] = useState<boolean>();
    const [inputsError, setInputsError] = useState<User>({ userName: "none", userEmail: "none", userPhone: "none", userHelp: "none" });
    const [inputFields, setInputFields] = useState<User>({ userName: "", userEmail: "", userPhone: "", userHelp: "" });

    const handleChangeInput = (ev: React.SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;

        const { message, continueWork } = validateValues({ [target.name]: target.value });

        setMessage(message);
        setGreen(continueWork);
        setInputsError({ ...inputsError, [target.name]: message });

        return setInputFields({ ...inputFields, [target.name]: target.value });
    };

    useEffect(() => {
        (() => {
            return setSubmitting(Object.values(inputsError).some((a) => a.length !== 0));
        })()
    }, [inputFields, inputsError]);

    const sendUserDetails = async (ev: React.SyntheticEvent) => {
        ev.preventDefault()
        const { data: { continueWork, message } } = await axios.post("/users/user-send-details/", { inputFields });
        setGreen(continueWork);

        const formInputs = document.querySelectorAll(".form-container__text--inputs--input") as NodeList
        const formSelect = document.querySelector(".form-container__text--inputs--select") as HTMLSelectElement


        formInputs.forEach((aaaaa: any) => { aaaaa.value = "" })
        formSelect.value = "פיתוח אתר"
        setSubmitting(true)
        setInputsError({ userName: "none", userEmail: "none", userPhone: "none", userHelp: "none" })
        return setMessage(message);
    };

    return (
        <form
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
                        inputsError={inputsError}
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
        </form>
    );
};

export default UserForm;
