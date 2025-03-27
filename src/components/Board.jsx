//import { array } from "prop-types";
import Grogu from "./Grogu";

const Board = () => {
  return (
    <section className="board">
      <Grogu />
      {Array(7).fill(<div className="cell"></div>).map}
    </section>
  );
};
console.log(Board());
export default Board;
