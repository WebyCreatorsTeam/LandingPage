import { InputsList, OptionsList } from "./types";

export const inputs: Array<InputsList> = [
    { type: "text", name: "userName", placeholder: "שם מלא/חברה*" },
    { type: "text", name: "userEmail", placeholder: "אימייל*" },
    { type: "text", name: "userPhone", placeholder: "מספר טלפון*"},
];

export const options: Array<OptionsList> = [
    { value: "none", text: " במה נוכל לעזור " },
    { value: "dev", text: "פיתוח אתר" },
    { value: "uxui", text: "UX/UI ופיתוח אתר" },
    { value: "support", text: "תחזוקה של אתר" },
    { value: "vebinar", text: "הרשמה לובינר 19.03.2024" },
    { value: "other", text: "אחר" },
];
