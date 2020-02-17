import React from "react";
import EmployeeList from "../data/employee.json";

function CarInfo(props) {
  console.log(props)

  const results = EmployeeList.filter(employee => employee.name.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Featured Cars</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <img src={result.year} alt="employee profile" /> {result.name} {result.termination}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default CarInfo;
