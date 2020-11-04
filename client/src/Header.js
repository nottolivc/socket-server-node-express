import React from "react"
import StickyHeader from 'react-sticky-header';
import logo from "./devicon.svg";
import 'react-sticky-header/styles.css';
import { Link } from "react-router-dom";

const HeaderDev = (props) => {
  return (
<StickyHeader
header={
  <div className="Header_title">
    <h1 className="Header_title">React Instant Chat Messenger</h1>
    <img src={logo} className="logo" alt="" width="100px" />
    <br />
    <Link to="/"><h5 className="header-link">Chat Login</h5></Link>
    <br />
    <Link to="/chat"><h5 className="header-link">Chat</h5></Link> 
    <br />
  </div>
}
>
</StickyHeader> )};

export default HeaderDev;