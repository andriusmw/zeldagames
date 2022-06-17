import {GameCard} from "../GameCard/"
import {List} from "../List"
import zeldaGames from "../../data/zelda.json"

export const Timeline = () => {
    return (
        <section>
        <List data={[zeldaGames]}
            render={(game, index) => {
              return(
                <li key={index}>
                  <GameCard game={game} />
                </li>
              );
            } }
         />
         </section>
    );
};