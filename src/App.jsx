import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ClickableBanner from './components/ClickableBanner';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/footer';

function App() {
  return (
    <div className="App" id='app'>
      <Header />
      <div className="main-content">
        <Slider/>
        <ClickableBanner/>
        <WhatsAppButton />
        <Footer/>
      </div>
    </div>
  );
}

export default App;