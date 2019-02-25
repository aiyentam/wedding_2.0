import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import VenueContainer from "./VenueContainer/VenueContainer";
import wallTwo from "../../images/WallPaper/Wall02.png";
import ItineraryContainer from "./VenueContainer/ItineraryContainer/ItineraryContainer";
import HotelContainer from "../../containers/DetailsContainer/HotelContainer/HotelContainer";
import Slider from "react-slick";
import "./DetailContainer.css";
import MenuContainer from "./MenuContainer/MenuContainer";

const styles = theme => ({
  detailContainer: {
    background: `url(${wallTwo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    opacity: 0.8
  },
  componentWrapper: {
    fontSize: 40,
    height: "90.7%",
    background: theme.palette.primary.light,
    margin: 45,
    opacity: 0.8,
    border: `15px solid rgba(212,197,174, 0.8)`,
    width: "40%"
  }
});
class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { classes } = this.props;
    return (
      <div id="detailsContainer" className={classes.detailContainer}>
        <Slider {...settings} className={classes.componentWrapper}>
          <VenueContainer />
          <HotelContainer />
          <ItineraryContainer />
          <MenuContainer />
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(DetailContainer);
