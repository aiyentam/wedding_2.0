import React, { Component } from "react";
import { withStyles, List, ListItem } from "@material-ui/core";

const styles = theme => ({
  activityWrapper: {
    display: "inline-flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 70,
    fontFamily: "Alex Brush",
    marginBottom: 0
  },
  textBody: {
    display: "inline-flex"
  },
  list: {
    fontSize: 18
  },
  listText: {
    fontWeight: 500,
    justifyContent: "center"
  }
});

class Activites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.activityWrapper}>
        <div>
          <div>
            <h1 className={classes.text}>Activities</h1>
          </div>
          <div className={classes.textBody}>
            <List className={classes.list}>
              <ListItem className={classes.listText}>
                Richmond Night Market
              </ListItem>
              <ListItem className={classes.listText}>
                Visit Granville Island
              </ListItem>
              <ListItem className={classes.listText}>Stanley Park</ListItem>
              <ListItem className={classes.listText}>
                Queen Elizabeth Park
              </ListItem>
              <ListItem className={classes.listText}>Canada Place</ListItem>
              <ListItem className={classes.listText}>Gastown</ListItem>
              <ListItem className={classes.listText}>
                Sun Yat-Sen Chinese Gardens
              </ListItem>
              <ListItem className={classes.listText}>Lonsdale Quay</ListItem>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Activites);
