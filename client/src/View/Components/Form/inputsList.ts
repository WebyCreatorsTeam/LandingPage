import { InputsList, OptionsList } from "./types";

export const inputs: Array<InputsList> = [
    { type: "text", name: "userName", placeholder: "שם מלא*", autoComp: "name" },
    { type: "text", name: "userEmail", placeholder: "אימייל*", autoComp: "email" },
    { type: "text", name: "userPhone", placeholder: "מספר טלפון*", autoComp: "tel" },
];

export const options: Array<OptionsList> = [
    { value: "", text: "במה נוכל לעזור *" },
    { value: "dev", text: "פיתוח אתר" },
    { value: "uxui", text: "UX/UI ופיתוח אתר" },
    { value: "support", text: "תחזוקה של אתר" },
    { value: "other", text: "אחר" },
];