import React, { Component, useContext, useEffect, useState } from "react";
import StoreContext from "../contexts/storeContext";
import { loadBugs } from "../store/bugs";

const Bugs = () => {
  let bugsInStore;
  const store = useContext(StoreContext);
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      bugsInStore = store.getState().entities.bugs.list;
      if (bugs !== bugsInStore) setBugs([...bugsInStore]);
    });

    store.dispatch(loadBugs());

    return () => {
      unsubscribe();
    };
  }, [bugsInStore]);

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
