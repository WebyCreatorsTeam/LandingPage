import { Element } from 'react-scroll';
import { FAQquestion } from './FAQData';
import QItem from './QItem';

const FAQ = () => {
    // const { state } = useLocation();
    // const { targetId } = state || {};

    // useEffect(() => {
    //     const el = document.getElementById(targetId);
    //     if (el) {
    //         el.scrollIntoView({ block: "start" });
    //     }
    // }, [targetId]);

    return (
        <Element name="faq" id="faq">
            <section className='elementWidth faq'>
                <div className='faq__info'>
                    <h2>שאלות נפוצות</h2>
                    <div className='faq__quest'>
                        {FAQquestion.map((q, idx) => (
                            <QItem key={idx} faq={q} />
                        ))}
                    </div>
                </div>
            </section>
        </Element >
    )
}

export default FAQ