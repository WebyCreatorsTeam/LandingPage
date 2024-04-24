import axios from 'axios';
import { FC, Suspense } from 'react'
import { Element } from 'react-scroll';
import { API_ENDPOINT } from '../../../utils/api-connect';
import { Await, useLoaderData } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
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
    const desktop = useMediaQuery({ query: '(min-width: 768px)' })
    const { feedbacks } = useLoaderData() as { feedbacks: Array<IFeedback> }

    const settings = {
        arrows: false,
        // centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: desktop ? 2 : 1,
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
                                    <article key={fdb._id} dir='rtl'>
                                        <div className='feedbacks__main--feedback'>
                                            <h3>{fdb.customerName},
                                                <br /> "{fdb.webSiteName}"</h3>
                                            <img src={Stars} alt="חמש כוכבים" />
                                            <p>"{fdb.customerFeedback}"</p>
                                        </div>
                                    </article>
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
    try {
        const { data: { continueWork, feedbacks } } = await axios.get(`${API_ENDPOINT}/feedbacks/get-feedbacks`)
        if (continueWork) return feedbacks
    } catch (error) {
        console.log(error)
    }
}