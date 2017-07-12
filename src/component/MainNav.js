import React from 'react';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListDivider from 'react-toolbox/lib/list/ListDivider';

const MainMenu = () => (
  <List selectable ripple>
    <ListDivider />
    <ListSubHeader caption='Data Entities' />
    <ListDivider />
    <ListItem
      caption='Office'
    />
    <ListItem
      caption='User'
    />
    <ListItem
      caption='Permission'
    />
    <ListItem
      caption='Task'
    />
    <ListDivider />
    <ListSubHeader caption='Useful Links' />
    <ListDivider />
    <ListItem caption='Home Page'  />
    <ListItem caption='Regular GIS Update'  />
    <ListItem caption='District Update'  />
    
  </List>
);

class MainNav extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  render () {
    return (
      <div>
        <img src={require('../images/iconMenu.png')} alt="DOC logo" onClick={this.handleToggle}/>
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <h3>Main Menu</h3>
         <MainMenu/>
        </Drawer>
      </div>
    );
  }
}

export default MainNav;
