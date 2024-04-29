import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom';
import { Element } from 'react-scroll';
import Women from "../../../images/callus/women.png";
import { inputs, options } from '../Form/inputsList';
import Input from '../../UI/Input';
import axios from 'axios';
import { API_ENDPOINT } from '../../../utils/api-connect';

const UserForm = () => {
    const [submitting, setSubmitting] = useState<boolean>(true);
    const [userDetails, setUserDetails] = useState({ userName: "", userEmail: "", userPhone: "", userHelp: "" })

    useEffect(() => {
        (() => {
            return setSubmitting(Object.values(userDetails).every((a) => a.length > 0));
        })()
    }, [userDetails]);

    return (
        <Element name="contact">
            <section className="contact-form">
                <div className="elementWidth contact-form__element">
                    <div className="contact-form__element--form">
                        <h2>מוכנים לקדם את העסק שלכם?</h2>
                        <p>השאירו פרטים ונחזור אליכם הכי מהר שאפשר</p>
                        <Form action='/' method='post'>
                            {inputs.map((int, idx) => (
                                <Input key={idx} {...int} setUserDetails={setUserDetails} />
                            ))}
                            <select name="userHelp" required onChange={(ev: any) =>
                                setUserDetails((user: any) => { return { ...user, [ev.target.name]: ev.target.value } })
                            }>
                                {options.map((opt, idx) => (
                                    <option key={idx} value={opt.value} selected={opt.value === ""} disabled={opt.value === ""}>{opt.text}</option>
                                ))}
                            </select>
                            <button disabled={!submitting} className={!submitting ? "form-btn_disable" : "form-btn_active"}>שלח</button>
                        </Form>
                    </div>
                    <div className="contact-form__element--image">
                        <img src={Women} alt="אישה עם טלפון" width={672} height={704} />
                    </div>
                </div>
            </section>
        </Element >
    )
}

export default UserForm;

interface IUser {
    userName: string, userEmail: string, userPhone: string, userHelp: string
}
const hendleSendDetails = async ({ userName, userEmail, userPhone, userHelp }: IUser) => {
    // console.log(userName, userEmail, userPhone, userHelp)
    const { data } = await axios.post(`${API_ENDPOINT}/users/user-send-details`, { userName, userEmail, userPhone, userHelp })
    return data
}

export const formAction = async ({ request }: any) => {
    const formData = await request.formData();

    const user = {
        userName: formData.get("userName"),
        userEmail: formData.get("userEmail"),
        userPhone: formData.get("userPhone"),
        userHelp: formData.get("userHelp"),
    };

    if (
        !formData.get("userName") ||
        !formData.get("userEmail") ||
        !formData.get("userPhone") ||
        !formData.get("userHelp")
    ) { return "נא למלא את כל השדות"; }

    const { continueWork, message } = await hendleSendDetails(user)
    console.log(continueWork, message)
    if (continueWork) {
        alert(message)
        return message
    }
    if (!continueWork) return alert("היית שגיא, נסה שנית")
}

