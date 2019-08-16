// import React from "react";
// import Click from "./Click";
// import Hover from "./Hover";
// class counterlogic extends React.Component {
//   state = {
//     count: 0
//   };
//   incrementcount = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
//   render() {
//     return (
//       <div>
//         <Click counts={this.state.count} click={this.incrementcount} />
//         <Hover counts={this.state.count} hover={this.incrementcount} />
//       </div>
//     );
//   }
// }
// export default counterlogic;

import React from "react";

const Counterlogic = Hocex => {
  class NewComponent extends React.Component {
    state = {
      count: 0
    };
    incrementcount = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return (
        <Hocex counts={this.state.count} increment={this.incrementcount} />
      );
    }
  }
  return NewComponent;
};
export default Counterlogic;
