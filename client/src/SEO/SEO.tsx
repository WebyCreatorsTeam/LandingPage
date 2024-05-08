import { FC } from 'react'
import { Helmet } from 'react-helmet-async';

export interface ISEO {
    title?: string,
    description?: string
    keywords?: string
    image?: string,
    imageAlt?: string
    url?: string,
    article?: boolean
    articlePublish?: string
    articleAuthor?: string
}
const SEO: FC<ISEO> = ({
    title,
    description,
    keywords,
    image,
    imageAlt,
    url,
    article,
    articlePublish,
    articleAuthor
}) => {
    return (
        <Helmet>
            <title>{title ? `${title}` : "Weby"}</title>
            <meta name="keywords" content={keywords ? keywords : "פיתוח אתר, עיצוב אתר, בניית אתרים, אתר לעסק, פתרונות דיגיטליים, בית תוכנה"} />
            <meta name="description"
                content={description ? description : "שירותי פיתוח אתרים מתקדמים. מומחים בבניית אתרים מותאמים אישית עבור העסק, מספקים פתרונות דיגיטליים מקצה לקצה ברמה הגבוהה ביותר."} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image ? `https://weby.team/${image}` : "https://weby.team/logo_white_bkgr.png"} />
            <meta property="og:image:alt" content={imageAlt ? imageAlt : "לוגו של וובי"} />
            <meta property="og:url" content={url ? url : "https://weby.team"} />
            <meta property="og:title" content={title ? title : "Weby"} />
            <meta property="og:description" content={description ? description : "שירותי פיתוח אתרים מתקדמים. מומחים בבניית אתרים מותאמים אישית עבור העסק, מספקים פתרונות דיגיטליים מקצה לקצה ברמה הגבוהה ביותר."} />
            {article === true && (<meta property='article:published_time' content={articlePublish} />)}
            {article === true && (<meta property='article:author' content={articleAuthor} />)}
        </Helmet>
    )
}

export default SEO