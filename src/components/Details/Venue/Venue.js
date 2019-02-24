import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    textAlign: "center",
    width: "100%",
    height: "100%"
  },
  text: {
    fontFamily: "Alex Brush",
    margin: 0,
    paddingTop: 45,
    textAlign: "center",
    fontSize: 40
  },
  info: {
    display: "inline-flex",
    flexDirection: "column",
    width: "100%",
    height: "92%",
    justifyContent: "space-evenly"
  },
  subText: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    fontSize: 40
  },
  textBodyContainer: {
    height: "100%"
  },
  textBody: {
    height: "30%",
    margin: 25
  },
  headerSubText: {
    fontSize: 18,
    margin: 25
  },
  bride: {
    paddingLeft: 3,
    margin: "25px 0 60px 0"
  },
  groom: {
    paddingLeft: 3
  },
  subTextBody: {
    fontSize: 18,
    borderBottom: "2px solid black",
    borderTop: "2px solid black",
    margin: "30px 165px"
  }
});

class Venue extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.text}>Wedding Information</h1>
        <div className={classes.info}>
          <div className={classes.textBody}>
            <h1 className={classes.subText}>Venue</h1>
            <h1 className={classes.headerSubText}>Vancouver Aquarium</h1>
            <h2 className={classes.headerSubText}>845 Avison Way</h2>
            <h2 className={classes.headerSubText}>Vancouver, BC, V6G 3E2</h2>
          </div>
          <div className={classes.textBodyContainer}>
            <h1 className={classes.subText}>Wedding Party</h1>
            <div className={classes.bride}>
              <h1 className={classes.subTextBody}>Bridesmaid</h1>
              <h2 className={classes.headerSubText}>
                Maid of Honor - Andrea De La Torre
              </h2>
              <h2 className={classes.headerSubText}>
                Bridesmaid - Carmen Chen
              </h2>
              <h2 className={classes.headerSubText}>
                Bridesmaid - Marsha Tiaranai
              </h2>
              <h2 className={classes.headerSubText}>Bridesmaid - Sonnya Yoo</h2>
            </div>
            <div className={classes.groom}>
              <h1 className={classes.subTextBody}>Groomsmen</h1>
              <h2 className={classes.headerSubText}>Best Man - Gary Zhu</h2>
              <h2 className={classes.headerSubText}>Groomsman - Alan Zhu</h2>
              <h2 className={classes.headerSubText}>
                Groomsman - Allen Calderwood
              </h2>
              <h2 className={classes.headerSubText}>Groomsman - Kent White</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Venue);
