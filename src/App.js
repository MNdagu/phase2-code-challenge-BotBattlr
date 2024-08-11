import "./App.css";
import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ViewSpecs from "./ViewSpecs";

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
      });
  }, []);

  const addArmyBot = (bot) => {
    if (!armyBots.find((b) => b.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
      alert(`${bot.name} added to your army`);
      navigate("/yourbotarmy");
    } else if (armyBots.find((b) => b.id === bot.id)) {
      alert(`${bot.name} is already in your army`);
    }
  };

  const removeBotFromArmy = (bot) => {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      removeBotFromArmy(bot);
    });
  };

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <BotCollection
              bots={bots}
              addArmyBot={addArmyBot}
              dischargeBot={dischargeBot}
            />
          }
        />

        <Route
          path="/yourbotarmy"
          element={
            <YourBotArmy
              armyBots={armyBots}
              removeBotFromArmy={removeBotFromArmy}
              dischargeBot={dischargeBot}
            />
          }
        />

        <Route
          path="/botspecs/:id"
          element={<ViewSpecs addArmyBot={addArmyBot} />}
        />
      </Routes>
    </div>
  );
}

export default App;
