import Header from './components/Header';
import './reset.css';
import GlobalCSS from './global.css'
import Hero from './components/hero';
import Reason from './components/reason';



function App() {
  return (
  
    <div className="App">
      <GlobalCSS/>
      <Header/>
      <Hero/>
      <Reason/>
    </div>
  );
}

export default App;
