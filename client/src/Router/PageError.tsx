import React, { FC } from 'react'
import { useNavigate, useNavigation, useRouteError } from 'react-router-dom';
import Logo from '../View/UI/Logo/Logo';

const PageError: FC = () => {
    const navigate = useNavigate();
    const navigation: any = useNavigation();
    const error: unknown = useRouteError()
    console.error(error);
    return (
        <div className='elementWidth errorFunc errorsPages'>
            <Logo />
            <h1>שגיאה</h1>
            {/* <p>נראה שהיית שגיאה</p> */}
            <p>
                {(error as Error)?.message ||
                    (error as { statusText?: string })?.statusText}
            </p>
            <button
                className='errorsPages__btnBack'
                onClick={() => {
                    if (navigation.location === "/") {
                        return navigate(0)
                    }
                    navigate("/", { replace: true })
                }}>
                {navigation.location === "/" ?
                    "רענן עמוד"
                    :
                    "חזור לעמוד ראשי"
                }
            </button>
        </div>
    )
}

export default PageError