import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  hotelWrapper: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    textAlign: "center"
  },
  textHeader: {
    fontSize: 40
  }
};

class Hotel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hotelWrapper}>
        <h1 className={classes.textHeader}>Hotels</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Hotel);
