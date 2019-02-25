import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    marginBottom: 0,
    textAlign: "center",
    fontSize: 40
  },
  text: {
    fontFamily: "Alex Brush",
    margin: 0,
    paddingTop: 45,
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
    alignSelf: "center"
  },
  ItineraryInfo: {
    textAlign: "left"
  },
  headerSubText: {
    fontSize: 18,
    marginBottom: 0,
    marginTop: 0
  },
  tba: {
    fontSize: 30,
    textAlign: "center",
    height: 500,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
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
      <div className={classes.wrapper}>
        <h1 className={classes.text}>Wedding Information</h1>
        <h1 className={classes.textHeader}>Itinerary</h1>
        <h1 className={classes.subtextHeader}>(7:00PM ~ 12:59PM)</h1>
        <div className={classes.textBody}>
          <h1 className={classes.tba}>TBA</h1>
        </div>
        {/* <div className={classes.textBody}>
          <div className={classes.ItineraryInfo}>
            <h1 className={classes.headerSubText}>
              7:00PM - Doors Open, Steller's Deck
            </h1>
            <h1 className={classes.headerSubText}>7:30PM - Cermony</h1>
            <h1 className={classes.headerSubText}>7:45PM - Sea Lion Show</h1>
            <h1 className={classes.headerSubText}>
              8:00PM - Steller's Gallery, Dinner
            </h1>
            <h1 className={classes.headerSubText}>
              8:15PM - Wedding Party Introduction
            </h1>
            <h1 className={classes.headerSubText}>9:00PM - First Dance</h1>
            <h1 className={classes.headerSubText}>9:30PM - Games</h1>
            <h1 className={classes.headerSubText}>
              10:15PM - Dance Floor Open
            </h1>
            <h1 className={classes.headerSubText}>12:30PM - Last Call</h1>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withStyles(styles)(Itinerary);
