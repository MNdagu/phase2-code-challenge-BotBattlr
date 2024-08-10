import React from "react";

const Botcard = ({ bot, dischargeBot, addArmyBot, removeBotFromArmy, showDischarge, enlist }) => {
  return (
    <>
      <div className="card">
        <img src={bot.avatar_url} alt="bot" />
        <div>
          <h3>Name: {bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Created at: {bot.created_at}</p>
          <p>Updated at: {bot.updated_at}</p>

          {enlist ? (
            <button onClick={() => addArmyBot(bot)}>Enlist to army</button>
          ) : (
            <button onClick={() => removeBotFromArmy(bot)}>Remove</button>
          )}

          {showDischarge && (
            <button
              onClick={() => dischargeBot(bot)}
              style={{ "background-color": "red" }}
            >
              X
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Botcard;
