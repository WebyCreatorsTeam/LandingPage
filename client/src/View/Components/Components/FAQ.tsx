import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

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
            <section
            // style={{ margin: "100vh  0" }}
            >
                <h2>שאלות נפוצות</h2>
            </section>
        </Element>
    )
}

export default FAQ