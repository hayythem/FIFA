import PropTypes from "prop-types";
import "./style.css";

function Player(
{  score,
  place,
  flag,
  team,
  playerimg,
  name,
  pac,
  sho,
  pas,
  dri,
  def,
  phy}
) {
  return (
    <div id="player-card">
      <div id="player-card-head">
        <div id="intro">
          <h4>{score}</h4>
          <h6>{place}</h6>
          <img width="40px" src={flag} alt="TUNISIE" id="country" />
          <img width="35px" src={team} alt="arabi" id="team" />
        </div>
        <img id="player-img" width="250px" src={playerimg} alt="" />{" "}
      </div>
      <div id="plaer-card-body">
        <h2>{name}</h2>
        <p id="pac">{pac}</p>
        <p id="sho">{sho}</p>
        <p id="pas">{pas}</p>
        <p id="dri">{dri}</p>
        <p id="def">{def}</p>
        <p id="phy">{phy}</p>
      </div>
    </div>
  );
}
Player.propTypes = {
  score: PropTypes.string,
  place: PropTypes.string,
  flag: PropTypes.string,
  team: PropTypes.string,
  playerimg: PropTypes.string,
  name: PropTypes.string,
  pac: PropTypes.number,
  sho: PropTypes.number,
  pas: PropTypes.number,
  dri: PropTypes.number,
  def: PropTypes.number,
  phy: PropTypes.number,
};
export default Player;
