import { FC } from 'react'
import Logo from '../../UI/Logo/Logo'
import { footerlinks } from './footerLinks'

const Footer: FC = () => {
  return (
    <div>
        <Logo/>
        {footerlinks.map((lnk, index)=> (
             <a href={lnk.url} key={index}><img src={lnk.img} alt={lnk.alt} /></a>
        ))}
    </div>
  )
}

export default Footer   