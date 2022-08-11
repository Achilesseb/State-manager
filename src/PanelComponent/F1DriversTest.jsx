import React from "react";
import { useEffect } from "react";
import { store } from "../stateManager/eventBus";
import { useState } from "react";

const F1DriversTest = () => {
  const [state, setState] = useState(store.getState());
  const callback = (newState) => setState(newState);
  useEffect(() => {
    return store.subscribe("f1Drivers", {
      id: "setF1Drivers",
      callback: callback,
    });
  }, []);
  return (
    <div className="driversName">
      DRIVER TEST COMPONENT
      {state?.f1Drivers.map((driver) => (
        <span key={driver.permanentNumber}>{driver.givenName}</span>
      ))}
    </div>
  );
};
export default F1DriversTest;
