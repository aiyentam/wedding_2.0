import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Menu from "../../../components/Details/Menu/Menu";

const styles = theme => ({
  menuWrapper: {
    width: "100%",
    height: "100%"
  }
});
class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.menuWrapper}>
        <Menu />
      </div>
    );
  }
}

export default withStyles(styles)(MenuContainer);
