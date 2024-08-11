import React from "react";
import { Link } from "react-router-dom";

const Botcard = ({
  bot,
  dischargeBot,
  addArmyBot,
  removeBotFromArmy,
  enlist,
}) => {
  return (
    <>
      <div className="card">
        <img src={bot.avatar_url} alt="bot" />
        <div>
          <div>
            <h3>Name: {bot.name}</h3>
            <Link to={`/botspecs/${bot.id}`}>View specs</Link>
          </div>

          {enlist ? (
            <button onClick={() => addArmyBot(bot)}>Enlist to army</button>
          ) : (
            <button onClick={() => removeBotFromArmy(bot)}>Remove</button>
          )}

          <button
            onClick={() => dischargeBot(bot)}
            style={{ backgroundColor: "red" }}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Botcard;
