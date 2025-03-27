import { array } from "prop-types";
import Grogu from "./Grogu";

const Board = () => {
  return (
    <section className="board">
      <Grogu />
      <div className="cell"></div>
      {Array(7).fill().map}
    </section>
  );
};
export default Board;
