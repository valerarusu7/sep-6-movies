import React, { useState } from "react";
import styles from "../styles/Statistics.module.css";
import StatisticsHeader from "../components/Statistics/StatisticsHeader";
import StatisticsCompare from "../components/Statistics/StatisticsCompare";
import BoxOffice from "../components/Statistics/BoxOffice";

const Statistics = ({}) => {
  const [activeContent, setActiveContent] = useState(1);

  const switchContent = () => {
    let component = null;
    switch (activeContent) {
      case 1:
        component = <StatisticsCompare styles={styles} />;
        break;
      case 2:
        component = <BoxOffice styles={styles} />;
        break;
      default:
        component = <div>another screen</div>;
    }
    return component;
  };

  const handleChange = (value) => () => setActiveContent(value);

  return (
    <div className={styles.container}>
      <StatisticsHeader styles={styles} onClick={(id) => handleChange(id)} />
      {switchContent()}
    </div>
  );
};

export default Statistics;
