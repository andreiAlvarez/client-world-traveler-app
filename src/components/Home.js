import React from "react";


export default class Home extends React.Component {
  render() {
    console.log("do i have authors: ", this.props);
    return (
       <div>
        <h2> Become a world traveler! </h2>
      </div>
    );
  }
}
