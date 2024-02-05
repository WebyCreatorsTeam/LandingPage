import { FC } from 'react'
import HeaderImage from '../../../../images/header/header-image.png'

const Header: FC = () => {
    return (
        <div className='header-container'>
            <div className='header-container__text'>
                <p className='header-container__text--p'>יש לכם עסק? מיזם? סטארטפ?</p>
                <h1 className='header-container__text--p--h1'>
                    בואו לבנות את האתר שלכם,
                    <br />
                    שיקח אותכם צד אחד
                    <span>קדימה</span>                 </h1>
                <p className='header-container__text--p--h1--p'>
                    אנחנו יודעים שהתחלות יכולות להיות מאתגרות
                    <br />
                    לכן השירות שלנו כרגע
                    <span>בחינם</span>
                </p>
                <p className='header-container__text--p--h1--p--p'>*השירות לא כולל תשלומים נוספים (כגון דומיין,בסיס ונתונים וכדומה)</p>
            </div>
            <div>
                <img className='header-container__img' src={HeaderImage} alt="אנשים עומדים" />
            </div>
        </div>
    )
}

export default Header