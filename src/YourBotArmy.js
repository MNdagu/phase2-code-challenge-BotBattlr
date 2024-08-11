import React from 'react';
import Botcard from "./BotCard";

const YourBotArmy = ({ armyBots, removeBotFromArmy, dischargeBot}) => {
  return (
    <>
      <h1>Your Bot Army</h1>
      {armyBots.length > 0 ? <div className="row">
        {armyBots.map((bot) => (
          <div className="column" key={bot.id}>
            <Botcard 
            bot={bot} 
            removeBotFromArmy={removeBotFromArmy} 
            dischargeBot={dischargeBot} 
            enlist = {false} />
          </div>
        ))}
      </div> : <h2>Oops! You are armyless!</h2>}
      
    </>
  );
};

export default YourBotArmy;
