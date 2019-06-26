import React from 'react';
import SideBar from './SideBar';
import ToggleMenu from './ToggleMenu';
import Main from './Main';

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
        />
        <SideBar isResponsive={this.state.isResponsive} />
        <Main />
      </React.Fragment>
    )
  }
}

export default App;
