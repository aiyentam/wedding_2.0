import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Contact from "../../components/Contact/Contact";
import wallPaperFour from "../../images/WallPaper/4.png";

const styles = theme => ({
  contactContainer: {
    color: theme.palette.secondary.dark,
    background: `url(${wallPaperFour})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    opacity: 0.8
  }
});

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contactContainer}>
        <Contact />
      </div>
    );
  }
}

export default withStyles(styles)(ContactContainer);
