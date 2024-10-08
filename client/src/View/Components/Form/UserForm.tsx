import { FC, useEffect, useState } from 'react'
import { Form, useNavigation } from 'react-router-dom';
import callUsDesc from "../../../images/callus/call-us-desc.webp";
import callUsMob from "../../../images/callus/call-us-mob.webp";
// import Women from "../../../images/callus/call-us.webp";
import { inputs, options } from './inputsList';
import Input from '../../UI/Input';
import axios from 'axios';
import { API_ENDPOINT } from '../../../utils/api-connect';
import CircularProgress from '@mui/material/CircularProgress';
import { useMediaQuery } from 'react-responsive';

const UserForm: FC = () => {
    const desktop = useMediaQuery({ query: '(min-width: 768px)' })

    const [submitting, setSubmitting] = useState<boolean>(true);
    const [userDetails, setUserDetails] = useState({ userName: "", userEmail: "", userPhone: "", userHelp: "" })
    const navigation = useNavigation();

    useEffect(() => {
        (() => {
            return setSubmitting(Object.values(userDetails).every((a) => a.length > 0));
        })()
    }, [userDetails]);

    return (
        <section className="contact-form" id="contact">
            <div className="elementWidth contact-form__element">
                <div className="contact-form__element--form">
                    <h2>מוכנים לקדם את העסק שלכם?</h2>
                    <p>השאירו פרטים ונחזור אליכם הכי מהר שאפשר</p>
                    <Form action='/' method='post'>
                        {inputs.map((int, idx) => (
                            <Input key={idx} {...int} setUserDetails={setUserDetails} />
                        ))}
                        <select name="userHelp" aria-label="במה אנחנו יכולים לעזור" required onChange={(ev: any) =>
                            setUserDetails((user: any) => { return { ...user, [ev.target.name]: ev.target.value } })
                        }>
                            {options.map((opt, idx) => (
                                <option key={idx} value={opt.value} selected={opt.value === ""} disabled={opt.value === ""}>{opt.text}</option>
                            ))}
                        </select>

                        <button id="sendBtnForm" disabled={!submitting === true ? true : navigation.state === "submitting" ? true : false}
                            style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}
                            className={!submitting === true ? "form-btn_disable" : navigation.state === "submitting" ? "form-btn_disable" : "form-btn_active"}
                            title={!submitting === true ? "על מנת להשאיר פרטים נא למלא את כל השדות" : navigation.state === "submitting" ? "פרטים נשלחים" : "שלח"}
                            onClick={() => {
                                const btn = document.getElementById('sendBtnForm') as HTMLButtonElement
                                if (btn.disabled) {
                                    alert("נא למלא את כל הפרטים")
                                }
                            }}
                        >
                            {navigation.state === "submitting" ?
                                <>
                                    הפרטים נשלחים
                                    <CircularProgress size={30} style={{}} color="inherit" />
                                </>
                                :
                                "שלח"
                            }
                        </button>
                    </Form>
                </div>
                <div className="contact-form__element--image">
                    <img src={desktop ? callUsDesc : callUsMob} alt="אישה עם טלפון" width={desktop ? 700: 300} height={desktop ? 394: 169 } loading="lazy" />
                </div>
            </div>
        </section>
    )
}

export default UserForm;

interface IUser {
    userName: string, userEmail: string, userPhone: string, userHelp: string
}
const hendleSendDetails = async ({ userName, userEmail, userPhone, userHelp }: IUser) => {
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

