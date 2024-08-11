import { FC } from 'react'
// import AboutImage from '../../../images/whoAreWe/about.webp';
// import AboutImage from '../../images/whoAreWe/about.webp';
import AboutDesc from '../../images/header/header-img/hero-web.webp'
import AboutMob from '../../images/header/header-img/hero-mobile.webp'

// import HeaderImageDesc from '../../../images/header/header-img/hero-web.webp'
// import HeaderImageMob from '../../../images/header/header-img/hero-mobile.webp' 
//
// import WebyLogo from '../../../images/logo2_without_bkgr.svg';
import WebyLogo from '../../images/logo2_without_bkgr.svg';
import { useMediaQuery } from 'react-responsive';


const About: FC = () => {
    const desktop = useMediaQuery({ query: '(min-width: 768px)' })
    return (
        <section className='about' id="about">
            <h2>מי אנחנו?</h2>
            <div className='elementWidth about__info'>
                <p className='about__info--text'>
                    {/* <h3>ברוכים הבאים לאתר של WEBY!</h3> */}
                    <p>
                        אנחנו <span>Weby</span>, צוות מפתחים ומעצבים שמתמחה בבניית אתרים. כל אחד מאנשי הצוות שלנו מביא ניסיון וידע עשיר בתחומו. אנחנו עובדים בשיתוף פעולה עם הלקוח על מנת להעניק ללקוחותינו את השירות הטוב ביותר.
                    </p>
                    <p>
                        החזון שלנו הוא לפתח ולבנות אתרים מותאמים אישית עבור עסקים, שיביאו לידי ביטוי את הייחודיות והצרכים של כל לקוח. אנחנו מאמינים כי לכל עסק מגיע אתר המשקף את זהות שלו באופן האותנטי והמרשים ביותר, ומספק חוויית משתמש בלתי נשכחת.
                    </p>
                    <p>
                        ב-<span>Weby</span>,
                        ההתמקדות שלנו היא ביצירת חוויית משתמש מותאמות אישית. <br />
                        צוות הפיתוח והמעצבים שלנו עובדים בשיתוף פעולה רציף עם הלקוחות שלנו, מקשיבים לצרכים ולרעיונות שלהם, ומפתחים פתרונות מותאמים במיוחד עבורם. כל אתר שאנחנו יוצרים מעוצב בקפידה רבה כדי לשקף את המותג והחזון של הלקוח בצורה הייחודית ביותר. אנחנו מספקים ליווי ותמיכה רציף לאורך כל תהליך הפיתוח וגם לאחר מכן, כדי להבטיח שהאתר יפעל בצורה מושלמת בכל עת.
                    </p>
                    <p>
                        <span>
                            אנחנו מזמינים אתכם להצטרף אלינו וליהנות מאתר מותאם אישית לעסק שלכם!
                        </span>
                    </p>
                </p>
                {/* <div className='about__info--logo'>
                    <img src={WebyLogo} alt="וובי לוגו" loading="lazy" width={288} height={72} />
                </div> */}
                <div className='about__info--image'>
                    <img src={desktop ? AboutDesc : AboutMob} alt="קבוצה של אנשים שעובדת יחד" loading="lazy" width={desktop ? 720 : 360} height={desktop ? 370 : 185} />
                </div>
            </div>
        </section>
    )
}

export default About;