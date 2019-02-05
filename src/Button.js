import React from "react";

class Button extends React.Component {
  render() {
    if (this.props.theme === "yellow") {
      return <button className="yellowButton">{this.props.text}</button>;
    } else if (this.props.theme === "black") {
      return <button className="blackButton">{this.props.text}</button>;
    } else if (this.props.theme === "grey") {
      return <button className="greyButton">{this.props.text}</button>;
    }
  }
}

export default Button;
