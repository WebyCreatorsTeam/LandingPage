import axios from 'axios';
import { FC, Suspense } from 'react'
import { Element } from 'react-scroll';
import { API_ENDPOINT } from '../../../utils/api-connect';
import { Await, useLoaderData } from 'react-router-dom';
import Slider from "react-slick";
import Stars from '../../../images/feedbacks/stars.svg'

interface IFeedback {
    customerFeedback: string
    customerName: string
    projectId: string
    webSiteName: string
    _id: string
}
const Feedbacks: FC = () => {
    const { feedbacks } = useLoaderData() as { feedbacks: Array<IFeedback> }

    const settings = {
        // centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <Element name="feedbacks">
            <section className='feedbacks'>
                <h2>מה לקוחות אומרים עלינו?</h2>
                <Suspense>
                    <Await resolve={feedbacks}>
                        <div className='feedbacks__main'>
                            <Slider {...settings}>
                                {feedbacks.map(fdb => (
                                    <div key={fdb._id} dir='rtl'>
                                        <div className='feedbacks__main--feedback'>
                                            <h3>{fdb.customerName}, "{fdb.webSiteName}"</h3>
                                            <img src={Stars} alt="חמש כוכבים" />
                                            <p>"{fdb.customerFeedback}"</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Await>
                </Suspense>
            </section>
        </Element>
    )
}

export default Feedbacks

export const hendleGetPFeedbacks = async () => {
    const { data: { continueWork, feedbacks } } = await axios.get(`${API_ENDPOINT}/feedbacks/get-feedbacks`)
    if (continueWork) return feedbacks
}