import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewSpecs = ({ addArmyBot }) => {
  const [bot, setBot] = useState({});
  const params = useParams();
  const botId = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${botId}`)
      .then((r) => r.json())
      .then((data) => setBot(data))
      .catch((error) => console.error(error));
  }, [botId]);

  return (
    <>
    <h1>Bot specs</h1>
      <main className="specs">
        <h1>Name : {bot.name}</h1>
        <h4>Health: {bot.health}</h4>
        <h4>Damage: {bot.damage}</h4>
        <h4>Armor: {bot.armor}</h4>
        <h4>Class: {bot.bot_class}</h4>
        <h4>Created at: {bot.created_at}</h4>
        <h4>Updated at: {bot.updated_at}</h4>

        <button
          style={{ width: "10%", marginLeft: "700px" }}
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <button
          style={{ width: "10%", marginLeft: "700px" }}
          onClick={() => addArmyBot(bot)}
        >
          Enlist to army
        </button>
      </main>
    </>
  );
};

export default ViewSpecs;
