import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  itineraryWrapper: {
    marginBottom: 0,
    textAlign: "center",
    fontSize: 40
  },
  textHeader: {
    fontFamily: "Alex Brush",
    fontSize: 40,
    marginBottom: 0
  },
  subtextHeader: {
    fontSize: 15,
    marginTop: 0
  },
  subText: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    marginTop: 0,
    fontSize: 40
  },
  textBody: {
    display: "inline-flex",
    flexDirection: "column",
    textAlign: "center",
    fontSize: 30,
    paddingLeft: 70
  },
  ItineraryInfo: {
    textAlign: "left"
  },
  headerSubText: {
    fontSize: 18,
    marginBottom: 0,
    marginTop: 0
  }
});

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.itineraryWrapper}>
        <h1 className={classes.textHeader}>Itinerary</h1>
        <h1 className={classes.subtextHeader}>(7:00PM ~ 11:59PM)</h1>
        <div className={classes.textBody}>
          <div className={classes.ItineraryInfo}>
            <h1 className={classes.headerSubText}>7:30PM - Cermony</h1>
            <h2 className={classes.headerSubText}>8:00PM - Dining Area</h2>
            <h2 className={classes.headerSubText}>
              8:15PM - Wedding Party Introduction
            </h2>
            <h2 className={classes.headerSubText}>8:30PM - Dinner</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Itinerary);
