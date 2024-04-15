import UserForm from './View/Components/Form/Form';
import Header from './View/Components/MainPage/Header/Header';
import HowWorks from './View/Components/MainPage/HowWorks/HowWorks';
import Offer from './View/Components/MainPage/Offer/Offer';
import WhyUs from './View/Components/MainPage/WhyUs/WhyUs';
import ContactInfo from './View/UI/ContactInfo/ContactInfo';
import './style/index.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <ContactInfo />
        <UserForm />
        <WhyUs /> {/* chenged to about us */}
        <Offer />
        <HowWorks />
        <UserForm />
      </main>
    </>
  );
}

export default App;
