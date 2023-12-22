import * as yup from "yup";

export const schema = yup.object().shape({
    userFullName: yup.string().required("נא למלא את השם המלא").min(2),
    userPhoneNumber: yup.string().required("נא למלא את המםפר טלפון").min(2),
    userEmail: yup.string().email("נא למלא דואר אלקטרוני תקין").required("נא למלא דואר אלקטרוני"),
    topicHelp: yup.string().required("נא לבחור במה אנחנו יכולים לעזור").min(2),
});