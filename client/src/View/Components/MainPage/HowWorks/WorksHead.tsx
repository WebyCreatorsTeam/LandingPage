import { FC } from 'react'
import HowWorkImage from '../../../../images/howworks/how-work-image.png'

const WorksHead: FC = () => {
    return (
        <div className='worksHead-container'>
            <div className='worksHead-container__text'>
                <h1 className='worksHead-container__text--bold'>איך זה יעבוד?</h1>
                <p className='worksHead-container__text--p'>נתחיל בבנית האתר תוך התחשבות בדרישות בעל העסק
                    <br />
                    ונהיה זמינים לתמיכה בכל עת</p>
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