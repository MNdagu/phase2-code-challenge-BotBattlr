import React from 'react';
import Botcard from "./BotCard";

const YourBotArmy = ({ armyBots, removeBotFromArmy }) => {
//   console.log(armyBots);
  return (
    <>
      <h1>Your Bot Army</h1>
      <div className="row">
        {armyBots.map((bot) => (
          <div className="column" key={bot.id}>
            <Botcard 
            bot={bot} 
            removeBotFromArmy={removeBotFromArmy} 
            showDischarge={false} 
            enlist = {false} />
          </div>
        ))}
      </div>
    </>
  );
};

export default YourBotArmy;
