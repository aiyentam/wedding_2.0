import React, { Component } from "react";
import { withStyles, a } from "@material-ui/core";

const styles = {
  hotelWrapper: {
    marginBottom: 0,
    textAlign: "center"
  },
  textHeader: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Alex Brush",
    marginBottom: 0
  },
  textSubHeader: {
    fontSize: 15
  },
  title: {
    paddingLeft: 3
  },
  hotel: {
    display: "inline-flex",
    flexDirection: "column"
  },
  textBody: {
    display: "inline-flex",
    fontSize: 30,
    textAlign: "center",
    flexDirection: "column",
    margin: "25px 0"
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

class Hotel extends Component {
  render() {
    const { classes, ywca, ramada } = this.props;
    const ywcaUrl = "https://ywcavan.org/hotel/";
    const ramadaUrl = "https://www.ramadadowntownvancouver.com/";
    return (
      <div className={classes.hotelWrapper}>
        <h1 className={classes.textHeader}>Hotels</h1>
        <div className={classes.hotel}>
          <div className={classes.textBody}>
            <div className={classes.title}>
              <p style={{ marginTop: 0, marginBottom: 0 }}>
                <a href={ywcaUrl}>{ywca.name}</a>
              </p>
              <h1 className={classes.textSubHeader}>{ywca.address}</h1>
            </div>
            <h1 className={classes.textSubHeader}>06/27/2019 - 07/01/2019</h1>
            <p className={classes.subParagraph}>{ywca.info[0]}</p>
            <p className={classes.subParagraph}>{ywca.info[1]}</p>
            <div className={classes.textBody}>
              <h2 className={classes.headerSubText}>{ywca.bed[0]}</h2>
              <h2 className={classes.headerSubText}>{ywca.bed[1]}</h2>
            </div>
            <div>
              <h1
                className={classes.textSubHeader}
                style={{ marginBottom: 0, fontStyle: "italic" }}
              >
                For more infomation about other rooms and/or reserve a room
                please contact:
              </h1>
              <h1 className={classes.textSubHeader} style={{ margin: 0 }}>
                {ywca.contact}
              </h1>
              <h1 className={classes.textSubHeader} style={{ marginTop: 0 }}>
                {ywca.promo}
              </h1>
            </div>
          </div>
          <div className={classes.textBody}>
            <div className={classes.title}>
              <p style={{ marginTop: 0, marginBottom: 0 }}>
                <a href={ramadaUrl}>{ramada.name}</a>
              </p>
              <h1 className={classes.textSubHeader}>{ramada.address}</h1>
            </div>
            <h1 className={classes.textSubHeader}>06/27/2019 - 07/01/2019</h1>
            <p className={classes.subParagraph}>{ramada.info[0]}</p>
            <p className={classes.subParagraph}>{ramada.info[1]}</p>
            <div className={classes.textBody}>
              <h2 className={classes.headerSubText}>{ramada.bed[0]}</h2>
              <h2 className={classes.headerSubText}>{ramada.bed[1]}</h2>
            </div>
            <div>
              <h1
                className={classes.textSubHeader}
                style={{ marginBottom: 0, fontStyle: "italic" }}
              >
                For more infomation about other rooms and/or reserve a room
                please contact:
              </h1>
              <h1 className={classes.textSubHeader} style={{ margin: 0 }}>
                {ramada.contact}
              </h1>
              <h1 className={classes.textSubHeader} style={{ marginTop: 0 }}>
                {ramada.promo}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Hotel);
