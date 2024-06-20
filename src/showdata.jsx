import React, { useState } from "react";
import createResource from "./suspender";

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

const resource = createResource(fetchData());

const Showdata = () => {
  const [jsdata, setJsdata] = useState(resource.read());
  return (
    <div>
      {jsdata.map((each) => (
        <div
          style={{ background: "red", border: "2px solid black" }}
          key={each.email}
        >
          <p>{each.name}</p>
          <p>{each.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Showdata;
