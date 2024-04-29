import { FC } from 'react'
import { offerArray } from './offerArray';
import Scroll from 'react-scroll';

const Offer: FC = () => {
    return (
        <section className='offer'>
            <div className='elementWidth offer__info'>
                <h2>מה אנחנו מציעים?</h2>
                <div className='offer__info--grid'>
                    {offerArray.map((ofr, idx) => (
                        <div className='offer__info--window'>
                            <img src={ofr.img} alt={`איור של ${ofr.siteTypeHe}`} loading="lazy" />
                            <h3 className='offer__info--window__header'>{ofr.siteTypeHe}</h3>
                            <h3 className='offer__info--window__header--en'>{ofr.siteTypeEn}</h3>
                            <p>{ofr.siteDesc}</p>
                        </div>
                    ))}
                </div>
                <p>*יש לכם משהו נוסף שאתם רוצים לפתח? תרגישו בנוח {" "}
                    <Scroll.Link to="contact"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        ליצור קשר
                    </Scroll.Link>
                    {" "} איתנו.</p>
            </div>
        </section>
    )
}

export default Offer;