import Landing from '../../../../images/offer/image 5.webp'
import Corporate from '../../../../images/offer/image 6.webp'
import Commerce from '../../../../images/offer/image 7.webp'

export const offerArray: Array<IOffer> = [
    { img: Landing, siteTypeHe: "דף נחיתה", siteTypeEn: "Landing Page", siteDesc: "עמוד אינטרנט שמיועד למשוך משתמשים לפעולה מסוימת, כגון רכישת מוצר, מילוי טופס וכד'." },
    { img: Corporate, siteTypeHe: "אתר תדמית", siteTypeEn: "Corporate Website", siteDesc: "אתר אינטרנט שמטרתו להציג ולהדגיש את הערך המוסף של עסק מבלי להתמקד במכירות ישירות" },
    { img: Commerce, siteTypeHe: "חנות וירטואלית", siteTypeEn: "E-commerce", siteDesc: "פלטפורמה באינטרנט שבאמצעותה ניתן לרכוש מוצרים או לקבל שירותים בדרך דיגיטלית, בדומה לחנות פיזית." },
]

interface IOffer {
    img: string
    siteTypeHe: string
    siteTypeEn: string
    siteDesc: string
}