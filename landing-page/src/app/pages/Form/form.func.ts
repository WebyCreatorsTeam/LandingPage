import { schema } from "./formSchema";
import { FormObj } from "./typeForm";

export async function hndleSendDetails(ev: any) {
    try {
        ev.preventDefault();

        console.log(ev)
    
        const formObj: FormObj = {}
    
        for (let field of ev.target) {
            console.log(field.type, field.name, field.value)
    
            if (field.type !== 'submit') {
                formObj[field.name] = field.value
            }
        }
    
        console.log(formObj)
    
        schema.validate(formObj)
            .then(async () => {
                const res = await fetch("/api/post", {
                    method: "POST",
                    body: JSON.stringify(formObj),
                  });
          
                console.log('all okey')
            })
            .catch(err => {
                console.log(err.errors[0]);
            })
    
    
    } catch (error) {
        console.log(error)
    }
   

}