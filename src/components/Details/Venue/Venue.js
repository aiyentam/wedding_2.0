import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
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
    textAlign: "center"
  },
  textBody: {
    display: "inline-flex",
    flexDirection: "column",
    textAlign: "center"
  },
  headerText: {
    fontSize: 40,
    fontFamily: "Alex Brush",
    marginBottom: 0
  },
  headerSubText: {
    fontSize: 25,
    marginBottom: 0,
    marginTop: 0
  },
  imageContainer: {
    border: "3px solid black",
    marginTop: 20,
    width: 560
  },
  image: {
    width: 560,
    height: 384
  }
};

class Venue extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.venueWrapper}>
        <h1 className={classes.text}>The Venue</h1>
        <div className={classes.textBody}>
          <h1 className={classes.headerText}>Vancouver Aquarium</h1>
          <h2 className={classes.headerSubText}>845 Avison Way</h2>
          <h2 className={classes.headerSubText}>Vancouver, BC, V6G 3E2</h2>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Venue);
