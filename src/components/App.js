import React from 'react';

import SideBar from './SideBar';
import ToggleMenu from './ToggleMenu';
import Main from './Main';
import ScrollToTop from './ScrollToTop';

class App extends React.Component {
  state = {
    isResponsive: false
  }

  handleToggleClick = () => {
    this.setState((prevState) => {
      return {
        isResponsive: !prevState.isResponsive
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <ToggleMenu
          handleClick={this.handleToggleClick}
          isResponsive={this.state.isResponsive}
          color="#FFF"
          bgColor="grey-half"
        />
        <SideBar isResponsive={this.state.isResponsive} />
        <Main />
        <ScrollToTop
          color="#FFF"
          bgColor="grey-half"
        />
      </React.Fragment>
    )
  }
}

export default App;
