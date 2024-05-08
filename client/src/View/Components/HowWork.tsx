import { FC } from 'react'
import Meet from "../../images/howworks/new-how-work/meet.svg"
import Efiun from "../../images/howworks/new-how-work/efiun.svg"
import Bnia from "../../images/howworks/new-how-work/bnia.svg"
import Support from "../../images/howworks/new-how-work/support.svg"

interface IHowWorkList {
    img: string
    alt: string
    title: string
    text: string
    color: string
}

const howWorkList: Array<IHowWorkList> = [
    { img: Meet, alt: "אייקון שני אנשים מדברים", title: "פגישת התנעה", text: "ניפגש כדי להגדיר מטרות של האתר, נבדוק מה האילוצים הטכנולוגיים, נעשה תאום ציפיות", color: "#0B6541" },
    { img: Efiun, alt: "אייקון עיצוב אתר", title: "איפיון ועיצוב", text: "נדייק מי הלקוחות שלך, מי המתחרים, נבנה סקיצות ראשוניות נחליט על צבעים ופונטים של האתר", color: "#74500C" },
    { img: Bnia, alt: "אייקון אתר עם מפתח עבודה", title: "בניית האתר", text: "נתחיל בבניית האתר בהתחשב בעיצוב וטכנולוגיות, ונשאר כאן לתמיכה בהמשך", color: "#9A01DB" },
    { img: Support, alt: "אייקון דמות מדברת בטלפון", title: " תחזוקה של האתר", text: "נמשיך לתמוך בכם גם אחרי שהאתר יעלה לאוויר", color: "#BD1422" },
]
const HowWork: FC = () => {
    return (
        <section className='how-work'>
            <div className='elementWidth how-work__info'>
                <h2>
                    איך זה יעבוד?
                </h2>
                <h3>
                    נתחיל בבניית האתר בהתמקדות בדרישות והצרכים של בעל העסק, נספק לו תמיכה מקצועית וזמינה לאורך כל התהליך.
                </h3>
                <div className='how-work__info--more'>
                    {howWorkList.map((hwl, idx) => (
                        <div className='how-work__info--more__item' key={idx}>
                            <img src={hwl.img} alt={hwl.alt} width={160} height={160} loading="lazy" />
                            <h3 style={{ color: hwl.color }}>{idx + 1}. {hwl.title}</h3>
                            <p>{hwl.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowWork