import { FC } from 'react'
import HeaderImage from '../../../images/header/header-image.png'

const Header: FC = () => {
    return (
        <div className='header-container'>  {/* display: flex */} {/*חשבתי לשים את האלמנטים בפלקס על מנת שיהיו אחד ליד השני */}
            <div className='header-text-container'>
                <p className='header-M-text'>יש לכם עסק? מיזם? סטארטפ?</p>
                <h1 className='header-L-text'>
                    בואו לבנות את האתר שלכם,
                    <br/>
                     שיקח אותכם צד אחד
                    <span>קדימה</span>                 </h1>
                <p className='header-M-text'>
                     אנחנו יודעים שהתחלות יכולות להיות מאתגרות
                     <br/>
                      לכן השירות שלנו כרגע 
                    <span>בחינם</span>
                </p>
                <p className='header-S-text'>*השירות לא כולל תשלומים נוספים (כגון דומיין,בסיס ונתונים וכדומה)</p>
            </div>
            <div>
                <img className='header-image' src={HeaderImage} alt="אנשים עומדים" />   {/*  בנתיים נשים תשמונה שיש בפיגמה, אחר כך נשנה לעדכנית */}
            </div>
        </div>
    )
}

export default Header