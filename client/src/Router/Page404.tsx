import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../View/UI/Logo/Logo';

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div className='elementWidth notFound errorsPages'>
            <Logo />
            <h1>404</h1>
            <p>
                נראה שהגעת לעמוד שלא קיים
            </p>
            <button
                className='errorsPages__btnBack'
                onClick={() => {
                    navigate("/", { replace: true })
                }}>
                חזור לעמוד ראשי
            </button>

        </div>
    )
}

export default Page404