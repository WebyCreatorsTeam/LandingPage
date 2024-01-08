import { FC } from 'react'
import LikeDah from '../../../images/callus/Like-da.png'

const CallUs: FC = () => {
  return (
    <div className='callUs-container'>
        <h1 className='callUs-container__text'>מוכנים לקדם את העסק שלכם?</h1>
     {/*<p>השאירו פרטים ונחזור אליכם הכי מהר שאפשר</p>*/}
        <img className='callUs-container__text--img' src={LikeDah} alt="התקשרו עלינו" />
    </div>
  )
}

export default CallUs