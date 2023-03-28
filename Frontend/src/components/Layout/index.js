import React, { Component, Suspense } from "react";
import BackToTop from "./backToTop";


// Layout Components
// const CustomDot = () => {
//   return (
//     <React.Fragment>
//       <FeatherIcon icon="arrow-up" className="icons" />
//     </React.Fragment>
//   );
// };


const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

class Layout extends Component { 
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          {this.props.children}
          <BackToTop />
        </Suspense>

      </React.Fragment>
    );
  }
}

export default Layout;
