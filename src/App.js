import "./App.css";
import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBots(data);
      });
  }, []);

  const addArmyBot = (bot) => {
    if(!armyBots.find((b) => b.id === bot.id)){
      setArmyBots([...armyBots, bot])
    };
  };

  const removeBotFromArmy =(bot) => {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id))
  };


  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method : "DELETE"
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      removeBotFromArmy(bot)
    });
  };


 
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
      
      <Route
      path="/"
      element={<BotCollection bots={bots} addArmyBot={addArmyBot} dischargeBot={dischargeBot}/>}
      />

      <Route
      path="/yourbotarmy"
      element={<YourBotArmy armyBots={armyBots} removeBotFromArmy={removeBotFromArmy}/>}
      />
      
      
      </Routes>
    
    </div>
  );
}

export default App;


// {
//   "id": 128,
//   "name": "qT-53",
//   "health": 72,
//   "damage": 80,
//   "armor": 29,
//   "bot_class": "Assault",
//   "catchphrase": "10011000110110001111011111110110110010",
//   "avatar_url": "https://robohash.org/quidoloresit.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.367Z",
//   "updated_at": "2018-10-02T19:55:11.367Z"
// },
// {
//   "id": 129,
//   "name": "E-88",
//   "health": 95,
//   "damage": 37,
//   "armor": 50,
//   "bot_class": "Medic",
//   "catchphrase": "0110011010100100010110100011000001110001001111",
//   "avatar_url": "https://robohash.org/beataequisaut.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.387Z",
//   "updated_at": "2018-10-02T19:55:11.387Z"
// },
// {
//   "id": 130,
//   "name": "Qz-38",
//   "health": 63,
//   "damage": 99,
//   "armor": 23,
//   "bot_class": "Assault",
//   "catchphrase": "01111111011110101100110110111000101111010",
//   "avatar_url": "https://robohash.org/repellendusasperioresdolor.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.439Z",
//   "updated_at": "2018-10-02T19:55:11.439Z"
// },
// {
//   "id": 131,
//   "name": "Q_n-34",
//   "health": 92,
//   "damage": 40,
//   "armor": 44,
//   "bot_class": "Witch",
//   "catchphrase": "0111110010100110101111100011001001",
//   "avatar_url": "https://robohash.org/quodremnihil.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.467Z",
//   "updated_at": "2018-10-02T19:55:11.467Z"
// },
// {
//   "id": 132,
//   "name": "Q-27",
//   "health": 44,
//   "damage": 24,
//   "armor": 93,
//   "bot_class": "Defender",
//   "catchphrase": "00111100011001000010010011000100000001001",
//   "avatar_url": "https://robohash.org/isteoptiodolorem.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.481Z",
//   "updated_at": "2018-10-02T19:55:11.481Z"
// },
// {
//   "id": 133,
//   "name": "ed-84",
//   "health": 54,
//   "damage": 22,
//   "armor": 93,
//   "bot_class": "Defender",
//   "catchphrase": "01111001010100000000111111110110100",
//   "avatar_url": "https://robohash.org/vitaeutporro.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.501Z",
//   "updated_at": "2018-10-02T19:55:11.501Z"
// },
// {
//   "id": 134,
//   "name": "xG-91",
//   "health": 40,
//   "damage": 33,
//   "armor": 81,
//   "bot_class": "Defender",
//   "catchphrase": "11101000001100011110000010000111101",
//   "avatar_url": "https://robohash.org/oditdoloresullam.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.528Z",
//   "updated_at": "2018-10-02T19:55:11.528Z"
// },
// {
//   "id": 135,
//   "name": "yLH-96",
//   "health": 89,
//   "damage": 40,
//   "armor": 66,
//   "bot_class": "Captain",
//   "catchphrase": "101100000111010111111101010111101101100101101111",
//   "avatar_url": "https://robohash.org/doloretqui.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.544Z",
//   "updated_at": "2018-10-02T19:55:11.544Z"
// },
// {
//   "id": 136,
//   "name": "U-01",
//   "health": 67,
//   "damage": 97,
//   "armor": 33,
//   "bot_class": "Assault",
//   "catchphrase": "111010011011101000101011100110000",
//   "avatar_url": "https://robohash.org/dolorumnumquamratione.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.573Z",
//   "updated_at": "2018-10-02T19:55:11.573Z"
// },
// {
//   "id": 137,
//   "name": "D-04",
//   "health": 86,
//   "damage": 27,
//   "armor": 55,
//   "bot_class": "Medic",
//   "catchphrase": "01000001001000001101011100100001100110100010",
//   "avatar_url": "https://robohash.org/sitvoluptatemipsa.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.595Z",
//   "updated_at": "2018-10-02T19:55:11.595Z"
// },
// {
//   "id": 138,
//   "name": "z-43",
//   "health": 54,
//   "damage": 98,
//   "armor": 20,
//   "bot_class": "Assault",
//   "catchphrase": "1000001010000010100010110101100001111001110",
//   "avatar_url": "https://robohash.org/essesaepeeaque.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.615Z",
//   "updated_at": "2018-10-02T19:55:11.615Z"
// },
// {
//   "id": 139,
//   "name": "T-30",
//   "health": 91,
//   "damage": 20,
//   "armor": 56,
//   "bot_class": "Support",
//   "catchphrase": "0011111011110111010101100111111011110",
//   "avatar_url": "https://robohash.org/quinatuset.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.639Z",
//   "updated_at": "2018-10-02T19:55:11.639Z"
// },
// {
//   "id": 140,
//   "name": "O-89",
//   "health": 86,
//   "damage": 32,
//   "armor": 57,
//   "bot_class": "Medic",
//   "catchphrase": "10100010100100010001011010001100101101",
//   "avatar_url": "https://robohash.org/quivelitdolores.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.650Z",
//   "updated_at": "2018-10-02T19:55:11.650Z"
// },
// {
//   "id": 141,
//   "name": "ak-68",
//   "health": 74,
//   "damage": 39,
//   "armor": 94,
//   "bot_class": "Defender",
//   "catchphrase": "10101000001010101110000010100010010101100111101",
//   "avatar_url": "https://robohash.org/quascumqueaut.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.668Z",
//   "updated_at": "2018-10-02T19:55:11.668Z"
// },
// {
//   "id": 142,
//   "name": "s-88",
//   "health": 91,
//   "damage": 30,
//   "armor": 48,
//   "bot_class": "Captain",
//   "catchphrase": "1011000100100010001011101110000",
//   "avatar_url": "https://robohash.org/adrecusandaevoluptatem.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.695Z",
//   "updated_at": "2018-10-02T19:55:11.695Z"
// },
// {
//   "id": 143,
//   "name": "Un-19",
//   "health": 80,
//   "damage": 22,
//   "armor": 51,
//   "bot_class": "Medic",
//   "catchphrase": "101100011111101001101011111101110100",
//   "avatar_url": "https://robohash.org/facerenequevoluptas.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.718Z",
//   "updated_at": "2018-10-02T19:55:11.718Z"
// },
// {
//   "id": 144,
//   "name": "ziP-34",
//   "health": 87,
//   "damage": 23,
//   "armor": 80,
//   "bot_class": "Support",
//   "catchphrase": "110000000100101110010011001000",
//   "avatar_url": "https://robohash.org/quisuntest.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.737Z",
//   "updated_at": "2018-10-02T19:55:11.737Z"
// },
// {
//   "id": 145,
//   "name": "v[U-90",
//   "health": 82,
//   "damage": 35,
//   "armor": 69,
//   "bot_class": "Support",
//   "catchphrase": "0010100000000000011000110010001111001010111001100",
//   "avatar_url": "https://robohash.org/laborumteneturquos.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.745Z",
//   "updated_at": "2018-10-02T19:55:11.745Z"
// },
// {
//   "id": 146,
//   "name": "ERJ-02",
//   "health": 64,
//   "damage": 96,
//   "armor": 21,
//   "bot_class": "Assault",
//   "catchphrase": "0001111111101111001010110111010011",
//   "avatar_url": "https://robohash.org/quosolutaprovident.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.756Z",
//   "updated_at": "2018-10-02T19:55:11.756Z"
// },
// {
//   "id": 147,
//   "name": "o-26",
//   "health": 88,
//   "damage": 20,
//   "armor": 53,
//   "bot_class": "Captain",
//   "catchphrase": "11001001101000100000101000001110010010011000111001",
//   "avatar_url": "https://robohash.org/eosrerumin.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.767Z",
//   "updated_at": "2018-10-02T19:55:11.767Z"
// },
// {
//   "id": 148,
//   "name": "xVP-90",
//   "health": 79,
//   "damage": 36,
//   "armor": 97,
//   "bot_class": "Witch",
//   "catchphrase": "10111001100010001100111011111110101010110",
//   "avatar_url": "https://robohash.org/maioresofficiisrepellat.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.781Z",
//   "updated_at": "2018-10-02T19:55:11.781Z"
// },
// {
//   "id": 149,
//   "name": "I-18",
//   "health": 98,
//   "damage": 33,
//   "armor": 51,
//   "bot_class": "Support",
//   "catchphrase": "0011010000110100010110011001001010101000100001101",
//   "avatar_url": "https://robohash.org/sedofficiadeserunt.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.795Z",
//   "updated_at": "2018-10-02T19:55:11.795Z"
// },
// {
//   "id": 150,
//   "name": "St-74",
//   "health": 89,
//   "damage": 29,
//   "armor": 44,
//   "bot_class": "Support",
//   "catchphrase": "011000011111000111001100101111110000",
//   "avatar_url": "https://robohash.org/necessitatibusquisunt.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.807Z",
//   "updated_at": "2018-10-02T19:55:11.807Z"
// },
// {
//   "id": 151,
//   "name": "Fd-25",
//   "health": 53,
//   "damage": 27,
//   "armor": 89,
//   "bot_class": "Defender",
//   "catchphrase": "01100010001101100101101011011011100101100110111",
//   "avatar_url": "https://robohash.org/repellatdistinctioitaque.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.820Z",
//   "updated_at": "2018-10-02T19:55:11.820Z"
// },
// {
//   "id": 152,
//   "name": "Mx-73",
//   "health": 60,
//   "damage": 24,
//   "armor": 97,
//   "bot_class": "Defender",
//   "catchphrase": "01000111011001110101110100000111110111",
//   "avatar_url": "https://robohash.org/autnesciunteos.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.840Z",
//   "updated_at": "2018-10-02T19:55:11.840Z"
// },
// {
//   "id": 153,
//   "name": "B-94",
//   "health": 82,
//   "damage": 33,
//   "armor": 45,
//   "bot_class": "Medic",
//   "catchphrase": "11001011011101010110101100111100010110001010001000",
//   "avatar_url": "https://robohash.org/maximedelenitiveritatis.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.862Z",
//   "updated_at": "2018-10-02T19:55:11.862Z"
// },
// {
//   "id": 154,
//   "name": "Jpf-48",
//   "health": 63,
//   "damage": 37,
//   "armor": 86,
//   "bot_class": "Defender",
//   "catchphrase": "11001011101101110000110000110110000001",
//   "avatar_url": "https://robohash.org/aliquidvoluptatemperspiciatis.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.881Z",
//   "updated_at": "2018-10-02T19:55:11.881Z"
// },
// {
//   "id": 155,
//   "name": "E-26",
//   "health": 95,
//   "damage": 30,
//   "armor": 70,
//   "bot_class": "Support",
//   "catchphrase": "101110100000101000101110110000001101011101001001",
//   "avatar_url": "https://robohash.org/temporibusavel.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.903Z",
//   "updated_at": "2018-10-02T19:55:11.903Z"
// },
// {
//   "id": 156,
//   "name": "mzl-89",
//   "health": 41,
//   "damage": 25,
//   "armor": 95,
//   "bot_class": "Defender",
//   "catchphrase": "0000110100110001000101011011110110000100101110",
//   "avatar_url": "https://robohash.org/ututquasi.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.918Z",
//   "updated_at": "2018-10-02T19:55:11.918Z"
// },
// {
//   "id": 157,
//   "name": "_\\-20",
//   "health": 78,
//   "damage": 85,
//   "armor": 38,
//   "bot_class": "Assault",
//   "catchphrase": "0011010110001111110000000000011011111010011101101",
//   "avatar_url": "https://robohash.org/omnisidnumquam.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.931Z",
//   "updated_at": "2018-10-02T19:55:11.931Z"
// },
// {
//   "id": 158,
//   "name": "tkB-34",
//   "health": 92,
//   "damage": 36,
//   "armor": 59,
//   "bot_class": "Captain",
//   "catchphrase": "0000100000010100100101001000000000",
//   "avatar_url": "https://robohash.org/fugasuntiure.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.943Z",
//   "updated_at": "2018-10-02T19:55:11.943Z"
// },
// {
//   "id": 159,
//   "name": "Dq-39",
//   "health": 60,
//   "damage": 89,
//   "armor": 39,
//   "bot_class": "Assault",
//   "catchphrase": "111101111111011011111111001001100010011010",
//   "avatar_url": "https://robohash.org/voluptatemquasest.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.955Z",
//   "updated_at": "2018-10-02T19:55:11.955Z"
// },
// {
//   "id": 160,
//   "name": "VwZ-65",
//   "health": 73,
//   "damage": 84,
//   "armor": 35,
//   "bot_class": "Assault",
//   "catchphrase": "10101001000101001111010001111000",
//   "avatar_url": "https://robohash.org/eumdelenitivoluptas.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.965Z",
//   "updated_at": "2018-10-02T19:55:11.965Z"
// },
// {
//   "id": 161,
//   "name": "X-77",
//   "health": 76,
//   "damage": 94,
//   "armor": 40,
//   "bot_class": "Assault",
//   "catchphrase": "1011110110000001111100010101001101111110",
//   "avatar_url": "https://robohash.org/adeseruntnatus.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.975Z",
//   "updated_at": "2018-10-02T19:55:11.975Z"
// },
// {
//   "id": 162,
//   "name": "iSh-78",
//   "health": 46,
//   "damage": 27,
//   "armor": 92,
//   "bot_class": "Defender",
//   "catchphrase": "011101110111001100001010011100111101100",
//   "avatar_url": "https://robohash.org/dolormolestiascorrupti.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.982Z",
//   "updated_at": "2018-10-02T19:55:11.982Z"
// },
// {
//   "id": 163,
//   "name": "Y-81",
//   "health": 87,
//   "damage": 29,
//   "armor": 50,
//   "bot_class": "Medic",
//   "catchphrase": "110110000001000110110100100101011001100111",
//   "avatar_url": "https://robohash.org/etipsumsed.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.989Z",
//   "updated_at": "2018-10-02T19:55:11.989Z"
// },
// {
//   "id": 164,
//   "name": "Gz-50",
//   "health": 93,
//   "damage": 33,
//   "armor": 42,
//   "bot_class": "Support",
//   "catchphrase": "001100000010111000011110101001110000",
//   "avatar_url": "https://robohash.org/ametsitqui.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:11.995Z",
//   "updated_at": "2018-10-02T19:55:11.995Z"
// },
// {
//   "id": 165,
//   "name": "ZSt-34",
//   "health": 81,
//   "damage": 38,
//   "armor": 64,
//   "bot_class": "Support",
//   "catchphrase": "1100111000111001100000100110011",
//   "avatar_url": "https://robohash.org/exquisat.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.001Z",
//   "updated_at": "2018-10-02T19:55:12.001Z"
// },
// {
//   "id": 166,
//   "name": "K`-65",
//   "health": 90,
//   "damage": 36,
//   "armor": 50,
//   "bot_class": "Captain",
//   "catchphrase": "1101001111111101010101110001001",
//   "avatar_url": "https://robohash.org/seddoloremest.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.006Z",
//   "updated_at": "2018-10-02T19:55:12.006Z"
// },
// {
//   "id": 167,
//   "name": "S-96",
//   "health": 84,
//   "damage": 29,
//   "armor": 77,
//   "bot_class": "Support",
//   "catchphrase": "0101001000001101000110010001011010000001100",
//   "avatar_url": "https://robohash.org/aperiamautemconsectetur.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.017Z",
//   "updated_at": "2018-10-02T19:55:12.017Z"
// },
// {
//   "id": 168,
//   "name": "Ar-02",
//   "health": 76,
//   "damage": 33,
//   "armor": 85,
//   "bot_class": "Defender",
//   "catchphrase": "1010010110100101010101101010110110001101111111110",
//   "avatar_url": "https://robohash.org/nobisdoloremad.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.024Z",
//   "updated_at": "2018-10-02T19:55:12.024Z"
// },
// {
//   "id": 169,
//   "name": "h-71",
//   "health": 89,
//   "damage": 40,
//   "armor": 41,
//   "bot_class": "Support",
//   "catchphrase": "0100101110100101011110000110111101110110",
//   "avatar_url": "https://robohash.org/quibusdamveritatisquaerat.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.043Z",
//   "updated_at": "2018-10-02T19:55:12.043Z"
// },
// {
//   "id": 170,
//   "name": "Qv-45",
//   "health": 41,
//   "damage": 38,
//   "armor": 95,
//   "bot_class": "Medic",
//   "catchphrase": "010001001110010010111110101101001110100110000",
//   "avatar_url": "https://robohash.org/inearumrerum.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.072Z",
//   "updated_at": "2018-10-02T19:55:12.072Z"
// },
// {
//   "id": 171,
//   "name": "`ux-06",
//   "health": 49,
//   "damage": 100,
//   "armor": 35,
//   "bot_class": "Assault",
//   "catchphrase": "0010011110010110000100111001100111011001",
//   "avatar_url": "https://robohash.org/inventoreisteut.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.090Z",
//   "updated_at": "2018-10-02T19:55:12.090Z"
// },
// {
//   "id": 172,
//   "name": "^zW-05",
//   "health": 43,
//   "damage": 99,
//   "armor": 37,
//   "bot_class": "Assault",
//   "catchphrase": "10011100101000000011001100101100011011011",
//   "avatar_url": "https://robohash.org/velitfacerequo.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.107Z",
//   "updated_at": "2018-10-02T19:55:12.107Z"
// },
// {
//   "id": 173,
//   "name": "o-93",
//   "health": 82,
//   "damage": 22,
//   "armor": 78,
//   "bot_class": "Support",
//   "catchphrase": "00100101111111101000101110011101110",
//   "avatar_url": "https://robohash.org/delenitietqui.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.127Z",
//   "updated_at": "2018-10-02T19:55:12.127Z"
// },
// {
//   "id": 174,
//   "name": "Ayc-42",
//   "health": 89,
//   "damage": 27,
//   "armor": 66,
//   "bot_class": "Support",
//   "catchphrase": "00011011100110100111110100101000011",
//   "avatar_url": "https://robohash.org/exeaut.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.139Z",
//   "updated_at": "2018-10-02T19:55:12.139Z"
// },
// {
//   "id": 175,
//   "name": "ef-95",
//   "health": 44,
//   "damage": 38,
//   "armor": 85,
//   "bot_class": "Defender",
//   "catchphrase": "001111111101111100100100100010010001010001111",
//   "avatar_url": "https://robohash.org/sedincidunteos.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.149Z",
//   "updated_at": "2018-10-02T19:55:12.149Z"
// },
// {
//   "id": 176,
//   "name": "tL-53",
//   "health": 65,
//   "damage": 100,
//   "armor": 25,
//   "bot_class": "Assault",
//   "catchphrase": "110001010000010100100110001001010010011",
//   "avatar_url": "https://robohash.org/eosquasiblanditiis.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.162Z",
//   "updated_at": "2018-10-02T19:55:12.162Z"
// },
// {
//   "id": 177,
//   "name": "u-94",
//   "health": 47,
//   "damage": 26,
//   "armor": 92,
//   "bot_class": "Defender",
//   "catchphrase": "001010111011001001110010110110110",
//   "avatar_url": "https://robohash.org/quiaesserepudiandae.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.172Z",
//   "updated_at": "2018-10-02T19:55:12.172Z"
// },
// {
//   "id": 178,
//   "name": "Cc-34",
//   "health": 49,
//   "damage": 27,
//   "armor": 98,
//   "bot_class": "Defender",
//   "catchphrase": "0111000100001110011100101001001001",
//   "avatar_url": "https://robohash.org/quoassumendadolorem.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.190Z",
//   "updated_at": "2018-10-02T19:55:12.190Z"
// },
// {
//   "id": 179,
//   "name": "qX-29",
//   "health": 49,
//   "damage": 88,
//   "armor": 30,
//   "bot_class": "Assault",
//   "catchphrase": "000000001000011111101101011101101010111011000110",
//   "avatar_url": "https://robohash.org/quolaborumnisi.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.207Z",
//   "updated_at": "2018-10-02T19:55:12.207Z"
// },
// {
//   "id": 180,
//   "name": "\\-94",
//   "health": 75,
//   "damage": 40,
//   "armor": 99,
//   "bot_class": "Defender",
//   "catchphrase": "010001011110101110011011101001010100010010111110",
//   "avatar_url": "https://robohash.org/invelitmaiores.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.230Z",
//   "updated_at": "2018-10-02T19:55:12.230Z"
// },
// {
//   "id": 181,
//   "name": "J-87",
//   "health": 97,
//   "damage": 40,
//   "armor": 72,
//   "bot_class": "Support",
//   "catchphrase": "1111000010010001110101100101010",
//   "avatar_url": "https://robohash.org/architectocorruptiaccusantium.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.245Z",
//   "updated_at": "2018-10-02T19:55:12.245Z"
// },
// {
//   "id": 182,
//   "name": "p-44",
//   "health": 70,
//   "damage": 31,
//   "armor": 82,
//   "bot_class": "Defender",
//   "catchphrase": "111101011000001011001011001001101000",
//   "avatar_url": "https://robohash.org/vitaeporrovoluptas.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.271Z",
//   "updated_at": "2018-10-02T19:55:12.271Z"
// },
// {
//   "id": 183,
//   "name": "yDg-64",
//   "health": 58,
//   "damage": 37,
//   "armor": 87,
//   "bot_class": "Defender",
//   "catchphrase": "1101001101000111110101010010000100010011011010",
//   "avatar_url": "https://robohash.org/rationeducimusveritatis.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.295Z",
//   "updated_at": "2018-10-02T19:55:12.295Z"
// },
// {
//   "id": 184,
//   "name": "u-40",
//   "health": 41,
//   "damage": 27,
//   "armor": 99,
//   "bot_class": "Defender",
//   "catchphrase": "011010000100010111000000111011011010111111010",
//   "avatar_url": "https://robohash.org/consecteturinventoredolor.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.314Z",
//   "updated_at": "2018-10-02T19:55:12.314Z"
// },
// {
//   "id": 185,
//   "name": "hin-85",
//   "health": 63,
//   "damage": 80,
//   "armor": 32,
//   "bot_class": "Assault",
//   "catchphrase": "00000010101001101010001101011010010101111100",
//   "avatar_url": "https://robohash.org/culpavoluptatemdeleniti.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.339Z",
//   "updated_at": "2018-10-02T19:55:12.339Z"
// },
// {
//   "id": 186,
//   "name": "G-17",
//   "health": 50,
//   "damage": 20,
//   "armor": 98,
//   "bot_class": "Defender",
//   "catchphrase": "1001111001000111010111110010111101111",
//   "avatar_url": "https://robohash.org/isteaeos.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.348Z",
//   "updated_at": "2018-10-02T19:55:12.348Z"
// },
// {
//   "id": 187,
//   "name": "ef-27",
//   "health": 74,
//   "damage": 38,
//   "armor": 87,
//   "bot_class": "Defender",
//   "catchphrase": "1111011100100111110111100111010010100001",
//   "avatar_url": "https://robohash.org/ipsumsedrecusandae.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.366Z",
//   "updated_at": "2018-10-02T19:55:12.366Z"
// },
// {
//   "id": 188,
//   "name": "]W-40",
//   "health": 80,
//   "damage": 35,
//   "armor": 75,
//   "bot_class": "Captain",
//   "catchphrase": "001010010010111000011110101111000110111010",
//   "avatar_url": "https://robohash.org/doloribusetsint.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.378Z",
//   "updated_at": "2018-10-02T19:55:12.378Z"
// },
// {
//   "id": 189,
//   "name": "yXB-04",
//   "health": 48,
//   "damage": 26,
//   "armor": 100,
//   "bot_class": "Defender",
//   "catchphrase": "111110111100011000000000111011101",
//   "avatar_url": "https://robohash.org/quiomniset.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.397Z",
//   "updated_at": "2018-10-02T19:55:12.397Z"
// },
// {
//   "id": 190,
//   "name": "c-38",
//   "health": 93,
//   "damage": 35,
//   "armor": 44,
//   "bot_class": "Medic",
//   "catchphrase": "01000110010101110000101101100110000110000110011000",
//   "avatar_url": "https://robohash.org/nobissimiliquequae.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.407Z",
//   "updated_at": "2018-10-02T19:55:12.407Z"
// },
// {
//   "id": 191,
//   "name": "h-74",
//   "health": 53,
//   "damage": 23,
//   "armor": 85,
//   "bot_class": "Medic",
//   "catchphrase": "11001111001000101000111000110100",
//   "avatar_url": "https://robohash.org/cumomnisautem.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.417Z",
//   "updated_at": "2018-10-02T19:55:12.417Z"
// },
// {
//   "id": 192,
//   "name": "Dls-86",
//   "health": 49,
//   "damage": 86,
//   "armor": 29,
//   "bot_class": "Assault",
//   "catchphrase": "110100100001001011011010011100000010111100100",
//   "avatar_url": "https://robohash.org/nullaconsequatursuscipit.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.432Z",
//   "updated_at": "2018-10-02T19:55:12.432Z"
// },
// {
//   "id": 193,
//   "name": "M-28",
//   "health": 40,
//   "damage": 93,
//   "armor": 21,
//   "bot_class": "Assault",
//   "catchphrase": "00000101111111110101111000010101",
//   "avatar_url": "https://robohash.org/eumdoloredoloribus.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.447Z",
//   "updated_at": "2018-10-02T19:55:12.447Z"
// },
// {
//   "id": 194,
//   "name": "rw-63",
//   "health": 60,
//   "damage": 98,
//   "armor": 26,
//   "bot_class": "Assault",
//   "catchphrase": "11101101111011101001100000011100101110",
//   "avatar_url": "https://robohash.org/molestiaenihilautem.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.463Z",
//   "updated_at": "2018-10-02T19:55:12.463Z"
// },
// {
//   "id": 195,
//   "name": "^-52",
//   "health": 81,
//   "damage": 32,
//   "armor": 48,
//   "bot_class": "Medic",
//   "catchphrase": "0111111001000010010100010110010",
//   "avatar_url": "https://robohash.org/aliasquoest.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.475Z",
//   "updated_at": "2018-10-02T19:55:12.475Z"
// },
// {
//   "id": 196,
//   "name": "obm-92",
//   "health": 93,
//   "damage": 23,
//   "armor": 67,
//   "bot_class": "Support",
//   "catchphrase": "011011110001101100011000100111010100011000010",
//   "avatar_url": "https://robohash.org/nulladoloratque.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.487Z",
//   "updated_at": "2018-10-02T19:55:12.487Z"
// },
// {
//   "id": 197,
//   "name": "LvH-26",
//   "health": 84,
//   "damage": 26,
//   "armor": 55,
//   "bot_class": "Support",
//   "catchphrase": "11111100001011110000010011111100111100",
//   "avatar_url": "https://robohash.org/commodiidasperiores.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.503Z",
//   "updated_at": "2018-10-02T19:55:12.503Z"
// },
// {
//   "id": 198,
//   "name": "wr-00",
//   "health": 67,
//   "damage": 84,
//   "armor": 32,
//   "bot_class": "Assault",
//   "catchphrase": "111110001100001011101010110011111001000001",
//   "avatar_url": "https://robohash.org/dictasolutanatus.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.512Z",
//   "updated_at": "2018-10-02T19:55:12.512Z"
// },
// {
//   "id": 199,
//   "name": "z-06",
//   "health": 41,
//   "damage": 27,
//   "armor": 81,
//   "bot_class": "Defender",
//   "catchphrase": "0101101100101100001100110000101001111010111",
//   "avatar_url": "https://robohash.org/sedhicquo.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.525Z",
//   "updated_at": "2018-10-02T19:55:12.525Z"
// },
// {
//   "id": 200,
//   "name": "fb-83",
//   "health": 88,
//   "damage": 38,
//   "armor": 68,
//   "bot_class": "Captain",
//   "catchphrase": "0111100000101111011000110101110111110000",
//   "avatar_url": "https://robohash.org/teneturquaereiciendis.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:12.537Z",
//   "updated_at": "2018-10-02T19:55:12.537Z"
// }