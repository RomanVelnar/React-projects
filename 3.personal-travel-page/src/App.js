import logo from './logo.svg';
import './style.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import carddata from "../src/data"

function App() {
  const card = carddata.map(item => 
      <Main 
        key={item.id}
        item={item}
      />
    );
  return(
    <div>
      <Navbar />
      <section className='card--list'>
        {card}
      </section>
    </div>
  )
}

export default App;
