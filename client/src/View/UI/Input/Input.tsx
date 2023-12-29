import { FC } from 'react'
import { InputPorps } from './inputType'

const Input: FC<InputPorps> = ({ type, name, placeholder }) => {
  return (
    <input type={type} name={name} placeholder={placeholder}/>
  )
}

export default Input