import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  hotelWrapper: {
    marginBottom: 0,
    textAlign: "center"
  },
  textHeader: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Alex Brush"
  },
  textSubHeader: {
    fontSize: 15
  },
  title: {
    paddingLeft: 3
  },
  textBody: {
    display: "inline-flex",
    fontSize: 30,
    textAlign: "center",
    flexDirection: "column",
    marginTop: 25
  },
  headerSubText: {
    fontSize: 18,
    marginTop: 0,
    marginBottom: 0
  },
  subParagraph: {
    fontSize: 15,
    margin: 0,
    fontStyle: "italic",
    fontWeight: "bold"
  }
};

// https://www.marriott.com/hotels/travel/yvrbr-metropolitan-hotel-vancouver/

class Hotel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hotelWrapper}>
        <h1 className={classes.textHeader}>Hotels</h1>
        <div className={classes.textBody}>
          <div className={classes.title}>
            <p style={{ marginTop: 0, marginBottom: 0 }}>
              Metropolitian Hotel Vancouver
            </p>
            <h1
              className={classes.textHeader}
              style={{ marginTop: 0, marginBottom: 0 }}
            >
              Marriott
            </h1>
          </div>
          <h1 className={classes.textSubHeader}>06/29/2019 - 07/01/2019</h1>
          <p className={classes.subParagraph}>
            *before June 1, 2019 for these rates*
          </p>
          <p className={classes.subParagraph}>
            **please note, this is the weekend of Canada Day**
          </p>
          <div className={classes.textBody}>
            <h2 className={classes.headerSubText}>Luxury King - $429.00 CAD</h2>
            <h2 className={classes.headerSubText}>
              Junior Suite - $529.00 CAD
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Hotel);
