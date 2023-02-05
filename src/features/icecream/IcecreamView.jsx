import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IceCreamView = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const icecreams = useSelector((state) => state.icecream.noOfIceCreams);
  const handleValue = (e) => {
    setValue(parseInt(e.target.value));
  };
  return (
    <div>
      <h2>Welcome to Icecream Counter</h2>
      <h3>Icecream Left - {icecreams}</h3>
      <button onClick={() => dispatch(ordered())}>Icecream Order</button>
      <br />
      <input
        type="number"
        value={value}
        onChange={handleValue}
        placeholder="Restock Value"
      />
      <br />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Icecream
      </button>
    </div>
  );
};

export default IceCreamView;
