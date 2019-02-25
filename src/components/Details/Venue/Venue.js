import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    textAlign: "center",
    width: "100%",
    height: "100%"
  },
  text: {
    fontFamily: "Alex Brush",
    margin: 0,
    paddingTop: 45,
    textAlign: "center",
    fontSize: 40
  },
  info: {
    display: "inline-flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    height: 500
  },
  subText: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    fontSize: 40
  },
  textBody: {
    alignSelf: "center"
  },
  headerSubText: {
    fontSize: 18,
    margin: 25
  }
});

class Venue extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.text}>Wedding Information</h1>
        <div className={classes.info}>
          <div className={classes.textBody}>
            <h1 className={classes.subText}>Venue</h1>
            <h1 className={classes.headerSubText}>Vancouver Aquarium</h1>
            <h2 className={classes.headerSubText}>845 Avison Way</h2>
            <h2 className={classes.headerSubText}>Vancouver, BC, V6G 3E2</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Venue);
