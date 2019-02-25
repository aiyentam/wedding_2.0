import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  weddingPartyWrapper: {
    textAlign: "center",
    width: "100%",
    height: "100%"
  },
  textBody: {
    alignSelf: "center"
  },
  info: {
    display: "inline-flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    height: 500
  },
  subText: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    fontSize: 40
  },
  headerSubText: {
    fontSize: 18,
    margin: 25
  },
  bride: {
    margin: "25px 0 30px 0"
  },
  groom: {},
  subTextBody: {
    fontSize: 18,
    textDecoration: "underline overline"
  }
});
class WeddingParty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.weddingPartyWrapper}>
        <h1 className={classes.subText}>Wedding Party</h1>
        <div className={classes.info}>
          <div className={classes.textBody}>
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

export default withStyles(styles)(WeddingParty);
