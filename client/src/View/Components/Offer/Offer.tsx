import { FC } from 'react'
// import { offerArray } from './offerArray';
import Scroll from 'react-scroll';
import { servicesArr } from './offerArray';

const Offer: FC = () => {
    return (
        <section className='offer'>
            <section className='elementWidth services'>
                <h2>השירותים שלנו</h2>
                <section className='services__list'>
                    {servicesArr.map((service, index) => (
                        <div key={index}>
                            <img src={service.icon} alt={service.title} width={64} height={64} />
                            <h3>{service.title}</h3>
                            <h4>{service.titleEn}</h4>
                            <p>{service.text}</p>
                        </div>
                    ))}
                </section>
                <p className='contact-us-if-need-more'>*צריכים משהו נוסף?
                    <Scroll.Link
                        to="contact"
                        smooth={true}
                        offset={50}
                        duration={500}
                        style={{color: "purple", fontWeight: "bold"}}
                        >
                        {" "}דברו איתנו.
                    </Scroll.Link>
                </p>
                {/* <Link href="/how-it-works">איך זה עובד?</Link> */}
            </section>
        </section>
    )
}

export default Offer;