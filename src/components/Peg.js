


import React from "react";
 
const Peg = ({
  setColor,
  activeColor,
  currentRow,
  activeRow,
  pegId,
  previousRow,
}) => {
  const pegsId = +pegId.substr(pegId.indexOf("_") + 1);
  const rowId = +pegId.substr(1, pegId.indexOf("_") - 1);
 
  let space = "";
  if (activeRow === rowId) {
    space = currentRow[pegsId];
  } else {
    for (let i in previousRow) {
      if (+i === +rowId) space = previousRow[rowId][pegsId];
    }
  }
 
  return (
    <button
      className={"peg " + space}
      id={pegId}
      onClick={() => setColor(activeColor, pegId)}
    ></button>
  );
};
 
export default Peg;