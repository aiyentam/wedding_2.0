import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Hotel from "../../../components/Details/Hotel/Hotel";

const styles = theme => ({
  hotelContainer: {
    backgroundcolor: theme.palette.primary.light
  }
});

class HotelContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hotelContainer}>
        <Hotel />
      </div>
    );
  }
}

export default withStyles(styles)(HotelContainer);
