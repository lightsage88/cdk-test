import React from "react";

class CashDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dollars: null,
      cents: null,
      noteAmount: "",
      centAmount: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.money !== this.props.money) {
      this.divideMoneyIntoParts();
      // this.determineNoteAmount();
      // this.determineCentAmount();
    }
    console.log("our state: ", this.state);
  }

  divideMoneyIntoParts() {
    let stringMoney = this.props.money.toString();
    console.log(stringMoney);
    console.log(stringMoney.split("."));
    let dollars = stringMoney.split(".")[0];
    let cents = stringMoney.split(".")[1];
    this.setState({
      dollars: Number(dollars),
      cents: Number(cents)
    });
  }

  //dollar types
  //100, 50, 20, 10, 5, 1

  //coin types
  //25, 10, 5, 1

  render() {
    return (
      <div>
        <h1>CashDrawer</h1>
        <strong>Money Received: ${this.props.money}</strong>
      </div>
    );
  }
}

export default CashDrawer;
