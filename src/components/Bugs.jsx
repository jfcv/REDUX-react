import React, {
  Component,
  useContext,
  useEffect,
  useState,
  Fragment,
} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs, resolveBug } from "../store/bugs";

const Bugs = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, [bugs]);

  return (
    <Fragment>
      <h1>Bugs</h1>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => dispatch(resolveBug(bug.id))}>
              Resolve
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Bugs;
