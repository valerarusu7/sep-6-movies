import React from "react";

function DescriptionItem({ header, value }) {
  return (
    <p>
      <strong>{header} </strong>
      {value}
    </p>
  );
}

export default DescriptionItem;
