import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [goodsCookies, setGoodsCookies] = useState(["🍪", "🍪", "🍪"]);
  const [goodsEggs, setGoodsEggs] = useState(["🥚", "🥚", "🥚"]);
  const [goodsFrog, setGoodsFrog] = useState(["🐸", "🐸", "🐸"]);
  const [diceValue, setDiceValue] = useState(null);
  const [gameStatus, setGameStatus] = useState("En curso");

const randomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};


const rollDice = () => {
  console.log("Esta Ok");
  const getRandomNumber = randomNumber(4);
  setDiceValue(getRandomNumber);

  if (getRandomNumber === 4) {
      setGroguPosition(groguPosition + 1);
      setGameStatus("¡¡¡Cuidado!!! Grogu avanza una casilla");
  } else if (getRandomNumber === 1) {
      setGoodsCookies(goodsCookies.slice(1));
      setGameStatus("Has ayudado a Mando a recoger una galleta");
  } else if (getRandomNumber === 2) {
    setGoodsEggs(goodsEggs.slice(1));
    setGameStatus("Has ayudado a Mando a recoger un huevo");
  } else {
    setGoodsFrog(goodsFrog.slice(1));
    setGameStatus("Has ayudado a Mando a recoger una rana");
  }
}


  return (
    <div className="page">
      <Header />
      <main className="main">
        <Board />
        <section>
          <Dice onRollDice={rollDice} />
         
          <div className="game-status">{gameStatus}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{goodsCookies}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{goodsEggs}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{goodsFrog}</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
