import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import WeddingParty from "../../components/WeddingParty/WeddingParty";

const styles = theme => ({
  weddingPartyContainer: {
    width: "100%"
  }
});
class WeddingPartyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.weddingPartyContainer}>
        <WeddingParty />
      </div>
    );
  }
}

export default withStyles(styles)(WeddingPartyContainer);
