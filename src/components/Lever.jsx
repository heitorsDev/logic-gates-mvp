import { useEffect, useState } from "react";
import "./Lever.css";
import imgon from "./img/on.png";
import imgoff from "./img/off.png";

const Lever = ({ id, setConn1, setConn2, divLock }) => {
  const [on, setOn] = useState(false);
  const [lock, setLock] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleToggle = () => {
    if (lock !== null) {
      setOn((prevOn) => !prevOn);
    }
  };

  useEffect(() => {
    if (divLock === 1) {
      setPosition({ x: 115, y: 520 });
      setLock(1);
    } else if (divLock === 2) {
      setPosition({ x: 270, y: 520 });
      setLock(2);
    } else {
      if (lock === 1) {
        setConn1(false);
      }
      if (lock === 2) {
        setConn2(false);
      }
      setLock(null);
    }
  }, [divLock]);

  useEffect(() => {
    if (lock === null) {
      setOn(false);
    }
  }, [lock]);

  useEffect(() => {
    if (on && lock !== null) {
      if (lock === 1) {
        setConn1(true);
        console.log("conn1true");
      } else if (lock === 2) {
        setConn2(true);
        console.log("conn2true");
      }
    } else {
      if (lock === 1) {
        setConn1(false);
        console.log("conn1false");
      } else if (lock === 2) {
        setConn2(false);
        console.log("conn2false");
      }
    }
  }, [on, lock]);

  return (
    <div
      id={id}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={handleToggle}
      className={lock ? `lock-${lock}` : ""}
    >
      {on ? (
        <img src={imgon} className="lever-on" alt="Lever On" />
      ) : (
        <img src={imgoff} className="lever-off" alt="Lever Off" />
      )}
    </div>
  );
};

export default Lever;
