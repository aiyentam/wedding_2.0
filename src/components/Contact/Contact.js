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
  contactContainer: {
    marginLeft: 25,
    display: "flex",
    height: "25%",
    width: "32%",
    border: "15px solid",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    background: "rgba(255, 255, 255, .65)"
  },
  text: {
    fontSize: 40,
    marginBottom: 0
  },
  headerText: {
    margin: 0,
    fontFamily: "Alex Brush",
    fontSize: 55
  },
  subText: {
    fontSize: 25,
    margin: 0,
    fontWeight: "normal",
    color: "black"
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
        <div className={classes.contactContainer}>
          <div className={classes.text}>
            <h1 className={classes.headerText}>Need to Reach Us?</h1>
            <h2 className={classes.subText}>
              tam.aiyen@gmail.com | wu.stephend@gmail.com
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
