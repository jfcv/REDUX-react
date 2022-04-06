import React, { Component, useContext, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadBugs } from "../store/bugs";

const Bugs = () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.entities.bugs.list);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <div>
      <h1>Bugs</h1>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bugs;
