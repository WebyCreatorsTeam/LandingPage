import { UserData } from "./types";

const sendUserData = ({ userName, userEmail, userPhone }: UserData) =>{
    return {ok: true}
}

export const formAction = async ({ request }: any) => {
    const formData = await request.formData();
    console.log(formData.get("userName"))

    const userData = {
        userName: formData.get("userName"),
        userEmail: formData.get("userEmail"),
        userPhone: formData.get("userPhone"),
        // confirmPassword: formData.get("confirmPassword"),
    };
    // console.log(formData.get("userName"))

    if (
        !formData.get("userName") ||
        !formData.get("userEmail") ||
        !formData.get("userPhone")
    ) { alert("All field are required")
        return false }

    const data = await sendUserData(userData);
console.log(data)

if(data.ok) return "ok"
    // return true
}