import {Navbar} from './Components/Navbar';
import '@fontsource/inter';
import '@fontsource/space-grotesk';
import {Hero} from './Components/hero';
import {Working} from './Components/Working';
import Panel from './Components/Panel';
import AboutUs from './Components/AboutUs';
import Question from './Components/Question';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className='w-full h-screen bg-red-200'>
      <Navbar />
      <Hero />
      <Working />
      {/* <AboutUs /> */}
      <Question />
      <Panel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
