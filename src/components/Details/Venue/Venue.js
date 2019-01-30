import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  venueWrapper: {
    display: "inline-flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    width: "100%"
  },
  text: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    textAlign: "center",
    fontSize: 40
  },
  subText: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    fontSize: 40
  },
  textBodyContainer: {},
  textBody: {
    display: "inline-flex",
    flexDirection: "column",
    textAlign: "center",
    fontSize: 30
  },
  headerSubText: {
    fontSize: 18,
    marginBottom: 0,
    marginTop: 0
  },
  bride: {
    paddingLeft: 3
  },
  groom: { paddingLeft: 3 },
  subTextBody: {
    fontSize: 18,
    borderBottom: "2px solid black",
    borderTop: "2px solid black"
  }
});

class Venue extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.venueWrapper}>
        <h1 className={classes.text}>Wedding Information</h1>
        <div className={classes.textBody}>
          <h1 className={classes.subText}>Venue</h1>
          <h1 className={classes.headerSubText}>Vancouver Aquarium</h1>
          <h2 className={classes.headerSubText}>845 Avison Way</h2>
          <h2 className={classes.headerSubText}>Vancouver, BC, V6G 3E2</h2>
        </div>
        <div className={classes.textBodyContainer}>
          <h1 className={classes.subText}>Wedding Party</h1>
          <div className={classes.bride}>
            <h1 className={classes.subTextBody}>Bridesmaid</h1>
            <h2 className={classes.headerSubText}>
              Maid of Honor - Andrea De La Torre
            </h2>
            <h2 className={classes.headerSubText}>Bridesmaid - Carmen Chen</h2>
            <h2 className={classes.headerSubText}>
              {" "}
              Bridesmaid - Marsha Tiaranai
            </h2>
            <h2 className={classes.headerSubText}>Bridesmaid - Sonnya Yoo</h2>
          </div>
          <div className={classes.groom}>
            <h1 className={classes.subTextBody}>Groomsmen</h1>
            <h2 className={classes.headerSubText}>Best Man - Gary Zhu</h2>
            <h2 className={classes.headerSubText}>Groomsman - Alan Zhu</h2>
            <h2 className={classes.headerSubText}>
              Groomsman - Allen Calderwood
            </h2>
            <h2 className={classes.headerSubText}>Groomsman - Kent White</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Venue);
