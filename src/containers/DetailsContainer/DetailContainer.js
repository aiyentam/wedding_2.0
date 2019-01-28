import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
// import { Route } from "react-router-dom";
// import VenueContainer from "./VenueContainer/VenueContainer";
import wallTwo from "../../images/WallPaper/Wall02.png";

const styles = theme => ({
  detailContainer: {
    background: `url(${wallTwo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    opacity: 0.8
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
        <h1>testing</h1>
        {/* <Route path="/venue" component={VenueContainer} /> */}
      </div>
    );
  }
}

export default withStyles(styles)(DetailContainer);
