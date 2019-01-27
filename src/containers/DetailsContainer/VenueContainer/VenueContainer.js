import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Venue from "../../components/Venue/Venue";

const styles = {
  venueContainer: {}
};

class VenueContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.venuePageContainer}>
        <Venue />
      </div>
    );
  }
}

export default withStyles(styles)(VenueContainer);
