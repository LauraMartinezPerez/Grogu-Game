import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [goodsCookies, setGoodsCookies] = useState(["🍪", "🍪", "🍪"]);
  const [goodsEggs, setGoodsEggs] = useState(["🥚", "🥚", "🥚"]);
  const [goodsFrog, setGoodsFrog] = useState(["🐸", "🐸", "🐸"]);
  const [diceValue, setDiceValue] = useState(null);
  const [gameStatus, setGameStatus] = useState("En curso");

  function rollDice() {
    function getRandomNumber(max) {
      return Math.ceil(Math.random() * max);
    }
    const randomNumber = getRandomNumber(4);
    console.log(randomNumber);

    let attemps = 0;
  }

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Board />
        <section>
          <button className="dice" onClick={rollDice}>
            Lanzar Dado
          </button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
