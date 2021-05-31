import React from "react";
import HeaderCategory from "./HeaderCategory";
import { FaBalanceScale } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { RiBarChartBoxLine } from "react-icons/ri";

const StatisticsHeader = ({ styles, onClick }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__categories}>
        <HeaderCategory
          styles={styles}
          Icon={FaBalanceScale}
          name="Compare Movies"
          onClick={onClick(1)}
        />
        <HeaderCategory
          styles={styles}
          Icon={RiMoneyDollarBoxLine}
          name="Box Offices"
          onClick={onClick(2)}
        />
        <HeaderCategory
          styles={styles}
          Icon={RiBarChartBoxLine}
          name="Chart"
          onClick={onClick(3)}
        />
      </div>
    </div>
  );
};

export default StatisticsHeader;
