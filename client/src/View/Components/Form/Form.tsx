import { FC, useState } from "react";
import { inputs, options } from "./inputsList";
import Input from "../../UI/Input/Input";
import { Form } from "react-router-dom";
import axios from "axios";

const UserForm: FC = () => {
    const [message, setMessage] = useState<string>("");

    const sendUserDetails = async (ev: React.SyntheticEvent) => {
        const target = ev.target as typeof ev.target & {
            userName: { value: string };
            userEmail: { value: string };
            userPhone: { value: string };
            userHelp: { value: string };
        };

        const userName = target.userName.value;
        const userEmail = target.userName.value;
        const userPhone = target.userName.value;
        const userHelp = target.userHelp.value;

        console.log(userName, userEmail, userPhone, userHelp);

        if (userHelp.length === 0)
            return setMessage("נא לבחור במה אנחנו יכולים לעזור");

        const {
            data: { continueWork, message },
        } = await axios.post("/users/user-send-details/", {
            userName,
            userEmail,
            userPhone,
            userHelp,
        });

        if (continueWork) return setMessage(message);
    };

    return (
        <Form onSubmit={sendUserDetails}>
            <p>{message.length > 0 ? message : null}</p>
            {inputs.map((int, index) => (
                <Input
                    key={index}
                    {...int}
                />
            ))}
            <select
                name="userHelp"
                defaultValue=""
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
            <button type="submit">שלח</button>
        </Form>
    );
};

export default UserForm;