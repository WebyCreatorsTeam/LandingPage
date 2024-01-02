import { FC } from 'react'
import HowWorkImage from '../../../images/howworks/how-work-image.png'

const WorksHead: FC = () => {
    return (
        <div>
            <div>
                <h1>איך זה יעבוד?</h1>
                <p>נתחיל בבנית האתר תוך התחשבות בדרישות בעל העסק ונהיה זמינים לתמיכה בכל עת</p>
            </div>
            <img src={HowWorkImage} alt="בחור עומד מול עמוד דפדפן" />
        </div>
    )
}

export default WorksHead