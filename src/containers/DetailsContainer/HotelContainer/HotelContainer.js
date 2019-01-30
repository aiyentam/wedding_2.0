import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Hotel from "../../../components/Details/Hotel/Hotel";

const styles = theme => ({
  hotelWrapper: {
    width: "100%"
  }
});

class HotelContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hotelWrapper}>
        <Hotel />
      </div>
    );
  }
}

export default withStyles(styles)(HotelContainer);
