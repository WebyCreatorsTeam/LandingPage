import { FC } from 'react'
import Header from '../Components/Components/Header/Header'
import About from '../Components/Components/About'
import Offer from '../Components/Components/Offer/Offer'
import HowWork from '../Components/Components/HowWork'
import Projects from '../Components/Components/Projects/Projects'
import Feedbacks from '../Components/Components/Feedbacks'
// import FAQ from '../Components/Components/FAQ'
import UserForm from '../Components/Components/UserForm'

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
                    <UserForm />
                </div>
                {/* 
                <FAQ />
                */}
            </main>
        </>
    )
}

export default HomePage