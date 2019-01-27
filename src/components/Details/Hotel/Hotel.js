import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  hotelWrapper: {}
};

class Hotel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hotelWrapper}>
        <div className={classes.carosel} />
      </div>
    );
  }
}

export default withStyles(styles)(Hotel);
