'use client';
import { hndleSendDetails } from "./form.func";

const Form = () => {
    return (
        <div>
            <form onSubmit={hndleSendDetails}>
                <input type="text" name="userFullName" placeholder='שם מלא' />
                <input type="text" name="userPhoneNumber" placeholder='מספר טלפון' />
                <input type="text" name="userEmail" placeholder='דואר אלקטרוני' />
                <select name="topicHelp" defaultValue={''}>
                    <option value="" disabled>נא לבחור מה אנחנו יכולים לעזור לך</option>
                    <option value="develop">פיתוח אתר</option>
                    <option value="ux/ui">UX/UI</option>
                    <option value="style">עיצוב</option>
                    <option value="work">תחזוקה של אתר</option>
                    <option value="work">יצירת קשר</option>
                </select>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Form