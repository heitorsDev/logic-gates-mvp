// Circuit.js
import "./Circuit.css";
import Led from "./Led";
import Lever from "./Lever";
import { useEffect, useState } from "react";
import Wire from "./Wire";
import BackGround from "./img/GatesfyColorVIbe.png"
const Circuit = () => {
  const [conn1, setConn1] = useState(false);
  const [conn2, setConn2] = useState(false);
  const [ledOn, setLedOn] = useState(false);
  const [wire1On, setWire1On] = useState(false);

  useEffect(() => {
    if (conn1 && conn2) {
      setLedOn(true);
    } else {
      setLedOn(false);
    }
    if (conn1) {
      setWire1On(true)
    }
  }, [conn1, conn2]);

  return (
    <div className="all" style={{backgroundImage: BackGround}}>
      <div>
        <Led light={ledOn} id={"light1"} />
        <Lever divLock={1} id={"lever1"} setConn1={setConn1} setConn2={setConn2} />
        <Lever divLock={2} id={null} setConn1={setConn1} setConn2={setConn2} />
        <Wire top={400} left={150} color={"red"} on={conn1}></Wire>
        <Wire top={400} left={230} color={"red"} on={conn2}></Wire>
      </div>
    </div>
  );
};

export default Circuit;
