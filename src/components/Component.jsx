import React from "react";
import useFetchData from "../hooks/useFetchData";

export const Component = () => {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div>
      <h1>Data from API:</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
