import { FC } from 'react'
import { inputs } from './inputsList'
import Input from '../../UI/Input/Input'
import { OptionOfHelp } from './types'
import { Form, useActionData } from "react-router-dom";

const UserForm: FC = () => {
    const data = useActionData()
    console.log(useActionData())

    return (
        <Form action="/" method="post">
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