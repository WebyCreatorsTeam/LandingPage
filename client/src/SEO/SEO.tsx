import { FC } from 'react'
import { Helmet } from 'react-helmet-async';

export interface ISEO {
    title?: string, 
    image?: string,
    imageAlt?: string
    url?: string
}
const SEO: FC<ISEO> = ({ title, image,imageAlt, url }) => {
    return (
        <Helmet>
            <title>{title ? `${title}` : "Weby"}</title>
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image? image : "https://weby.team/logo_white_bkgr.png"} />
            <meta property="og:image:alt" content={imageAlt ? imageAlt : "וובי"} />
            <meta property="og:url" content={url? url: "https://weby.team"} />
            <meta property="og:title" content={title} />
        </Helmet>
    )
}

export default SEO