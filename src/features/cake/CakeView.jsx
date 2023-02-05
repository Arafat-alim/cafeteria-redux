import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const dispatch = useDispatch();
  //! for fetching the cake from the state
  const cakes = useSelector((state) => state.cake.noOfCakes);
  return (
    <div>
      <h2>Welcome to Cake Counter </h2>
      <h3>Total Cakes Left - {cakes}</h3>
      <button onClick={() => dispatch(ordered())}>Cake Order</button>
      <button onClick={() => dispatch(restocked(20))}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
