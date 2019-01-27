import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  venueWrapper: {}
};

class Venue extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.venueWrapper} />;
  }
}

export default withStyles(styles)(Venue);
