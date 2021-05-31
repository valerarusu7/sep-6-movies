import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getYearlyStatistics } from "../../store/reducers/movieReducer";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Loading from "../Loading";

const YearlyChart = ({ styles }) => {
  const { table_data, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYearlyStatistics());
  }, []);

  function numFormatter(num) {
    return (num / 1000000).toFixed(0); // convert to M for number from
  }

  function stat(total_earnings, year) {
    this.total_earnings = total_earnings;
    this.year = year;
  }

  let array = [];
  for (const [index, value] of table_data.entries()) {
    const data = new stat(
      numFormatter(table_data[index].total_earnings),
      table_data[index].year
    );
    array.push(data);
  }

  return (
    <>
      {!loading ? (
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Total earnings for top 20 movies per year</h2>
          <div padding>
            <BarChart
              width={1100}
              height={650}
              data={array}
              margin={{
                top: 75,
                right: 40,
                left: 0,
                bottom: 55,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="year"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis dataKey="total_earnings" />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat("en").format(value) + " Million"
                }
              />
              <Legend wrapperStyle={{ top: 20 }} />
              <Bar
                dataKey="total_earnings"
                name={`Total Earnings per Year `}
                fill="#8884d8"
              />
            </BarChart>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default YearlyChart;
