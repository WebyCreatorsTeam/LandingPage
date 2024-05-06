import { FC } from 'react'
import Header from '../Components/Components/Header/Header'
import About from '../Components/Components/About'
import Offer from '../Components/Components/Offer/Offer'
import HowWork from '../Components/Components/HowWork'
import Projects from '../Components/Components/Projects/Projects'
import Feedbacks from '../Components/Components/Feedbacks'
import UserForm from '../Components/Components/UserForm'
import FAQ from '../Components/Components/FAQ/FAQ'

const HomePage: FC = () => {
    return (
        <>
            <Header />
            <main>
                <div className='top-elements-bkg'>
                    <About />
                    <Offer />
                    <HowWork />
                </div>
                <Projects />
                <div className='bottom-elements-bkg'>
                    <Feedbacks />
                    <FAQ />
                    <UserForm />
                </div>
            </main>
        </>
    )
}

export default HomePage