//import { array } from "prop-types";
import Grogu from "./Grogu";

const Board = ({ onGroguPosition }) => {
  return (
    <section className="board">
      {Array(7).fill().map((_, index) => {
          if (index === onGroguPosition) {
            return (
              <div key={index} className="cell">
                <Grogu />
              </div>
            );
          } else {
            return <div key={index} className="cell"></div>;
          }
        })}
    </section>
  );
};
export default Board;
