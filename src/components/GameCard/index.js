export const GameCard = ({game}) => {
    return (
        <article>
          <img src={game.image} alt={game.name}></img>
          <h2>{game.name} {game.released_date}</h2>
          <p>{game.description} </p>
        </article>
    )
}