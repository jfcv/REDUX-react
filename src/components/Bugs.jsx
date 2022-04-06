import React, { Component, useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import StoreContext from "../contexts/storeContext";
import { loadBugs } from "../store/bugs";

/**
 * Presentation Component : just presents data !
 */
const Bugs = ({ bugs, loadBugs }) => {
  useEffect(() => {
    loadBugs();
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

/**
 * takes the state of the store
 * returns the part of the store that we're
 * interested in
 * properties of this object are gonna end up
 * as props of our component
 */
const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list,
});

/**
 * takes the dispatch fn of the store and
 * map it to the props of our component
 * properties of this object are gonna end up
 * as props of our component
 */
const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
});

/**
 * Container Component : wraps the Presentation Component (Bugs )
 */
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
