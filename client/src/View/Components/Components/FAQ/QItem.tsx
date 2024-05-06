import React, { FC, useEffect, useRef, useState } from 'react'
import { IFAQ } from './FAQData';
import AddIcon from '@mui/icons-material/Add';
import { pink } from '@mui/material/colors';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface IQItem {
    faq: IFAQ
}
const QItem: FC<IQItem> = ({ faq }) => {
    const contentRef = useRef<any>(null);
    const [active, setActive] = useState(false);
    const toggleAccordion = () => {
        setActive(!active);
    };

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);
    return (
        <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
        >
            <div>
                <div className="question-align">
                    <PlayArrowIcon sx={{ color: "#D447FD" }}
                        className={active ? `question-icon rotate` : `question-icon`}
                    />
                    <h3 className="question-style">
                        {faq.quest}
                    </h3>
                </div>
                <div
                    ref={contentRef}
                    className={active ? `answer answer-divider` : `answer`}
                    dir='rtl'
                >
                    <p>{faq.ans}</p>
                </div>
            </div>
        </button>
    )
}

export default QItem