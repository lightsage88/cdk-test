import React from "react";
import CashDrawer from "../cash-drawer/cash-drawer.js";

class Till extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null
    };
  }

  handleChange(e) {
    console.log("handleChange", e.target.value);
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <>
        <input onChange={(e) => this.handleChange(e)} />
        <button>till</button>
        <CashDrawer money={this.state.inputValue} />
      </>
    );
  }
}

export default Till;
