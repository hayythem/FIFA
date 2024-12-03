import Player from "../player/Player";
import data from "../../players";
function Players() {
  return (
    <div>
      {data.map((player, i) => (
        <Player key={i} {...player} />
      ))}
    </div>
  );
}

export default Players;
