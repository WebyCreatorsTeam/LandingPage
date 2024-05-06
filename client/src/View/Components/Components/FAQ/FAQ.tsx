// import { FC, useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import { FAQquestion } from './FAQData';
import { useEffect, useRef, useState } from 'react';
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
    // const [active, setActive] = useState(false);
    // const contentRef = useRef<any>(null);
    // console.log(FAQquestion)

    // useEffect(() => {
    //     contentRef.current.style.maxHeight = active
    //         ? `${contentRef.current.scrollHeight}px`
    //         : "0px";
    // }, [contentRef, active]);

    // const toggleAccordion = () => {
    //     setActive(!active);
    // };

    return (
        <Element name="faq" id="faq">
            <section className='elementWidth faq'>
                <div className='faq__info'>
                    <h2>שאלות נפוצות</h2>

                    <div>

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