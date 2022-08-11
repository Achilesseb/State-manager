import React from "react";
import { useEffect } from "react";
import { store } from "../stateManager/eventBus";
import { useState } from "react";
import { setF1Drivers } from "../stateManager/actions";

const F1Drivers = () => {
  const [state, setState] = useState(store.getState());
  const callback = (newState) => setState(newState);
  useEffect(() => {
    store.dispatch("f1Drivers", state, setF1Drivers);
    return store.subscribe("f1Drivers", {
      id: "setF1Drivers",
      callback: callback,
    });
  }, []);
  return (
    <div className="driversName">
      DRIVER COMPONENT
      {state?.f1Drivers.map((driver) => (
        <span key={driver.permanentNumber}>{driver.givenName}</span>
      ))}
    </div>
  );
};
export default F1Drivers;
