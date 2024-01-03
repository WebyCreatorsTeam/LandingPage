import { FC } from 'react'
import IconPhone from '../../../images/contact/icon-phone.png'
import IconEmail from '../../../images/contact/icon-mail.png'

const ContactInfo: FC = () => {
    return (
        <div className='info-container'> {/* display: flex */} {/*, חשבתי לשים את האלמנטים בפלקס על מנת שיהיו אחד ליד השני */}
           <div className='info-icon-container'>
           <p className='info-text'>webycreatorsteam@gmail.com</p>
                <img className='info-icon' src={IconEmail} alt="אייקון של מכתב" />
            </div>

            <div className='info-icon-container'> {/* display: flex */} {/*, חשבתי לשים את האלמנטים בפלקס על מנת שיהיו אחד ליד השני */}
            <p className='info-text'>054-799-1963</p>
                <img className='info-icon' src={IconPhone} alt="אייקון של טלפון" />
            </div>
        </div>
    )
}

export default ContactInfo