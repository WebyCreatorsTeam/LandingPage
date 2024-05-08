import { FC } from 'react'
import Header from '../Components/Header/Header'
import About from '../Components/About'
import Offer from '../Components/Offer/Offer'
import HowWork from '../Components/HowWork'
import Projects from '../Components/Projects/Projects'
import Feedbacks from '../Components/Feedbacks'
import FAQ from '../Components/FAQ/FAQ'
import UserForm from '../Components/Form/UserForm'
import SEO from '../../SEO/SEO'

const HomePage: FC = () => {
    return (
        <>
            <SEO />
            <Header />
            <main>
                <div className='top-elements-bkg'>
                    <About />
                    <Offer />
                    <HowWork />ד
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