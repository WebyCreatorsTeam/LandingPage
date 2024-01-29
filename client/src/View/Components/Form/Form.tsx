import { FC, useState } from "react";
import { inputs, options } from "./inputsList";
import Input from "../../UI/Input/Input";
import { Form } from "react-router-dom";
import axios from "axios";
import ArrowIcon from "../../../images/arrow-icon.png"

const UserForm: FC = () => {
    const [message, setMessage] = useState<string>("");
    const [green, setGreen] = useState<boolean>();
    const [isUserFull, getIsUserFull] = useState<boolean>(false);
   
    

    const sendUserDetails = async (ev: React.SyntheticEvent) => {
        const target = ev.target as typeof ev.target & {
            userName: { value: string };
            userEmail: { value: string };
            userPhone: { value: string };
            userHelp: { value: string };
        };

        const userName = target.userName.value;
        const userEmail = target.userEmail.value;
        const userPhone = target.userPhone.value;
        const userHelp = target.userHelp.value;


        console.log(userName, userEmail, userPhone, userHelp);
        console.log(userHelp.length, isUserFull)

        if (userHelp.length === 0)
            return setMessage("נא לבחור במה אנחנו יכולים לעזור");
          
            if( userName.length>0
                && userEmail.length>0
                && userPhone.length>0 
                && userHelp.length>0) 
           getIsUserFull(prev => !prev)

        const {
            data: { continueWork, message },
        } = await axios.post("/users/user-send-details/", {
            userName,
            userEmail,
            userPhone,
            userHelp,
        });

        console.log(message);
        console.log(isUserFull)
        setGreen(continueWork);
        return setMessage(message);
    };

    return (
        <Form className="form-container" onSubmit={sendUserDetails}>
            <h1 className='form-container__text'>מוכנים לקדם את העסק שלכם?</h1>
            <p className="form-container__text--p">השאירו פרטים ונחזור אליכם הכי מהר שאפשר</p>
            <p style={{ color: green ? "green" : "red" }}>
                {message.length > 0 ? message : null}
            </p>
            <div className="form-container__text--p--inputs">
                {inputs.map((int, index) => (
                    <Input
                        key={index}
                        {...int}
                    />
                ))}
                <div className="select-container">
                <select
                    className="form-container__text--p--inputs--select"
                    name="userHelp"
                     defaultValue="none"
                >
                    {options.map((opt, index) => (
                        <option
                            key={index}
                            defaultValue={opt.value}
                            disabled={opt.value === "none" ? true : false}
                            selected={opt.value === "none" ? true : false}
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
                  className = {isUserFull?"form-container__text--p--inputs--button--bold": "form-container__text--p--inputs--button"}>
                    שלח {isUserFull}
                </button>
            </div>
        </Form>
    );
};

export default UserForm;


