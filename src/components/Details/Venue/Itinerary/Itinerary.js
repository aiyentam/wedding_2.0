import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  itineraryWrapper: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    textAlign: "center"
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
        <h1>Itinerary</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Itinerary);
