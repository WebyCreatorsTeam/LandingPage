import Footer from './View/Components/Footer/Footer';
import UserForm from './View/Components/Form/Form';
import Header from './View/Components/Header/Header';
import HowWorks from './View/Components/HowWorks/HowWorks';
import Offer from './View/Components/Offer/Offer';
import WhyUs from './View/Components/WhyUs/WhyUs';
import ContactInfo from './View/UI/ContactInfo/ContactInfo';
import './style/index.scss'
function App() {
  return (
    <>
      <Header />
      <ContactInfo/>
      <UserForm />
      <Offer/>
      <HowWorks/>
      <WhyUs/>
      <ContactInfo/>
     {/*<CallUs/>*/} 
      <UserForm />
      <Footer/>
    </>
  );
}

export default App;
