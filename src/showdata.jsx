import React, { useState, useEffect } from "react";


export const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "John Doe", email: "john@example.com" },
          { name: "Jane Doe", email: "jane@example.com" },
        ]);
      }, 5000);
    });
  };
  



const Showdata = () => {
  const [jsdata, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      {jsdata.map((each) => (
        <div style={{ background: "red", border: "2px solid black" }} key={each.email}>
          <p>{each.name}</p>
          <p>{each.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Showdata;
