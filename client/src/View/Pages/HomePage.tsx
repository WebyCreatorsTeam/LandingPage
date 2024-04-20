import React from 'react'
import Header from '../Components/MainPage/Header/Header'
import About from '../Components/Components/About'
import Offer from '../Components/Components/Offer'
import HowWork from '../Components/Components/HowWork'
import UserForm from '../Components/Form/Form'
import Projects from '../Components/Components/Projects'
import Feedbacks from '../Components/Components/Feedbacks'
import FAQ from '../Components/Components/FAQ'

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                {/* <About /> */}
                {/* <Offer /> */}
                <HowWork />
                <Projects />
                {/* <Feedbacks /> */}
                {/* <FAQ /> */}
                <UserForm />
            </main>
        </>
    )
}

export default HomePage