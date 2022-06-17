import logo from './logo.svg';
import './App.css';
import zeldaGames from "./data/zelda.json"
import {GameCard} from "./components/GameCard/"

function App() {
  console.log(zeldaGames)
  return (
    <div className="App">
     <header>
        <h1>Zelda timeline </h1>
     </header>
     <main>
       <ul>
       {zeldaGames.map((game, index) => {
         return (
           <li key={index} ><GameCard game={game} /></li>
         )
       })}
       </ul>
     </main>
     <footer>
        <p>Hack a Boss 2022@</p>
     </footer>
    </div>
  );
}
//en el main estamos haciendo un .map del array zeldaGames y 
//llamamos al componente GameCard en el return pasándole cada elemento
//del array zeldaGames. Es como si estuviera recorriendo el array con
//un bucle y diciéndole que en cada iteración escribira el componente
//gamecard con los elementos de esa iteración.

export default App;
