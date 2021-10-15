import React from 'react';
import { Navbar } from 'react-bootstrap';
import { GiDiceTwentyFacesOne } from "react-icons/gi";
import { IconContext } from "react-icons";

export class MainHeaderNav extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark shadow mb-2">
        <Navbar.Brand href="/">
            <IconContext.Provider value={{ size: "1.4em", className: "dice-logo-icon" }}>
                <GiDiceTwentyFacesOne/>
            </IconContext.Provider>
                <span className="text-danger">RP</span>
                <span className="text-light">TAGS</span>
                <span className="text-secondary">WIKI</span>
            </Navbar.Brand>
        </Navbar>
    );
  }
};