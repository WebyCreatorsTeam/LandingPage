import UserForm from './View/Components/Form/Form';
import Header from './View/Components/Header/Header';
import HowWorks from './View/Components/HowWorks/HowWorks';
import Offer from './View/Components/Offer/Offer';
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
    </>
  );
}

export default App;
