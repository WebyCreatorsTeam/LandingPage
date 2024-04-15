import { FC } from 'react'
import HeaderImage from '../../../../images/header/header-image.png'

const Header: FC = () => {
    return (
        <header id="header">
            <p>יש לכם עסק? מיזם? סטארטפ?</p>
            <h1>בואו לבנות את האתר שלכם, שיקח אתכם צעד אחדקדימה</h1>
            {/*  <div>
                     <img className='header-container__img' src={HeaderImage} alt="אנשים עומדים" />
                 </div> */}
        </header>
    )
}

export default Header