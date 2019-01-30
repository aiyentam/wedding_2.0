import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Itinerary from "../../../../components/Details/Venue/Itinerary/Itinerary";

const styles = theme => ({
  itineraryWrapper: {
    width: "100%"
  }
});

class ItineraryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.itineraryWrapper}>
        <Itinerary />
      </div>
    );
  }
}

export default withStyles(styles)(ItineraryContainer);
