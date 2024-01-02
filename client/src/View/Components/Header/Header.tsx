import { FC } from 'react'
import HeaderImage from '../../../images/header/header-image.png'

const Header: FC = () => {
    return (
        <div>  {/* display: flex */} {/*חשבתי לשים את האלמנטים בפלקס על מנת שיהיו אחד ליד השני */}
            <div>
                <p>יש לכם עסק? מיזם? סטארטפ?</p>
                <h1>בואו לבנות את האתר שלכם, שיקח אותכם צד אחד קדימה</h1>
                <p>
                    אנחנו יודעים שהתחלות יכולות להיות מאתגרות לכן השירות שלנו כרגע בחינם
                </p>
                <p>*השירות לא כולל תשלומים נוספים (כגון דומיין,בסיס ונתונים וכדומה)</p>
            </div>
            <div>
                <img src={HeaderImage} alt="אנשים עומדים" />   {/*  בנתיים נשים תשמונה שיש בפיגמה, אחר כך נשנה לעדכנית */}
            </div>
        </div>
    )
}

export default Header