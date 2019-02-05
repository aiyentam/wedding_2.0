import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  contactWrapper: {
    display: "inline-flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 40,
    marginBottom: 0
  },
  headerText: {
    margin: 0,
    fontFamily: "Alex Brush"
  },
  subText: {
    fontSize: 25,
    margin: 0,
    fontWeight: "normal",
    textShadow: "1px 1px black"
  }
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contactWrapper}>
        <div className={classes.text}>
          <h1 className={classes.headerText}>Need to Reach Us?</h1>
          <h2 className={classes.subText}>
            tam.aiyen@gmail.com | wu.stephend@gmail.com
          </h2>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
