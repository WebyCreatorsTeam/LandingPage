import { FC } from 'react'
import HowWorkImage from '../../../../images/howworks/how-work-image.png'

const WorksHead: FC = () => {
    return (
        <div className='worksHead-container'>
            <div className='worksHead-container__text'>
                <h2 className='worksHead-container__text--bold'>איך זה יעבוד?</h2>
                <p className='worksHead-container__text--p'>
                    מתחילת התהליך ועד סוף אנחנו ניהיה זמינים לתמיכה בכל עת.
                    {/* נתחיל בבנית האתר תוך התחשבות בדרישות בעל העסק */}
                    <br />
                    אנחנו נתמקד בהבנת הצרכים שלך, ניצור ועיצובים שישקפו באופן מדויק את המטרות והאידיאולוגיה של העסק שלך.
                    {/* ונהיה זמינים לתמיכה בכל עת */}
                    <br />
                    התהליך בנוי מכמה שלבים פשוטים:
                </p>
            </div>
            <div className='worksHead-container__img'>
                <div className='worksHead-container__img--mobile'>
                    <img src={HowWorkImage} alt="בחור עומד מול עמוד דפדפן" />
                </div>
            </div>
        </div>
    )
}

export default WorksHead