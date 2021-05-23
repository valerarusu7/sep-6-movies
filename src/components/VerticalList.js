import React from "react";
import PersonItem from "./PersonItem";

function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}

function VerticalList({ list, styles }) {
  var uniqueArray = removeDuplicates(list, "id");
  const listElement = uniqueArray.map((element) => {
    return (
      <>
        <PersonItem styles={styles} element={element} />
      </>
    );
  });

  return <div className={styles.verticalListStyle}>{listElement}</div>;
}

export default VerticalList;
