import { FC } from 'react'
import IconPhone from '../../../images/contact/icon-phone.png'
import IconEmail from '../../../images/contact/icon-mail.png'

const ContactInfo: FC = () => {
    return (
        <div> {/* display: flex */} {/*, חשבתי לשים את האלמנטים בפלקס על מנת שיהיו אחד ליד השני */}
            <div> {/* display: flex */} {/*, חשבתי לשים את האלמנטים בפלקס על מנת שיהיו אחד ליד השני */}
                <img src={IconPhone} alt="אייקון של טלפון" />
                <p>054-799-1963</p>
            </div>
            <div>
                <img src={IconEmail} alt="אייקון של מכתב" />
                <p>webycreatorsteam@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactInfo