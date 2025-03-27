//import { array } from "prop-types";
import Grogu from "./Grogu";

const Board = () => {
  return (
    <section className="board">
      <Grogu />
      {Array(7).fill().map(() => (
        <div className="cell"></div>
      ))}
      
    </section>
  );
};
export default Board;
