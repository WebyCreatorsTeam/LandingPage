import { FC, useState } from 'react'
import { inputs } from './inputsList'
import Input from '../../UI/Input/Input'
import { OptionOfHelp } from './types'
import { Form, useActionData } from "react-router-dom";
import axios from 'axios';

const UserForm: FC = () => {
    const [message, setMessage] = useState<string>("")

    const sendUserDetails = async (ev: React.SyntheticEvent) => {
        
        const target = ev.target as typeof ev.target & {
            userName: { value: string }
            userEmail: { value: string }
            userPhone: { value: string }
        };

        const userName = target.userName.value;
        const userEmail = target.userName.value;
        const userPhone = target.userName.value;

        const {data: {continueWork, message}} = await axios.post("/users/user-send-details/", {userName, userEmail, userPhone})

        return setMessage(message)
    }

    return (
        <Form onSubmit={sendUserDetails}>
            <p>{message.length > 0? message : null}</p>
            {inputs.map((int, index) => (
                <Input key={index} {...int} />
            ))}
            <button type="submit">שלח</button>
        </Form>
    )
}

export default UserForm



















// <Form onSubmit={sendData}>
//     {inputs.map((int, index) => (
//         <Input key={index} {...int} />
//     ))}

//     <select>

//         {/* {OptionOfHelp.map(opt=>(
//         <option value={}>{}</option>
//     ))} */}
//         {/* <option value=""></option> */}
//     </select>

//     <button type="submit">Send</button>
// </Form>