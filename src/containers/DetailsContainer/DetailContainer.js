import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import VenueContainer from "./VenueContainer/VenueContainer";
import wallTwo from "../../images/WallPaper/Wall02.png";
import ItineraryContainer from "./VenueContainer/ItineraryContainer/ItineraryContainer";
import HotelContainer from "../../containers/DetailsContainer/HotelContainer/HotelContainer";

const styles = theme => ({
  detailContainer: {
    background: `url(${wallTwo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    opacity: 0.8
  },
  componentWrapper: {
    fontSize: 40,
    height: "87%",
    background: theme.palette.primary.light,
    margin: 45,
    opacity: 0.8,
    border: `15px solid ${theme.palette.secondary.main}`,
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "-webkit-fill-available"
  }
});

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.detailContainer}>
        <div className={classes.componentWrapper}>
          <VenueContainer />
          <ItineraryContainer />
          <HotelContainer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DetailContainer);
