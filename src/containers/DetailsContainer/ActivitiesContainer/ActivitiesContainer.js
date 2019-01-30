import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import wallPaper from "../../../images/WallPaper/WallPaper.png";
import Activities from "../../../components/Details/Activies/Activities";

const styles = theme => ({
  activitiesContainer: {
    background: `url(${wallPaper})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    opacity: 0.8
  }
});

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.activitiesContainer}>
        <Activities />
      </div>
    );
  }
}

export default withStyles(styles)(ActivitiesContainer);
