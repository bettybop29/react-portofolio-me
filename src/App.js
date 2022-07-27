import './App.css';

import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services'
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portofolio from './Components/Portofolio/Portofolio';
import Testimonials from './Components/Testemonials/Testimonials';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context'
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
      style={{
        background : darkMode? 'black' : '',
        color: darkMode? 'white' : ''
      }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portofolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
