import { User } from "../../Components/Form/types";

export interface InputPorps {
    type: string;
    name: string
    placeholder: string;
    inputsValue: User;
    checkFunction: (ev: React.SyntheticEvent) => void;
    inputsError: User
}
