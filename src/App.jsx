import { useDispatch, useSelector } from "react-redux";
import { ADD, MINUS } from "./types";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch({ type: ADD })}>Add</button>
      {count}
      <button onClick={() => dispatch({ type: MINUS })}>Minus</button>
    </>
  );
};

export default App;
