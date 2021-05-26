import React, { useState, useEffect } from "react";

const DataList = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setInfo(data);
      });
  }, []);

  const currentInfoList = info.slice(0, 10);

  return (
      <div className="main-div">
    <table >
        <thead>
      <tr>
        <th>Name</th>
        <th>Email </th>
        <th>Role </th>
        <th>Actions </th>
      </tr>
      </thead>
    <tbody>
      {currentInfoList.map((items) => {
        return (
          <tr key={items.name}>
            <td>{items.name}</td>
            <td>{items.email}</td>
            <td>{items.role}</td>
            <td>Edit / Delete</td>
          </tr>
        );
      })}
      </tbody>
    </table>
    </div>
  );
};

export default DataList;
