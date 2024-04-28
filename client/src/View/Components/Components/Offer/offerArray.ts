import Landing from '../../../../images/offer/image 5.png'
import Corporate from '../../../../images/offer/image 6.png'
import Commerce from '../../../../images/offer/image 7.png'

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


/*
A visually stunning and user-friendly e-commerce website design, with a modern and clean layout that invites exploration. The large, bold headline captures attention and is accompanied by a selection of enticing products. The muted color palette seamlessly blends with the light background, creating a harmonious and cohesive visual experience. The overall design exudes sophistication, ensuring a pleasant shopping experience for visitors.
*/