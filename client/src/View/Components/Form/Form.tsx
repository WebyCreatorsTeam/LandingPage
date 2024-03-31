import { FC, useEffect, useState } from "react";
import axios from "axios";
import { User } from "./types";
import { inputs, options } from "./inputsList";
import Input from "../../UI/Input/Input";
import { Form } from "react-router-dom";
import ArrowIcon from "../../../images/arrow-icon.png"
import { validateValues } from "./formValidation";
import { API_ENDPOINT } from "../../../utils/api-connect";

const UserForm: FC = () => {
    const [message, setMessage] = useState<string>("");
    const [green, setGreen] = useState<boolean>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [inputsError, setInputsError] = useState<User>({ userName: "none", userEmail: "none", userPhone: "none", userHelp: "none" });
    const [inputFields, setInputFields] = useState<User>({ userName: "", userEmail: "", userPhone: "", userHelp: "" });
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const handleChangeInput = (ev: React.SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;

        const { message, continueWork } = validateValues({ [target.name]: target.value });

        setMessage(message);
        setGreen(continueWork);
        setInputsError({ ...inputsError, [target.name]: message });

        return setInputFields({ ...inputFields, [target.name]: target.value });
    };

    // console.log(API_ENDPOINT)
    useEffect(() => {
        (() => {
            return setSubmitting(Object.values(inputsError).every((a) => a.length === 0));
        })()
    }, [inputFields, inputsError]);

    const sendUserDetails = async (ev: React.SyntheticEvent) => {
        ev.preventDefault()
        setIsLoader(prev => !prev)
        const { data: { continueWork, message } } = await axios.post(`${API_ENDPOINT}/users/user-send-details/`, { inputFields });
        setGreen(continueWork);

        const formInputs = document.querySelectorAll(".form-container__text--p--inputs--input") as NodeList
        const formSelect = document.querySelector(".form-container__text--p--inputs--select") as HTMLSelectElement

        formInputs.forEach((aaaaa: any) => { aaaaa.value = "" })
        formSelect.value = "פיתוח אתר"

        setInputsError({ userName: "none", userEmail: "none", userPhone: "none", userHelp: "none" })
        return setMessage(message);

    };

    return (
        <Form className="form-container" onSubmit={sendUserDetails}>
          <div className={isLoader ? "loader-container" : "loader-container-false"}>
          <div className="loader-container__style"></div>
          </div>
            <h1 className='form-container__text'>מוכנים לקדם את העסק שלכם?</h1>
            <p className="form-container__text--p">השאירו פרטים ונחזור אליכם הכי מהר שאפשר</p>
            <p className="message" style={{ color: green ? "green" : "red", textAlign: "center" }}>
                {message.length > 0 ? message : null}
            </p>
            <div className="form-container__text--p--inputs">

                {inputs.map((int, index) => (
                    <Input
                        key={index}
                        {...int}
                        inputsValue={inputFields}
                        checkFunction={handleChangeInput}
                        inputsError={inputsError}
                        
                    />
                ))}
                <div className="select-container">
                    <select
                        className="form-container__text--p--inputs--select"
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
                    <div className="icon-container">
                        <img src={ArrowIcon} alt="arrow"></img>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={!submitting}
                    className={submitting ? "form-container__text--p--inputs--button--bold" : "form-container__text--p--inputs--button"}>
                    שלח
                </button>
            </div>
        </Form>
    );
};

export default UserForm;


