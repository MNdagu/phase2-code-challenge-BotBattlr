import React from "react";
import Botcard from "./BotCard";

const BotCollection = ({ bots, addArmyBot, dischargeBot }) => {
  return (
    <>
      <h1>Bot Collection</h1>
      <div className="row">
        {bots.map((bot) => (
          <div className="column" key={bot.id}>
            <Botcard 
            bot={bot} 
            key={bot.id} 
            addArmyBot={addArmyBot}  
            dischargeBot={dischargeBot} 
            enlist={true}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default BotCollection;
