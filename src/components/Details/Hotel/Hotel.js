import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  hotelWrapper: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    textAlign: "center"
  }
};

class Hotel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hotelWrapper}>
        <h1>Hotels</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Hotel);
