//import expect from 'expect';
import React, { Component } from 'react';
import Background from '../../images/bannertop.jpg';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import './PermAppBar.css';
import MainNav from './MainNav.js';

var headerStyle = {
  height: "50px",
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: "url(" + Background + ")"  
};

var titleStyle = {
  paddingLeft: "15px",
  paddingRight: "0px",
  color: "yellow",
  fontSize: "30px",
  verticalAlign: "middle",
  textAlign: "left",
  width: "350px"
}

var logoStyle = {
  paddingLeft: "0px",
  paddingRight: "0px",  
  verticalAlign: "middle",
  textAlign: "right"
}

 const handleClick = function (event) {
        window.location = "#/roster";
      };

// function foo(x) {
//   alert(X);
// }

const MainMenu = () => (
  <IconMenu  icon= {<img src={require('../../images/iconMenu.png')} alt="DOC logo"/>} position='topLeft' menuRipple >
    <MenuItem value='User' icon= {<img src={require('../../images/searchPerm.png')} alt="Users"/>} caption='Search User' onClick = {handleClick} />
    <MenuItem value='Permissions' icon= {<img src={require('../../images/searchPerm.png')} alt="Permissions"/>} caption='Search Permissions' onClick={() => {alert('Home'); return true;}}  />
    <MenuItem value='Home' icon= {<img src={require('../../images/home.png')} alt="Home"/>}  caption='Permissions Home Page' />
    <MenuDivider />
    <MenuItem value='Tool' icon= {<img src={require('../../images/tool.png')} alt="Home"/>} caption='Advanced Tool' disabled />
  </IconMenu>
);

const AboutMenu = () => (
  <IconMenu  icon= {<img src={require('../../images/more_vert.png')} alt="DOC logo"/>} position='topRight' >
    <MenuItem value='Search User' caption='Help' />
    <MenuItem value='Search Permissions' caption='About' />
  </IconMenu>
);

class PermAppBar extends Component {
  render() {
    return (
      <div className="App">
        <div  style={headerStyle}>
        <table width="100%">
          <tbody>
          <tr>
            <td width="10px"></td>
            <td width="20px"><MainNav/></td>
            {/* <td width="20px"><MainMenu/></td> */}
            <td style={titleStyle} title="To get started, click on the menu items on the left and select an action..." >Developer Portal</td>
            <td style={logoStyle}><a><img src={require('../../images/bannerlogo.png')} alt="DOC logo"/></a></td>
            <td style={logoStyle} width="20px"><AboutMenu/></td>
          </tr>
          </tbody>
        </table>
        </div>
  </div>
);}}

export default PermAppBar;