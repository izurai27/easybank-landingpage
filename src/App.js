import Header from './components/Header';
import './reset.css';
import GlobalCSS from './global.css'
import Hero from './components/hero';
import Reason from './components/reason';
import Article from './components/article';



function App() {
  return (
  
    <div className="App">
      <GlobalCSS/>
      <Header/>
      <Hero/>
      <Reason/>
      <Article/>
    </div>
  );
}

export default App;
