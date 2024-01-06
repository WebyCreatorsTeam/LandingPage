import { User } from "../../Components/Form/Form";

export interface InputPorps {
    type: string;
    name: string
    placeholder: string;
    inputsValue: User;
    checkFunction: (ev: React.SyntheticEvent) => void;
    inputError: any;
}
