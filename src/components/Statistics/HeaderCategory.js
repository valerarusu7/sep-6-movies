import React from "react";

const HeaderCategory = ({ styles, Icon, name, onClick }) => {
  return (
    <div className={styles.header__category} onClick={onClick}>
      <div className={styles.header__icon}>{Icon && <Icon size={20} />}</div>
      <div>{name}</div>
    </div>
  );
};

export default HeaderCategory;
