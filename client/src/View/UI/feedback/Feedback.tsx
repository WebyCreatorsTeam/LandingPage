import {FC} from 'react'
import Starts from '../../../images/whyus/stars.png'

const Feedback:FC = () => {
  return (
    <div className='feedback-container'>
    <div className='feedback-container__title'>
    <p className='feedback-container__title--text'>title</p>
    <img src={Starts} alt='start' className='feedback-container__title--img'/>
    </div>
    <p className='feedback-container__p'>yyjhjhjhfjfjg</p>
</div>
  )
}

export default Feedback