import React from 'react';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import List from 'react-toolbox/lib/list/List';
import Link from 'react-toolbox/lib/link/Link';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListDivider from 'react-toolbox/lib/list/ListDivider';

class MainNav extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  gotoUrl = (url) => {
    alert(url);
    //window.location= url;
  };

  render () {
    return (
      <div>
        <img src={require('../../images/iconMenu.png')} alt="Show Menu" onClick={this.handleToggle} title="Click to open the main menu."/>
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <div className = 'MenuTitle'>Main Menu</div>
            <List selectable ripple>
            <ListSubHeader caption='Data Entities' className = 'MenuSubHeader'  />
            <ListDivider />
            <Link className = 'MenuLink' href="/Office" label="Office"/>
            <Link href="http://Permissions/Admin/index.aspx" label="User" />
            <Link href="http://Permissions/Admin/index.aspx" label="Permission" />
            <Link href="http://Permissions/Admin/index.aspx" label="Task" />    
            <ListDivider />
            <ListSubHeader caption='Useful Links' className = 'MenuSubHeader' />
            <ListDivider />
            <Link className = 'MenuLink' href="http://Permissions/Admin/index.aspx" label="Home Page" icon={<img src={require('../../images/home.png')} alt="Home"/>} />
            <Link href="http://Permissions/Admin/index.aspx" label="Regular GIS Update" />
            <Link href="http://Permissions/Admin/index.aspx" label="District Update" />
            <ListDivider />
            <ListSubHeader caption='Reports' className = 'MenuSubHeader' />
            <ListDivider />
            <ListItem caption='Rating Valuation Reference'  />
            </List>
        </Drawer>
      </div>
    );
  }
}

export default MainNav;
