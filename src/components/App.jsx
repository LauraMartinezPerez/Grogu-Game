import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Instructions from "./Instructions";

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

  useEffect(() => {
    if (groguPosition === 6) {
      setGameStatus("¡¡¡Has perdido, Grogu se ha comido el cargamento!!!");
    } else if (
      goodsCookies.length === 0 &&
      goodsEggs.length === 0 &&
      goodsFrog.length === 0
    ) {
      setGameStatus("¡¡¡Ganaste, Mando completa la misión!!!");
    }
    /*  if (goodsCookies.length === 0 && goodsEggs.length === 0 && goodsFrog.length === 0) {
    setGameStatus("¡¡¡Ganaste, Mando completa la misión!!!");

else if (goodsCookies.length === 0) {
    setGameStatus("Te has comido todas las galletas, glotona!!!")

  }  else if (goodsEggs.length === 0) {
    setGameStatus("Te has comido todss los huevos, glotona!!!")
  }
     else if (goodsFrog.length === 0) {
    setGameStatus("Te has comido todas las ranas, glotona!!!")
  }   */
  }, [groguPosition, goodsCookies, goodsEggs, goodsFrog]);

  const rollDice = () => {
    const getRandomNumber = randomNumber(4);
    setDiceValue(getRandomNumber);

    if (getRandomNumber === 4) {
      setGroguPosition(groguPosition + 1);
      setGameStatus("¡¡¡Cuidado, Grogu avanza una casilla!!!");
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
  };

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Board onGroguPosition={groguPosition} />
                <section className="diceSection">
                  <Dice className="dice" onRollDice={rollDice} />
                  <p>{diceValue}</p>
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
              </>
            }
          />
          <Route path="/Instructions" element={<Instructions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
