import { FC } from 'react'
import LikeDah from '../../../images/callus/Like-da.png'

const CallUs: FC = () => {
  return (
    <div>
        <h1>מוכנים לקדם את העסק שלכם?</h1>
        <p>השאירו פרטים ונחזור אליכם הכי מהר שאפשר</p>
        <img src={LikeDah} alt="התקשרו עלינו" />
    </div>
  )
}

export default CallUs