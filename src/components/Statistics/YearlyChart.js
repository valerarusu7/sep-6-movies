import React, { useEffect, useState, PureComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getYearlyStatistics } from "../../store/reducers/movieReducer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const YearlyChart = ({ styles }) => {
  const { table_data, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYearlyStatistics());
  }, []);

  return (
    <div >
      <h2>Total earning per year</h2>
      <div padding>
        <BarChart 
          width={1000}
          height={750}
          data={table_data}
          margin={{
            top: 100,
            right: 40,
            left: 75,
            bottom: 55,
          }}
          barSize={20}
        >
          <XAxis dataKey="year" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis  dataKey="total_earnings" />
          <Tooltip />
          <Legend  wrapperStyle={{ top: 50 }}/>
          <Bar dataKey="total_earnings" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default YearlyChart;
