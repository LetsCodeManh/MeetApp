import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [eventGenreData, setEventGenreData] = useState([]);

  const colors = ["#61DBFB", "#F0DB4F", "#3C873A", "#0868AC", "#B52E31"];

  useEffect(() => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const getData = () => {
      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setEventGenreData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={eventGenreData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {eventGenreData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
