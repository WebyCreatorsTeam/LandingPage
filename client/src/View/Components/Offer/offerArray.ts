import website from '../../../images/services/web-site.png'
import web from '../../../images/services/web.png'
import layout from '../../../images/services/layout.png'
import idea from '../../../images/services/idea.png'
import code from '../../../images/services/code.png'

export interface IServices {
    title: string
    titleEn:string
    icon: string
    text:string
}

export const servicesArr: Array<IServices> = [
    { title: "עמוד נחיתה", titleEn: "Landing Page", icon: website, text: "עמוד אינטרנט שמיועד למשוך משתמשים לפעולה מסוימת, כגון רכישת מוצר, מילוי טופס וכד'." },
    { title: "אתר תדמית", titleEn: "Corporate Website", icon: web, text: "אתר אינטרנט שמטרתו להציג ולהדגיש את הערך המוסף של עסק מבלי להתמקד במכירות ישירות" },
    { title: "חנות וירטאלית", titleEn: "E-commerce", icon: layout, text: "פלטפורמה באינטרנט שבאמצעותה ניתן לרכוש מוצרים או לקבל שירותים בדרך דיגיטלית, בדומה לחנות פיזית." },
    { title: "עיצוב אתר UX/UI", titleEn: "UX/UI Website Design", icon: idea, text: "תכנון הממשק והחוויה של המשתמש באתר, תוך דגש על נוחות השימוש, נגישות ואסתטיקה. מבטיח שהמבקרים באתר ימצאו את המידע שהם מחפשים בקלות." },
    { title: "כרטיס ביקור דיגיטלי", titleEn: "Digital Business Card", icon: code, text: "גרסה מקוונת של כרטיס הביקור המסורתי, המכיל מידע חשוב כמו שם, תפקיד, פרטי קשר וכד'.  ניתן לשתף אותו בקלות באמצעות מייל, הודעות או רשתות חברתיות." },
]