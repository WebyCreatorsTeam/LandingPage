import { FC } from 'react'
import IconPhone from '../../../images/contact/icon-whatsapp.png'
import IconEmail from '../../../images/contact/icon-mail.png'

const ContactInfo: FC = () => {
    return (
        <div className='info-container'>
            <div className='info-container__icon'>
                <a href="mailto:webycreatorsteam@gmail.com" className='info-container__icon--link'>webycreatorsteam@gmail.com</a>
                <img className='info-container__icon--link--img' src={IconEmail} alt="אייקון של מכתב" />
            </div>

            <div className='info-container__icon'>
                <a href="tel:972547991963" className='info-container__icon--link'>054-799-1963</a>
                <img className='info-container__icon--link--img' src={IconPhone} alt="אייקון של טלפון" />
            </div>
        </div>
    )
}

export default ContactInfo