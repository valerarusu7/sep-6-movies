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

function HorizontalList({ list, styles }) {
  var uniqueArray = removeDuplicates(list, "id");
  const listElement = uniqueArray.map((element) => {
    return (
      <div key={element.id} style={{ display: "inline-flex" }}>
        <PersonItem styles={styles} element={element} />
      </div>
    );
  });

  return <div className={styles.horizontalListStyle}>{listElement}</div>;
}

export default HorizontalList;
