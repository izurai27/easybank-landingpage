import Header from './components/Header';
import './reset.css';
import GlobalCSS from './global.css'
import Hero from './components/hero';



function App() {
  return (
  
    <div className="App">
      <GlobalCSS/>
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
