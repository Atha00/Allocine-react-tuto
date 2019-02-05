import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div style={{ display: this.props.flex }}>
        <p>{this.props.label}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Item;
