
export enum OptionOfHelp {
    dev = "פיתוח",
    uxui = "UX/UI",
    both = "UX/UI ופיתוח",
    support = "תחזוקה של אתר"
}

export interface InputsList {
    type: string
    name: string
    placeholder: string
}

export interface UserData {
    userName: string
    userEmail: string
    userPhone: string
}
