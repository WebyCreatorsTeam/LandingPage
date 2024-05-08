interface ValidReturn {
    continueWork: boolean;
    message: string;
}

// function hedleAlphabetic(str: string) {
//     // return str.split(" ").every(char => isNaN(char))
//     // (let i in srt)
//     // [...str].every(char => isNaN(char));
// }

export const validateValues = (inputKey: string, inputValue: string
    // inputData: any
): ValidReturn => {
    // const inputValue = Object.values(inputData)[0] as string;
    // console.log(value)
    // console.log(name)
    // const inputKey = Object.keys(inputData)[0];

    switch (inputKey) {
        case "userName":
            if (inputValue.length === 0 
                // || inputValue.length < 2
            ) return {
                continueWork: false, message: "נא למלא את השם המלא"
            };

            // const textRegEx: RegExp = /[A-Za-z]/gi;
            // const validText = RegExp(/^\p{L}/,'u').test(inputValue)
            // const validText = hedleAlphabetic(inputValue)
            
            // console.log(validText)

            break;
        case "userEmail":
            const emailRegex: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
            const validEmail = emailRegex.test(inputValue);

            if (inputValue.length === 0) return {
                continueWork: false, message: "נא למלא אימייל"
            };

            if (!validEmail) return {
                continueWork: false, message: "אימייל לא תקין"
            };

            break;
        case "userPhone":
            const phoneRegex: RegExp =
                /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/gi;

            const validPhone = phoneRegex.test(inputValue);

            if (inputValue.length === 0) return {
                continueWork: false,
                message: "נא למלא מספר טלפון",
            };

            if (!validPhone) return {
                continueWork: false,
                message: "מספר טלפון לא תקין",
            };

            break;
        // case "userHelp":
        //     if (inputValue.length === 0) return {
        //         continueWork: false,
        //         message: "מספר טלפון לא יכול להיות ריק",
        //     };

        //     break;
        default:
            return {
                continueWork: false,
                message: "ישנה שגיאה, נסא שנית",
            };
    }
    return { continueWork: true, message: "" };
};
