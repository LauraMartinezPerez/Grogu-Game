
const Dice = (props) => {

  const handleClick = () => {
        props.onRollDice();

    }

    return (
        <button className="dice" onClick={handleClick}>
        Lanzar Dado 🎲
      </button>
    )
};
export default Dice;
