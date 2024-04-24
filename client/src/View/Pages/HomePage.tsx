import { FC } from 'react'
import Header from '../Components/Components/Header/Header'
import About from '../Components/Components/About'
import Offer from '../Components/Components/Offer'
import HowWork from '../Components/Components/HowWork'
import Projects from '../Components/Components/Projects'
import Feedbacks from '../Components/Components/Feedbacks'

import FAQ from '../Components/Components/FAQ'
import UserForm from '../Components/Components/UserForm'
// import UserForm from '../Components/Form/Form'

const HomePage: FC = () => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Offer />
                <HowWork />
                <Projects />
                <Feedbacks />
                <FAQ />
                {/* <UserForm /> */}
                <UserForm />
            </main>
        </>
    )
}

export default HomePage