import logo from './logo.svg';
import './App.css';
import zeldaGames from "./data/zelda.json"
import {GameCard} from "./components/GameCard/"
import {List} from "./components/List"
import {Timeline} from "./components/TimeLine"

function App() {
  console.log(zeldaGames)
  return (
    <div className="App">
     <header>
        <h1>Zelda timeline </h1>
     </header>
     <main>
      <Timeline></Timeline>
     </main>
     <footer>
        <p>Hack a Boss 2022@</p>
     </footer>
    </div>
  );
}
//llamamos al componente list que hace los map.
//le pasamos el array en data y en render la estructura

export default App;
