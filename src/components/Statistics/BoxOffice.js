import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoxOfficeByYear } from "../../store/reducers/movieReducer";
import requests from "../../store/requests/requests";
import Loading from "../Loading";
import axios from "../../store/requests/axios";
import { useHistory } from "react-router";
import { IoMdArrowForward } from "react-icons/io";

const BoxOffice = ({ styles }) => {
  const { table_data, loading } = useSelector((state) => state.movies);
  const [activeYear, setYear] = useState(2021);
  const [years, setYears] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    generateYears();
    dispatch(getBoxOfficeByYear(activeYear));
  }, []);

  function generateYears() {
    let array = [];
    for (let i = 0; i < 45; i++) {
      let year = { value: 2021 - i };
      array.push(year);
    }
    setYears(array);
  }

  function changeYear(year) {
    setYear(year);
    dispatch(getBoxOfficeByYear(year));
  }

  function goTo(name) {
    axios.get(requests.querySearch(name, activeYear)).then((result) => {
      let id = result.data.results[0].id;
      history.push(`/movie/${id}`);
    });
  }

  return (
    <div className={styles.table__container}>
      <div className={styles.table__toolbar}>
        <div className={styles.years}>
          {years.map((year) => {
            return (
              <div
                className={
                  activeYear !== year.value ? styles.year : styles.active__year
                }
                key={year.value}
                onClick={() => changeYear(year.value)}
              >
                {year.value}
              </div>
            );
          })}
        </div>
        <div
          className={styles.toolbar__text}
        >{`Domestic Box Office For ${activeYear}`}</div>
      </div>
      {loading != true ? (
        <div className={styles.table}>
          <div className={styles.table__row}>
            <div className={styles.row__cell__rank} style={{ fontWeight: 500 }}>
              Rank
            </div>
            <div
              className={styles.row__cell__title}
              style={{ fontWeight: 500 }}
            >
              Title
            </div>
            <div className={styles.row__cell} style={{ fontWeight: 500 }}>
              Earnings
            </div>
            <div className={styles.row__cell} style={{ fontWeight: 500 }}>
              Theaters
            </div>
            <div className={styles.row__cell} style={{ fontWeight: 500 }}>
              Go To
            </div>
          </div>
          {table_data.length != 0
            ? table_data.map((row) => {
                return (
                  <div className={styles.table__row} key={row.rank}>
                    <div
                      className={styles.row__cell__rank}
                      style={{ fontWeight: 500 }}
                    >
                      {row.rank}
                    </div>
                    <div className={styles.row__cell__title}>{row.name}</div>
                    <div className={styles.row__cell}>{`${parseInt(
                      row.gross
                    ).toLocaleString()} $`}</div>
                    <div className={styles.row__cell}>{row.theaters}</div>
                    <div className={styles.row__cell}>
                      <div className={styles.row__icon}>
                        <IoMdArrowForward
                          onClick={() => goTo(row.name)}
                          color="white"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BoxOffice;
