import React from "react";

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
      <div>
        <p key={element.id}>{element.name}</p>
      </div>
    );
  });
  return <div>{listElement}</div>;
}

export default VerticalList;
