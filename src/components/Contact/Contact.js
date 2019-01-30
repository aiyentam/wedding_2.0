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
    fontFamily: "Alex Brush",
    marginBottom: 0
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
          <h1>Need to Reach Us?</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
